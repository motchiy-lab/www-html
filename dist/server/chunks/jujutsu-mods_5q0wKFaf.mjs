globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { d as maybeRenderHead, i as renderComponent, p as addAttribute, u as renderTemplate } from "./server_BUsFavph.mjs";
import { t as createComponent } from "./compiler_DZyDMxlT.mjs";
import { t as $$Main } from "./Main_HfdxrRut.mjs";
//#region src/pages/jujutsu-mods.astro
var jujutsu_mods_exports = /* @__PURE__ */ __exportAll({
	default: () => $$JujutsuMods,
	file: () => $$file,
	url: () => $$url
});
var $$JujutsuMods = createComponent(($$result, $$props, $$slots) => {
	const mods = [
		"GVCLib__1.20.1__beta2.2.jar",
		"GVCObjModel__1.20.1__2.4.jar",
		"GVCR3__1.20.1__trial1.1.jar",
		"JujutsuCraft-ver44.3-forge-1.20.1.jar",
		"Neat-1.20.1-41-FORGE.jar",
		"bobakugarasu-1.0.0-forge-1.20.1.jar",
		"geckolib-forge-1.20.1-4.7.4.jar",
		"jei-1.20.1-forge-15.20.0.112.jar",
		"player-animation-lib-forge-1.0.2-rc1+1.20.jar",
		"toolleveling-forge-1.20.1-2.0.0.jar"
	];
	return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": "Jujutsu Mods" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section"><h2>呪術廻戦サーバー用MOD一覧</h2><p>サーバーで使用しているMOD一覧です。個別にダウンロードできます。</p><ul>${mods.map((mod) => renderTemplate`<li><a${addAttribute(`/jujutsu-mods/${mod}`, "href")} download class="text-link">${mod}</a></li>`)}</ul></section>` })}`;
}, "C:/Users/motchiy/www-html-frontend/src/pages/jujutsu-mods.astro", void 0);
var $$file = "C:/Users/motchiy/www-html-frontend/src/pages/jujutsu-mods.astro";
var $$url = "/jujutsu-mods";
//#endregion
//#region \0virtual:astro:page:src/pages/jujutsu-mods@_@astro
var page = () => jujutsu_mods_exports;
//#endregion
export { page };
