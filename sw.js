/* Astrum FM Brasil v3.0 — Service Worker
   - Navegação: rede primeiro (pega atualizações), cache como fallback offline
   - Arquivos do app e fontes: stale-while-revalidate */
const VERSION = "v3.0";
const CACHE = "astrum-fm-" + VERSION;
const CORE = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png",
  "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(CORE.map((u) => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("astrum-fm-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const cacheable = (res) => res && (res.ok || res.type === "opaque");

function networkFirst(req) {
  return fetch(req)
    .then((res) => {
      if (cacheable(res)) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    })
    .catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match("./index.html")));
}

function staleWhileRevalidate(e) {
  const req = e.request;
  e.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(req).then((hit) => {
        const net = fetch(req)
          .then((res) => { if (cacheable(res)) cache.put(req, res.clone()); return res; })
          .catch(() => hit);
        e.waitUntil(net.catch(() => {}));
        return hit || net;
      })
    )
  );
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (req.mode === "navigate") { e.respondWith(networkFirst(req)); return; }
  if (url.origin === self.location.origin ||
      url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    staleWhileRevalidate(e);
  }
});
