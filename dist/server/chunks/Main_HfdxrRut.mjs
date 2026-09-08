globalThis.process ??= {};
globalThis.process.env ??= {};
import { C as createAstro, d as maybeRenderHead, f as renderHead, i as renderComponent, m as createRenderInstruction, p as addAttribute, s as renderSlot, u as renderTemplate } from "./server_BUsFavph.mjs";
import { t as createComponent } from "./compiler_DZyDMxlT.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/Menu.astro
var $$Menu = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<a href="/">ホームへ戻る</a><a href="/donate">寄付のお願い</a><a href="/profile">プロフィール</a><a href="/terms">規約とプライバシー</a><a href="/pv-count">プレビューカウンター</a><a href="/discordbot-oss">ディスコードボット</a><a href="/contact">お問い合わせ</a>`;
}, "C:/Users/motchiy/www-html-frontend/src/components/Menu.astro", void 0);
//#endregion
//#region src/components/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="header"><div class="header-title"><h1><a href="https://www.motchiy.com/">Motchiy Server</a></h1></div></header><!-- フロートメニュー --><input type="checkbox" id="menu-btn-check"><label for="menu-btn-check" class="menu-btn"><span></span></label><nav class="menu"><h2>メニュー</h2>${renderComponent($$result, "Menu", $$Menu, {})}</nav><!-- パンくずリスト --><nav class="breadcrumb-wrap"><!--?php include 'breadcrumbs.php'; ?--></nav><!-- アヒルボタン --><a type="button" class="duck-btn" href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%92%E3%83%AB"></a>`;
}, "C:/Users/motchiy/www-html-frontend/src/components/Header.astro", void 0);
//#endregion
//#region src/components/Contact.astro
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<!-- お問い合わせ --><section class="section highlight"><h2>お問い合わせ</h2><p>サーバー参加希望、バグ報告、ご意見・ご要望などは、<br>以下のいずれかの方法でご連絡ください。</p><p><a href="/contact" class="link-btn">お問い合わせページ</a><a href="mailto:info@motchiy.com" class="link-btn">Eメール</a></p></section>`;
}, "C:/Users/motchiy/www-html-frontend/src/components/Contact.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<!-- お問い合わせ -->${renderComponent($$result, "Contact", $$Contact, {})}<!-- パソコン広告 --><!--?php if (!is_mobile()): ?-->${maybeRenderHead($$result)}<div class="ad-inline">${renderScript($$result, "C:/Users/motchiy/www-html-frontend/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}</div><!--?php endif; ?--><!-- スマホ広告 --><!--?php if (is_mobile()): ?--><div class="ad-inline">${renderScript($$result, "C:/Users/motchiy/www-html-frontend/src/components/Footer.astro?astro&type=script&index=1&lang.ts")}</div><!--?php endif; ?--><footer class="footer"><div class="share-buttons"><a class="share-btn twitter" target="_blank" rel="noopener"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" class="icon" alt="Twitterアイコン"><!--?php if (is_mobile()): ?-->で共有<!--?php else: ?-->Twitterで共有<!--?php endif; ?--></a><a class="share-btn facebook" target="_blank" rel="noopener"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" class="icon" alt="Facebookアイコン"><!--?php if (is_mobile()): ?-->で共有<!--?php else: ?-->Facebookで共有<!--?php endif; ?--></a><a class="share-btn line" target="_blank" rel="noopener"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/line.svg" class="icon" alt="LINEアイコン"><!--?php if (is_mobile()): ?-->で共有<!--?php else: ?-->LINEで共有<!--?php endif; ?--></a></div><p class="copyright">&copy; 2026 Motchiy</p></footer><!-- 右広告 --><aside class="ad-banner ad-right">${renderScript($$result, "C:/Users/motchiy/www-html-frontend/src/components/Footer.astro?astro&type=script&index=2&lang.ts")}${renderScript($$result, "C:/Users/motchiy/www-html-frontend/src/components/Footer.astro?astro&type=script&index=3&lang.ts")}</aside>`;
}, "C:/Users/motchiy/www-html-frontend/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/GoogleTag.astro
var $$GoogleTag = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-P0RBW7MM0G"><\/script>${renderScript($$result, "C:/Users/motchiy/www-html-frontend/src/components/GoogleTag.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/motchiy/www-html-frontend/src/components/GoogleTag.astro", void 0);
//#endregion
//#region src/layouts/Main.astro
createAstro("https://astro.build");
var $$Main = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Main;
	const { pageTitle, description = "", canonical = Astro.url.href } = Astro.props;
	return renderTemplate`<html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${pageTitle} - Motchiy Server</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonical, "href")}><meta property="og:site_name" content="Motchiy Server"><meta property="og:title"${addAttribute(`${pageTitle} - Motchiy Server`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:image" content="/images/ogp.png"><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="/favicon.png"><link rel="apple-touch-icon" href="/images/apple-touch-icon.png">${renderComponent($$result, "GoogleTag", $$GoogleTag, {})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<div class="main-layout"><!-- 左広告 --><aside class="ad-banner ad-left">${renderScript($$result, "C:/Users/motchiy/www-html-frontend/src/layouts/Main.astro?astro&type=script&index=0&lang.ts")}${renderScript($$result, "C:/Users/motchiy/www-html-frontend/src/layouts/Main.astro?astro&type=script&index=1&lang.ts")}</aside><!-- サイドメニュー --><nav id="side-menu" class="side-menu">${renderComponent($$result, "Menu", $$Menu, {})}</nav><main class="container"><!--  <MaintenanceNotice /> -->${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, { "title": pageTitle })}</main><!-- 右広告 --><aside class="ad-banner ad-right">${renderScript($$result, "C:/Users/motchiy/www-html-frontend/src/layouts/Main.astro?astro&type=script&index=2&lang.ts")}${renderScript($$result, "C:/Users/motchiy/www-html-frontend/src/layouts/Main.astro?astro&type=script&index=3&lang.ts")}</aside></div>${renderScript($$result, "C:/Users/motchiy/www-html-frontend/src/layouts/Main.astro?astro&type=script&index=4&lang.ts")}</body></html>`;
}, "C:/Users/motchiy/www-html-frontend/src/layouts/Main.astro", void 0);
//#endregion
export { $$Main as t };
