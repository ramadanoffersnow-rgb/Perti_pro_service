const CACHE_NAME = 'bertypro-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/data/app-config.js',
  '/js/main.js',
  '/js/map.js',
  '/icons/icon-192.png' // تأكد من وجود الأيقونات
];

// تنصيب الكاش
self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('caching assets...');
      return cache.addAll(ASSETS);
    })
  );
});

// استراتيجية Cache First
self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});
