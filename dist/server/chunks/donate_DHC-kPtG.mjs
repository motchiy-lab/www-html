globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { d as maybeRenderHead, i as renderComponent, p as addAttribute, u as renderTemplate } from "./server_BUsFavph.mjs";
import { t as createComponent } from "./compiler_DZyDMxlT.mjs";
import { t as $$Main } from "./Main_HfdxrRut.mjs";
//#region src/data/expenses.json
var expenses_default = [
	{
		"type": "header",
		"version": "5.2.1deb3",
		"comment": "Export to JSON plugin for PHPMyAdmin"
	},
	{
		"type": "database",
		"name": "web_db"
	},
	{
		"type": "table",
		"name": "expenses",
		"database": "web_db",
		"data": [
			{
				"id": "1",
				"item": "gigabyte-b660m-ds3h-ddr4",
				"category": "pc-parts",
				"amount": "14091",
				"purchased_at": "2022-11-03",
				"description": "mb",
				"receipt_url": "https://motchiy.f5.si/receipt/20221103-dospara.pdf",
				"created_at": "2026-02-15 21:40:16"
			},
			{
				"id": "2",
				"item": "palit-ne6166s018j9-1160a-1",
				"category": "pc-parts",
				"amount": "26800",
				"purchased_at": "2022-11-03",
				"description": "gpu",
				"receipt_url": "https://motchiy.f5.si/receipt/20221103-dospara.pdf",
				"created_at": "2026-02-15 21:52:00"
			},
			{
				"id": "3",
				"item": "fsp-ha650",
				"category": "pc-parts",
				"amount": "6480",
				"purchased_at": "2022-11-03",
				"description": "power-unit",
				"receipt_url": "https://motchiy.f5.si/receipt/20221103-dospara.pdf",
				"created_at": "2026-02-15 21:55:27"
			},
			{
				"id": "4",
				"item": "thermaltake-ca-1j5-00m6wn-01",
				"category": "pc-parts",
				"amount": "4980",
				"purchased_at": "2022-11-03",
				"description": "pc-case",
				"receipt_url": "https://motchiy.f5.si/receipt/20221103-dospara.pdf",
				"created_at": "2026-02-15 21:56:24"
			},
			{
				"id": "5",
				"item": "intel-core-i3-12100f-box",
				"category": "pc-parts",
				"amount": "16254",
				"purchased_at": "2022-11-03",
				"description": "cpu",
				"receipt_url": "https://motchiy.f5.si/receipt/20221103-dospara.pdf",
				"created_at": "2026-02-15 21:57:09"
			},
			{
				"id": "6",
				"item": "crucial-ct2k8g4dfra32a",
				"category": "pc-parts",
				"amount": "6180",
				"purchased_at": "2022-11-03",
				"description": "ram",
				"receipt_url": "https://motchiy.f5.si/receipt/20221103-dospara.pdf",
				"created_at": "2026-02-15 21:58:13"
			},
			{
				"id": "7",
				"item": "crucial-p3-ct500p3ssd8jp",
				"category": "pc-parts",
				"amount": "7280",
				"purchased_at": "2022-11-03",
				"description": "ssd",
				"receipt_url": "https://motchiy.f5.si/receipt/20221103-dospara.pdf",
				"created_at": "2026-02-15 21:59:15"
			},
			{
				"id": "8",
				"item": "ms-windows-11-home-jp",
				"category": "pc-parts",
				"amount": "16580",
				"purchased_at": "2022-11-03",
				"description": "os",
				"receipt_url": "https://motchiy.f5.si/receipt/20221103-dospara.pdf",
				"created_at": "2026-02-15 22:02:16"
			},
			{
				"id": "9",
				"item": "deepcool-ak400-wh",
				"category": "pc-parts",
				"amount": "3500",
				"purchased_at": "2022-11-03",
				"description": "cpu-cooler",
				"receipt_url": "https://motchiy.f5.si/receipt/20221103-dospara.pdf",
				"created_at": "2026-02-15 22:02:58"
			},
			{
				"id": "10",
				"item": "asu650ss-2tt-dp",
				"category": "pc-parts",
				"amount": "15980",
				"purchased_at": "2024-02-23",
				"description": "ssd",
				"receipt_url": "https://motchiy.f5.si/receipt/20240223-dospara.png",
				"created_at": "2026-02-16 23:43:38"
			},
			{
				"id": "11",
				"item": "wd80eaaz",
				"category": "pc-parts",
				"amount": "19110",
				"purchased_at": "2024-07-28",
				"description": "hdd",
				"receipt_url": "https://motchiy.f5.si/receipt/20240728-biccamera.pdf",
				"created_at": "2026-02-16 23:45:43"
			},
			{
				"id": "12",
				"item": "motchiy.com",
				"category": "domain",
				"amount": "1820",
				"purchased_at": "2026-02-20",
				"description": "cloudflare",
				"receipt_url": "https://www.motchiy.com/receipt/20260222-cloudflare.pdf",
				"created_at": "2026-02-22 02:55:42"
			}
		]
	}
];
//#endregion
//#region src/pages/donate.astro
var donate_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Donate,
	file: () => $$file,
	url: () => $$url
});
var $$Donate = createComponent(($$result, $$props, $$slots) => {
	const categoryDict = {
		"pc-parts": "PCパーツ",
		domain: "ドメイン"
	};
	const tableNode = expenses_default.find((node) => node.type === "table" && node.name === "expenses");
	const rows = tableNode && tableNode.data ? [...tableNode.data].reverse() : [];
	return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": "寄付のお願い" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section"><h2>寄付のお願い</h2><p>このサービスは個人で開発・運営しています。<br>サーバー費用や開発時間はすべて自費でまかなっており、継続的な改善のために寄付を受け付けています。</p><p>もしサービスが役に立ったと感じていただけたら、寄付をご検討いただけると嬉しいです。</p><a href="#how-to" class="link-btn">寄付方法を見る</a></section><section class="section" id="how-to"><h2>寄付方法</h2><h3>Amazonギフト券</h3><p>以下のメールアドレスに，eギフトカードを送ってください</p><a href="mailto:donate@motchiy.com">donate@motchiy.com</a><br><a href="https://www.amazon.co.jp/dp/B006DTLXSK?ref=altParentAsins_treatment_text_from_Any_to_Amazon&customizationToken=undefined&th=1">￥150～￥200,000</a></section><section class="section"><h2>寄付していただいた方へ</h2><p>寄付していただいた方には、感謝の気持ちを込めて特別な機能や限定コンテンツを提供する予定です。</p></section><section class="section"><h2>収支報告</h2><p>寄付金の使い道や収支状況については、定期的に報告する予定です。<br>透明性を大切にしていきます。</p><table><thead><tr><th>購入したもの</th><th class="amount">金額</th><th>カテゴリ</th><th class="purchased_at">購入日</th></tr></thead><tbody>${rows.map((row) => {
		const item = (row.item || "").toUpperCase().replace(/-/g, " ");
		const receiptUrl = row.receipt_url || "";
		const amount = parseInt(row.amount || "0", 10).toLocaleString() + "円";
		const category = categoryDict[row.category] || row.category;
		let purchasedAtFormatted = "";
		if (row.purchased_at) {
			const [y, m, d] = row.purchased_at.split("-");
			purchasedAtFormatted = `${y}年 ${parseInt(m, 10)}月 ${parseInt(d, 10)}日`;
		}
		return renderTemplate`<tr><td>${receiptUrl ? renderTemplate`<a${addAttribute(receiptUrl, "href")} class="text-link">${item}</a>` : item}</td><td class="amount">${amount}</td><td>${category}</td><td>${purchasedAtFormatted}</td></tr>`;
	})}</tbody></table></section><section class="section"><h2>最後に</h2><p>このサービスをより良くするために、皆様のご支援とフィードバックをお待ちしています。<br>今後もよろしくお願いします。</p></section>` })}`;
}, "C:/Users/motchiy/www-html-frontend/src/pages/donate.astro", void 0);
var $$file = "C:/Users/motchiy/www-html-frontend/src/pages/donate.astro";
var $$url = "/donate";
//#endregion
//#region \0virtual:astro:page:src/pages/donate@_@astro
var page = () => donate_exports;
//#endregion
export { page };
