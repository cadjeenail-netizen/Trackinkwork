/* TrackInkWork Service Worker v2.9 */
const CACHE = 'trackinkwork-v2.9';
const ASSETS = [
  '/Trackinkwork/',
  '/Trackinkwork/index.html',
  '/Trackinkwork/style.css',
  '/Trackinkwork/script.js',
  '/Trackinkwork/manifest.json',
  '/Trackinkwork/icon.svg',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).catch(() => caches.match('/Trackinkwork/index.html')))
  );
});
