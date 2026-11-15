// Service Worker for Food Insecurity
const APP_ID = "foodinsecurity";
const VERSION = "f00000-001";
const CACHE = APP_ID + "-" + VERSION;
const FILES = [
  "./",
  "./index.html",
  "./whofaceshunger.html",
  "./causesoffoodinsecurity.html",
  "./personalstories.html",
  "./howyoucanhelp.html",
  "./portrait-maya.svg",
  "./portrait-marcus.svg",
  "./portrait-evelyn.svg",
  "./action-plan-clipboard.png",
  "./action-plan-clipboard.svg",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      c.addAll(FILES.map(f => new Request(f, { cache: "reload" })))
    )
  );
  if (!self.registration.active) self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k.startsWith(APP_ID + "-") && k !== CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("message", e => {
  if (e.data === "SKIP_WAITING" || (e.data && e.data.type === "SKIP_WAITING")) {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => {
      if (hit) return hit;
      return fetch(e.request).then(res => {
        if (res.ok && res.type === "basic") {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
