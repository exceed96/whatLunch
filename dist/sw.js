if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let o = {};
    const d = (e) => i(e, t),
      l = { module: { uri: t }, exports: o, require: d };
    s[t] = Promise.all(n.map((e) => l[e] || d(e))).then((e) => (r(...e), o));
  };
}
define(["./workbox-5ffe50d4"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/index-C4Y2SNw0.css", revision: null },
        { url: "assets/index-DnK5HScG.js", revision: null },
        { url: "index.html", revision: "6d1c16e3823a0b1780855ad40d4a2a77" },
        { url: "registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
        {
          url: "manifest.webmanifest",
          revision: "62a168c3f70ed58a6fa199dea788a094",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
