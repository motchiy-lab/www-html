globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_BUsFavph.mjs";
import { t as createComponent } from "./compiler_DZyDMxlT.mjs";
import { t as $$Main } from "./Main_HfdxrRut.mjs";
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": "お問い合わせ" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="contact-section"><h2>お問い合わせ</h2><p>ご質問やお問い合わせは、以下のフォームまたは公式Discordサーバーよりお願いいたします。</p><form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST"><div class="form-row"><div class="form-group"><label for="name">お名前</label><input type="text" id="name" name="name" placeholder="Motchiy" required></div><div class="form-group"><label for="email">メールアドレス</label><input type="email" id="email" name="email" placeholder="info@motchiy.com" required></div></div><label for="message">お問い合わせ内容</label><textarea id="message" name="message" rows="5" required></textarea><button type="submit">送信</button></form></section>` })}`;
}, "C:/Users/motchiy/www-html-frontend/src/pages/contact.astro", void 0);
var $$file = "C:/Users/motchiy/www-html-frontend/src/pages/contact.astro";
var $$url = "/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };
