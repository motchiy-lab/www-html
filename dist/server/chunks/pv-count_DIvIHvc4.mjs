globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_BUsFavph.mjs";
import { t as createComponent } from "./compiler_DZyDMxlT.mjs";
import { t as $$Main } from "./Main_HfdxrRut.mjs";
import { env } from "cloudflare:workers";
//#region src/pages/pv-count.astro
var pv_count_exports = /* @__PURE__ */ __exportAll({
	default: () => $$PvCount,
	file: () => $$file,
	url: () => $$url
});
var $$PvCount = createComponent(async ($$result, $$props, $$slots) => {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	const month = (/* @__PURE__ */ new Date()).getMonth() + 1;
	let pvData = [];
	let errorMessage = "";
	try {
		const db = env.DB;
		if (db) {
			const { results } = await db.prepare("SELECT path, count FROM page_views WHERE year = ? AND month = ? ORDER BY count DESC").bind(year, month).all();
			pvData = results;
		} else errorMessage = "Cloudflare D1データベースバインディング（DB）が見つかりません。";
	} catch (e) {
		errorMessage = "データ取得エラー: " + e.message;
	}
	return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": "プレビューカウンター" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section"><h2 class="pv-title">${year}年 ${month}月 のPV一覧</h2>${errorMessage && renderTemplate`<p class="notice" style="color: #666; margin-bottom: 1rem; font-size: 0.9rem;">${errorMessage}</p>`}<table><thead><tr><th>ページ</th><th>PV</th></tr></thead><tbody>${pvData.length > 0 ? pvData.map((row) => renderTemplate`<tr><td><code>${row.path}</code></td><td>${row.count.toLocaleString()} PV</td></tr>`) : renderTemplate`<tr><td colspan="2">データがまだありません。</td></tr>`}</tbody></table></section>` })}`;
}, "C:/Users/motchiy/www-html-frontend/src/pages/pv-count.astro", void 0);
var $$file = "C:/Users/motchiy/www-html-frontend/src/pages/pv-count.astro";
var $$url = "/pv-count";
//#endregion
//#region \0virtual:astro:page:src/pages/pv-count@_@astro
var page = () => pv_count_exports;
//#endregion
export { page };
