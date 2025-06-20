if (!self.define) {
  let e,
    i = {};
  const n = (n, r) => (
    (n = new URL(n + ".js", r).href),
    i[n] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = i), document.head.appendChild(e);
        } else (e = n), importScripts(n), i();
      }).then(() => {
        let e = i[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (r, s) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[c]) return;
    let o = {};
    const d = (e) => n(e, c),
      f = { module: { uri: c }, exports: o, require: d };
    i[c] = Promise.all(r.map((e) => f[e] || d(e))).then((e) => (s(...e), o));
  };
}
define(["./workbox-5ffe50d4"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/index-8WPKU-nZ.css", revision: null },
        { url: "assets/index-Bak9wfyT.js", revision: null },
        { url: "index.html", revision: "f947b0e4c2b9665e13df5cf4c3e201dd" },
        { url: "registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
        {
          url: "apple-touch-icon-180x180.png",
          revision: "661fe162e4cf85bb5c92292245d8c7f7",
        },
        { url: "favicon.ico", revision: "c763ba36e72b9f7f4886b5249e56a44d" },
        {
          url: "maskable-icon-512x512.png",
          revision: "c8fe96660d599eb27690edd9ae77f2a1",
        },
        {
          url: "pwa-192x192.png",
          revision: "4c5a203a7d2248cbb7710d02abb6732a",
        },
        {
          url: "pwa-512x512.png",
          revision: "c5e46abeb78197ea2dcf7275bec23ed3",
        },
        { url: "pwa-64x64.png", revision: "fa9de15fa21f1cf22ade066dfcfe5f60" },
        {
          url: "manifest.webmanifest",
          revision: "75c65bb9e9e6d3a0d8e24c799b553655",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
