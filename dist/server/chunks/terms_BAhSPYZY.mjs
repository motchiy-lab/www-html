globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { b as unescapeHTML, d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_BUsFavph.mjs";
import { t as createComponent } from "./compiler_DZyDMxlT.mjs";
import { t as $$Main } from "./Main_HfdxrRut.mjs";
//#region src/contents/rules.md
var html$1 = () => "<h3 id=\"1-概要\">1. 概要</h3>\n<p>本規約は，Motchiyが個人で運営する以下のサービスに適用されます。</p>\n<ul>\n<li>Minecraftサーバー</li>\n<li>公式Discordサーバー</li>\n<li>その他Motchiyが提供するすべての関連Webサービス</li>\n</ul>\n<p>すべてのサービスは趣味で運営されており，安定稼働に努めていますが，メンテナンスや障害により停止する場合があります。</p>\n<h3 id=\"2-適用範囲\">2. 適用範囲</h3>\n<p>本規約は，Motchiyが提供するすべてのサービス利用者に適用されます。</p>\n<h3 id=\"3-目的\">3. 目的</h3>\n<p>本規約は，利用者が安全かつ快適にサービスを利用できる環境を維持することを目的としています。</p>\n<h3 id=\"4-禁止行為\">4. 禁止行為</h3>\n<h4 id=\"4-1-ゲームプレイ\">4-1. ゲームプレイ</h4>\n<ul>\n<li>不正クライアント・チート・外部ツールの使用</li>\n<li>サーバーに過度な負荷を与える行為</li>\n<li>バグ・不具合の悪用</li>\n<li>他者の建築物・チェスト等への不正アクセス</li>\n<li>運営が不適切と判断する行為</li>\n<li>VPNの使用</li>\n</ul>\n<h4 id=\"4-2-コミュニティ\">4-2. コミュニティ</h4>\n<ul>\n<li>荒らし，スパム，嫌がらせ</li>\n<li>他者を攻撃・侮辱する目的の暴言</li>\n<li>過度な勧誘行為（他サーバー・外部サービス等）</li>\n<li>公序良俗に反する投稿・発言</li>\n</ul>\n<h3 id=\"5-掲示板の利用について\">5. 掲示板の利用について</h3>\n<ul>\n<li>サーバーの案内・質問・連絡などに利用できます。</li>\n<li>掲示板のみの利用でもMinecraftサーバーへの参加は可能です。</li>\n<li>公序良俗に反する投稿は禁止します。</li>\n<li>運営が不適切と判断した投稿は削除する場合があります。</li>\n</ul>\n<h3 id=\"6-公式discordサーバーの利用について\">6. 公式Discordサーバーの利用について</h3>\n<ul>\n<li>公式Discordサーバーへの参加は任意です。</li>\n<li>Discordの<a href=\"https://support.discord.com/hc/ja/sections/115000344951-%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC%E3%81%A8%E8%A6%8F%E7%B4%84\">ポリシーと規約</a>を遵守してください。</li>\n<li>認証や連絡のため，Discordアカウント情報を利用する場合があります。</li>\n</ul>\n<h3 id=\"7-データの取り扱い\">7. データの取り扱い</h3>\n<ul>\n<li>荒らし対策のため，ログや操作履歴を一定期間保存する場合があります。</li>\n<li>個人情報の収集は行いません。</li>\n<li>データ破損・消失が発生した場合，運営は責任を負いません。</li>\n<li>利用者が投稿した内容は，必要に応じて運営が管理・削除する場合があります。</li>\n</ul>\n<h3 id=\"8-処罰について\">8. 処罰について</h3>\n<p>規約違反が確認された場合，以下の措置を行うことがあります。</p>\n<ul>\n<li>注意</li>\n<li>一時的な利用制限</li>\n<li>永久BAN</li>\n</ul>\n<p>悪質な場合は警告なしで即時処罰を行うことがあります。<br>\n処罰内容は掲示板または公式Discordサーバーのみで通知する場合があります。</p>\n<h3 id=\"9-免責事項\">9. 免責事項</h3>\n<ul>\n<li>サーバーやサービスは予告なく停止・再起動する場合があります。</li>\n<li>データ消失，通信障害，その他のトラブルについて運営は責任を負いません。</li>\n<li>利用者間のトラブルは原則として当事者間で解決してください。</li>\n<li>運営は利用者に対していかなる保証も行いません。</li>\n</ul>\n<h3 id=\"10-規約の変更\">10. 規約の変更</h3>\n<ul>\n<li>必要に応じて規約を変更する場合があります。</li>\n<li>規約変更後もサービスを利用することで，変更に同意したものとみなします。</li>\n<li>変更があった場合は掲示板または公式Discordサーバーで告知します。</li>\n</ul>\n<h3 id=\"11-その他\">11. その他</h3>\n<ul>\n<li>詳しい情報は<a href=\"https://www.motchiy.com/wiki\">公式Wiki</a>を参照してください。</li>\n<li>公式Discordサーバーから，運営に問い合わせることができます。<br>\n（返信が遅れる場合があります）</li>\n</ul>\n";
var frontmatter$1 = {};
var file$1 = "C:/Users/motchiy/www-html-frontend/src/contents/rules.md";
var Content$1 = createComponent((result, _props, slots) => {
	const { layout, ...content } = frontmatter$1;
	content.file = file$1;
	content.url = void 0;
	return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1())}`;
});
//#endregion
//#region src/contents/privacy-policy.md
var html = () => "<p>『Motchiy Server』（以下、「当サイト」）は、当サイトにおけるユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。</p>\n<h3 id=\"1-個人情報の取得方法\">1. 個人情報の取得方法</h3>\n<p>当サイトでは、お問い合わせフォームやコメント投稿時に、以下の個人情報を取得することがあります。</p>\n<ul>\n<li>メールアドレス</li>\n<li>IPアドレス</li>\n<li>Cookie（クッキー）</li>\n<li>その他お問い合わせ内容に含まれる情報</li>\n</ul>\n<h3 id=\"2-個人情報の利用目的\">2. 個人情報の利用目的</h3>\n<p>取得した個人情報は、以下の目的で利用します。</p>\n<ul>\n<li>お問い合わせへの回答</li>\n<li>必要な情報のご連絡</li>\n<li>不正行為・スパムの防止</li>\n<li>サイト改善およびアクセス解析</li>\n</ul>\n<h3 id=\"3-アクセス解析ツールについて\">3. アクセス解析ツールについて</h3>\n<p>当サイトでは、アクセス解析のために外部ツールを利用する場合があります。<br>\nこれらのツールはトラフィックデータ収集のためにCookieを使用することがあります。</p>\n<p>※例：</p>\n<ul>\n<li>Googleアナリティクス</li>\n<li>Googleアドセンス</li>\n</ul>\n<p>収集されるデータは匿名であり、個人を特定するものではありません。</p>\n<h3 id=\"4-広告配信について\">4. 広告配信について</h3>\n<p>当サイトでは、第三者配信の広告サービスを利用する場合があります。<br>\n広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。</p>\n<p>ユーザーはブラウザ設定によりCookieを無効にすることが可能です。</p>\n<h3 id=\"5-個人情報の第三者提供\">5. 個人情報の第三者提供</h3>\n<p>取得した個人情報は、以下の場合を除き第三者に開示することはありません。</p>\n<ul>\n<li>本人の同意がある場合</li>\n<li>法令に基づく場合</li>\n</ul>\n<h3 id=\"6-個人情報の開示訂正削除\">6. 個人情報の開示・訂正・削除</h3>\n<p>ユーザーからの個人情報の開示・訂正・削除のご希望があった場合、確認のうえ適切に対応いたします。<br>\n※ご本人かどうかの確認ができない場合は，対応を見送る可能性があります。</p>\n<h3 id=\"7-免責事項\">7. 免責事項</h3>\n<p>当サイトに掲載する情報は、可能な限り正確な情報を提供するよう努めていますが、正確性や安全性を保証するものではありません。</p>\n<p>リンクやバナーなどから移動した外部サイトで提供される情報やサービスについては一切の責任を負いません。</p>\n<h3 id=\"8-著作権\">8. 著作権</h3>\n<p>当サイトに掲載されている文章・画像等の著作物の無断転載を禁止します。</p>\n<h3 id=\"9-プライバシーポリシーの変更\">9. プライバシーポリシーの変更</h3>\n<p>本ポリシーの内容は、法令等の変更や必要に応じて予告なく変更することがあります。</p>\n";
var frontmatter = {};
var file = "C:/Users/motchiy/www-html-frontend/src/contents/privacy-policy.md";
var Content = createComponent((result, _props, slots) => {
	const { layout, ...content } = frontmatter;
	content.file = file;
	content.url = void 0;
	return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
});
//#endregion
//#region src/pages/terms.astro
var terms_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Terms,
	file: () => $$file,
	url: () => $$url
});
var $$Terms = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": "規約とプライバシー" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section"><h2>利用規約</h2>${renderComponent($$result, "RulesContent", Content$1, {})}</section><section class="section"><h2>プライバシーポリシー</h2>${renderComponent($$result, "PrivacyContent", Content, {})}</section>` })}`;
}, "C:/Users/motchiy/www-html-frontend/src/pages/terms.astro", void 0);
var $$file = "C:/Users/motchiy/www-html-frontend/src/pages/terms.astro";
var $$url = "/terms";
//#endregion
//#region \0virtual:astro:page:src/pages/terms@_@astro
var page = () => terms_exports;
//#endregion
export { page };
