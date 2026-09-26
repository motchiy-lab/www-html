import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { Resend } from "resend";

export const prerender = false;

const MAX_REQUEST_BYTES = 32_768;

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function jsonResponse(
    body: { success: boolean; message?: string; errors?: string[] },
    status: number,
): Response {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store",
        },
    });
}

function escapeHtml(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

async function readLimitedBody(request: Request): Promise<string | null> {
    const reader = request.body?.getReader();
    if (!reader) return "";

    const chunks: Uint8Array[] = [];
    let byteLength = 0;

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        byteLength += value.byteLength;
        if (byteLength > MAX_REQUEST_BYTES) {
            await reader.cancel();
            return null;
        }
        chunks.push(value);
    }

    const bytes = new Uint8Array(byteLength);
    let offset = 0;
    for (const chunk of chunks) {
        bytes.set(chunk, offset);
        offset += chunk.byteLength;
    }
    return new TextDecoder().decode(bytes);
}

function validateFormData(value: unknown): {
    data?: ContactFormData;
    errors: string[];
} {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        return { errors: ["入力内容を確認してください。"] };
    }

    const body = value as Record<string, unknown>;
    const data: ContactFormData = {
        name: typeof body.name === "string" ? body.name.trim() : "",
        email: typeof body.email === "string" ? body.email.trim() : "",
        subject:
            typeof body.subject === "string"
                ? body.subject.replace(/[\r\n]+/g, " ").trim()
                : "",
        message: typeof body.message === "string" ? body.message.trim() : "",
    };
    const errors: string[] = [];

    if (data.name.length < 2 || data.name.length > 100) {
        errors.push("お名前は2文字以上、100文字以内で入力してください。");
    }
    if (
        data.email.length > 254 ||
        !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email)
    ) {
        errors.push("有効なメールアドレスを入力してください。");
    }
    if (data.subject.length < 3 || data.subject.length > 150) {
        errors.push("件名は3文字以上、150文字以内で入力してください。");
    }
    if (data.message.length < 10 || data.message.length > 5000) {
        errors.push("お問い合わせ内容は10文字以上、5000文字以内で入力してください。");
    }

    return errors.length > 0 ? { errors } : { data, errors };
}

export const POST: APIRoute = async ({ request }) => {
    const origin = request.headers.get("Origin");
    if (origin) {
        try {
            if (new URL(origin).origin !== new URL(request.url).origin) {
                return jsonResponse(
                    { success: false, errors: ["リクエストを確認できませんでした。"] },
                    403,
                );
            }
        } catch {
            return jsonResponse(
                { success: false, errors: ["リクエストを確認できませんでした。"] },
                403,
            );
        }
    }

    if (!request.headers.get("Content-Type")?.includes("application/json")) {
        return jsonResponse(
            { success: false, errors: ["JSON形式で送信してください。"] },
            415,
        );
    }

    const contentLength = Number(request.headers.get("Content-Length"));
    if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
        return jsonResponse(
            { success: false, errors: ["送信内容が大きすぎます。"] },
            413,
        );
    }

    let rawBody: string | null;
    try {
        rawBody = await readLimitedBody(request);
    } catch {
        return jsonResponse(
            { success: false, errors: ["送信内容を読み取れませんでした。"] },
            400,
        );
    }
    if (rawBody === null) {
        return jsonResponse(
            { success: false, errors: ["送信内容が大きすぎます。"] },
            413,
        );
    }

    let body: unknown;
    try {
        body = JSON.parse(rawBody);
    } catch {
        return jsonResponse(
            { success: false, errors: ["送信内容を読み取れませんでした。"] },
            400,
        );
    }

    const { data, errors } = validateFormData(body);
    if (!data) {
        return jsonResponse({ success: false, errors }, 400);
    }

    const apiKey = env.RESEND_API_KEY?.trim();
    const from = env.CONTACT_FROM_EMAIL?.trim();
    const to = env.CONTACT_TO_EMAIL?.trim();
    if (!apiKey || !from || !to) {
        console.error("Contact form mail configuration is incomplete.");
        return jsonResponse(
            { success: false, errors: ["現在お問い合わせを送信できません。"] },
            503,
        );
    }

    try {
        const resend = new Resend(apiKey);
        const { error } = await resend.emails.send({
            from,
            to,
            replyTo: data.email,
            subject: `【お問い合わせ】${data.subject}`,
            html: `
                <h2>お問い合わせを受け付けました</h2>
                <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
                    <tr>
                        <th style="border: 1px solid #ddd; padding: 12px; background: #f5f5f5; text-align: left;">お名前</th>
                        <td style="border: 1px solid #ddd; padding: 12px;">${escapeHtml(data.name)}</td>
                    </tr>
                    <tr>
                        <th style="border: 1px solid #ddd; padding: 12px; background: #f5f5f5; text-align: left;">メールアドレス</th>
                        <td style="border: 1px solid #ddd; padding: 12px;">${escapeHtml(data.email)}</td>
                    </tr>
                    <tr>
                        <th style="border: 1px solid #ddd; padding: 12px; background: #f5f5f5; text-align: left;">件名</th>
                        <td style="border: 1px solid #ddd; padding: 12px;">${escapeHtml(data.subject)}</td>
                    </tr>
                    <tr>
                        <th style="border: 1px solid #ddd; padding: 12px; background: #f5f5f5; text-align: left;">お問い合わせ内容</th>
                        <td style="border: 1px solid #ddd; padding: 12px; white-space: pre-wrap;">${escapeHtml(data.message)}</td>
                    </tr>
                </table>
            `,
        });

        if (error) {
            console.error("Resend failed to send the contact email:", error);
            return jsonResponse(
                { success: false, errors: ["メールの送信に失敗しました。"] },
                502,
            );
        }
    } catch (error) {
        console.error("Contact form email delivery failed:", error);
        return jsonResponse(
            {
                success: false,
                errors: ["送信に失敗しました。時間をおいて再度お試しください。"],
            },
            502,
        );
    }

    return jsonResponse(
        { success: true, message: "お問い合わせを送信しました。" },
        200,
    );
};
