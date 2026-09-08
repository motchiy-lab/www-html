globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { d as maybeRenderHead, i as renderComponent, p as addAttribute, u as renderTemplate } from "./server_BUsFavph.mjs";
import { t as createComponent } from "./compiler_DZyDMxlT.mjs";
import { t as $$Main } from "./Main_HfdxrRut.mjs";
//#region src/data/items_motchiy.json
var items_motchiy_default = [
	{
		"title": "X (Twitter)",
		"links": [{
			"url": "https://x.com/motchiy_tuti",
			"label": "投稿を見る"
		}]
	},
	{
		"title": "Twitch",
		"links": [{
			"url": "https://twitch.tv/motchiy_tuti",
			"label": "配信を見る"
		}]
	},
	{
		"title": "ニコニコ動画",
		"links": [{
			"url": "https://www.nicovideo.jp/user/132971421",
			"label": "投稿動画を見る"
		}]
	},
	{
		"title": "公式LINE",
		"links": [{
			"url": "https://lin.ee/jVUudSs",
			"label": "友だちに追加"
		}]
	},
	{
		"title": "GitHub",
		"links": [{
			"url": "https://github.com/MotchiyTuti",
			"label": "プロジェクト一覧"
		}]
	},
	{
		"title": "Linktree",
		"links": [{
			"url": "https://linktr.ee/motchiy_tuti",
			"label": "リンクまとめ"
		}]
	},
	{
		"title": "Qiita",
		"links": [{
			"url": "https://qiita.com/Motchiy_tuti",
			"label": "投稿記事を見る"
		}]
	},
	{
		"title": "note",
		"links": [{
			"url": "https://note.com/motchiy_tuti",
			"label": "投稿記事を見る"
		}]
	},
	{
		"title": "YouTube",
		"links": [
			{
				"url": "https://www.youtube.com/@motchiy_tuti",
				"label": "MMD"
			},
			{
				"url": "https://www.youtube.com/@motchiy_game",
				"label": "ゲーム配信"
			},
			{
				"url": "https://www.youtube.com/@motchiy_commentary",
				"label": "解説"
			}
		]
	},
	{
		"title": "Wiki",
		"links": [{
			"url": "https://w.atwiki.jp/mootchiiy/pages/73.html",
			"label": "詳細な情報を見る"
		}, {
			"url": "https://w.atwiki.jp/mootchiiy/pages/94.html",
			"label": "サーバー情報"
		}]
	}
];
//#endregion
//#region src/data/items_heiki.json
var items_heiki_default = [
	{
		"title": "YouTube",
		"links": [
			{
				"url": "https://www.youtube.com/@saihou-heiki",
				"label": "メインチャンネル"
			},
			{
				"url": "https://www.youtube.com/@heiki-orica-lab",
				"label": "オリカ工房"
			},
			{
				"url": "https://www.youtube.com/@heiki-theater",
				"label": "ミニシアター"
			}
		]
	},
	{
		"title": "X (Twitter)",
		"links": [
			{
				"url": "https://x.com/leoved_kuru",
				"label": "Kuru⁵"
			},
			{
				"url": "https://twitter.com/mootchiiy",
				"label": "モーチーという偽名の男"
			},
			{
				"url": "https://x.com/jingyunlrn46012",
				"label": "干支3"
			}
		]
	},
	{
		"title": "小説家になろう",
		"links": [{
			"url": "https://mypage.syosetu.com/2526862/",
			"label": "くろこげめろん"
		}]
	},
	{
		"title": "カクヨム",
		"links": [{
			"url": "https://kakuyomu.jp/users/melting_star",
			"label": "ルークアイド・チェス"
		}]
	},
	{
		"title": "Minecraft",
		"links": [{
			"url": "https://namemc.com/profile/Rkun.2",
			"label": "Rkun"
		}]
	},
	{
		"title": "Planet Minecraft",
		"links": [{
			"url": "https://planetminecraft.com/member/heiki/",
			"label": "Heiki"
		}]
	},
	{
		"title": "Pixiv",
		"links": [{
			"url": "https://www.pixiv.net/users/64641168",
			"label": "さいほうへいきEX"
		}]
	},
	{
		"title": "Wiki",
		"links": [{
			"url": "https://w.atwiki.jp/mootchiiy/pages/48.html",
			"label": "詳細な情報を見る"
		}]
	}
];
//#endregion
//#region src/pages/profile.astro
var profile_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Profile,
	file: () => $$file,
	url: () => $$url
});
var $$Profile = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": "プロフィール" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section highlight"><h2>概要</h2><p>このページでは，いろんなページへのリンクが集められています。<br>自分のチャンネルとか，友達のウィキとか，そんな感じです。</p></section><section class="section" id="motchiy"><h2>Motchiy</h2><h3>プロフィールメッセージ</h3><p>こんなのを読む暇があるなら<br>他の事した方が良いよ<br>特別な事は書いてないからね</p>${items_motchiy_default.map((category) => renderTemplate`<div class="item-category"><h3>${category.title}</h3><ul>${category.links.map((link) => renderTemplate`<li><a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="text-link">${link.label}</a></li>`)}</ul></div>`)}</section><section class="section" id="heiki"><h2>さいほうへいき</h2><h3>プロフィールメッセージ</h3><p>私は、真なる神。そう、汝らは我に平伏するべきである。この世の原初のあるべき姿に導こう。</p>${items_heiki_default.map((category) => renderTemplate`<div class="item-category"><h3>${category.title}</h3><ul>${category.links.map((link) => renderTemplate`<li><a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="text-link">${link.label}</a></li>`)}</ul></div>`)}</section>` })}`;
}, "C:/Users/motchiy/www-html-frontend/src/pages/profile.astro", void 0);
var $$file = "C:/Users/motchiy/www-html-frontend/src/pages/profile.astro";
var $$url = "/profile";
//#endregion
//#region \0virtual:astro:page:src/pages/profile@_@astro
var page = () => profile_exports;
//#endregion
export { page };
