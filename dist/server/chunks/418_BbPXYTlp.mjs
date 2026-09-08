globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_BUsFavph.mjs";
import { t as createComponent } from "./compiler_DZyDMxlT.mjs";
import { t as $$Main } from "./Main_HfdxrRut.mjs";
//#region src/pages/418.astro
var _418_exports = /* @__PURE__ */ __exportAll({
	default: () => $$418,
	file: () => $$file,
	url: () => $$url
});
var $$418 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": "418 I'm a teapot" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section highlight" style="text-align: center;"><h2>418 I'm a teapot</h2><p>私はティーポットです。コーヒーを淹れることはできません。</p><a href="/" class="link-btn">ホームに戻る</a></section>` })}`;
}, "C:/Users/motchiy/www-html-frontend/src/pages/418.astro", void 0);
var $$file = "C:/Users/motchiy/www-html-frontend/src/pages/418.astro";
var $$url = "/418";
//#endregion
//#region \0virtual:astro:page:src/pages/418@_@astro
var page = () => _418_exports;
//#endregion
export { page };
