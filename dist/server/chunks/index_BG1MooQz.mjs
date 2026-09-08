globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { b as unescapeHTML, d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_BUsFavph.mjs";
import { t as createComponent } from "./compiler_DZyDMxlT.mjs";
import { t as $$Main } from "./Main_HfdxrRut.mjs";
//#region src/contents/minecraft-server.md
var html = () => "<h2 id=\"motchiy-server\">Motchiy Server</h2>\n<p>Java版・統合版どちらでも参加可能で、誰でも気軽に楽しめるマインクラフトサーバーです。</p>\n<h3 id=\"参加条件\">参加条件</h3>\n<ol>\n<li>ルールを守れる方</li>\n<li>日本在住の方（変更の可能性あり）</li>\n</ol>\n<h3 id=\"サーバーに入ったら\">サーバーに入ったら</h3>\n<p>まずは，ワールドを移動しましょう。<br>\n<code>/server</code>を実行することで，ワールド一覧を表示できます。</p>\n<h3 id=\"おわりに\">おわりに</h3>\n<p>建築・冒険・雑談、なんでも自由！<br>\n<strong>あなたの参加をお待ちしています！</strong></p>\n";
var frontmatter = {};
var file = "C:/Users/motchiy/www-html-frontend/src/contents/minecraft-server.md";
var Content = createComponent((result, _props, slots) => {
	const { layout, ...content } = frontmatter;
	content.file = file;
	content.url = void 0;
	return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
});
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": "ホーム" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section highlight"><h2>このサイトについて</h2><p>Motchiyが運営するマインクラフトサーバーおよび 関連する個人サービスの情報をまとめたポータルサイトです。<br>安定性・セキュリティ・遊びやすさを重視して運営しています。</p></section><section class="section" id="mc-server">${renderComponent($$result, "MinecraftServerContent", Content, {})}<img src="/images/mc-server-banner.png" alt="Server Banner"></section><section class="section highlight"><h2>サーバーステータス</h2><p>現在の稼働状況やメンテナンス情報を掲載します。</p><a href="https://status.motchiy.com/" class="text-link">status.motchiy.com</a><img src="/images/maintenance-page.png" alt="メンテナンス - Motchiy Server"></section><section class="section"><h2>Heiki's Board</h2><h3>概要</h3><p>ログイン不要，広告無しで使えるYouTubeの宣伝掲示板です。</p><a href="https://heiki.motchiy.com/" class="text-link">heiki.motchiy.com</a><img src="/images/heiki-home.png" alt="Heiki's Board - Home page"></section><section class="section"><h2>yt-dlp on Motchiy</h2><h3>概要</h3><p>YouTubeやニコニコなどの動画配信サービスから，動画やサムネイルをダウンロードできるサイトです。</p><a href="https://ytdlp.motchiy.com/" class="text-link">ytdlp.motchiy.com</a><img src="/images/ytdlp-home.png" alt="yt-dlp on Motchiy - Home page"></section><section class="section"><h2>ディスコードボット</h2><p>個人開発で作成した<b>オープンソースのDiscord Bot</b>です。<br>シンプルで拡張しやすい構成を意識して作られています。</p><p>個人サーバーでの利用や、Discord Bot開発の学習用途を想定しています。</p><a class="link-btn" href="discordbot-oss">詳細を見る</a></section><section class="section"><h2>運営</h2><p>これらのサービスは，以下のメンバーによって開発・提供されます。</p><ul><li>Motchiy</li><li>さいほうへいき</li></ul><a class="link-btn" href="profile">詳しく知る</a></section><section class="section highlight"><h2>寄付のお願い</h2><p>このサービスは個人で開発・運営しています。<br>サーバー費用や開発時間はすべて自費でまかなっており、継続的な改善のために寄付を受け付けています。</p><p>もしサービスが役に立ったと感じていただけたら、寄付をご検討いただけると嬉しいです。</p><a href="donate" class="link-btn">寄付方法を見る</a></section><section class="section"><h2>プレビューカウンター</h2><p>どのページにどのくらいアクセスされたかを確認できるページです。</p><a href="pv-count" class="link-btn">ページを見る</a></section>` })}`;
}, "C:/Users/motchiy/www-html-frontend/src/pages/index.astro", void 0);
var $$file = "C:/Users/motchiy/www-html-frontend/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
