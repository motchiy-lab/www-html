(() => {
  "use strict";

  function getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,

      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );
  }

  function sendHeight() {
    const height = getDocumentHeight();

    window.parent.postMessage(
      {
        type: "maintenance-notice-resize",
        height: height,
      },
      "*",
    );
  }

  function initialize() {
    sendHeight();

    if ("ResizeObserver" in window) {
      const resizeObserver = new ResizeObserver(() => {
        sendHeight();
      });

      resizeObserver.observe(document.body);
    }

    // window.addEventListener("resize", sendHeight);
    window.addEventListener("load", sendHeight);

    if (document.fonts) {
      document.fonts.ready.then(() => {
        sendHeight();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();
