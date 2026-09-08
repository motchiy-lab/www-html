// textarea の自動リサイズ
document.addEventListener("input", function(e) {
    if (e.target.tagName.toLowerCase() !== "textarea") return;

    const ta = e.target;
    ta.style.height = "auto";
    ta.style.height = ta.scrollHeight + "px";
});

// シェアボタン
document.addEventListener("DOMContentLoaded", () => {
  const url = encodeURIComponent(window.location.href);

  const twitter = document.querySelector(".share-btn.twitter");
  const facebook = document.querySelector(".share-btn.facebook");
  const line = document.querySelector(".share-btn.line");

  if (twitter) {
    twitter.href = `https://twitter.com/intent/tweet?url=${url}`;
  }

  if (facebook) {
    facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  }

  if (line) {
    line.href = `https://social-plugins.line.me/lineit/share?url=${url}`;
  }
});