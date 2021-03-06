self.addEventListener('install', e => {
	console.log('PWA Service Worker installing.');
    let timeStamp = Date.now();
    e.waitUntil(
    caches.open('evemilano_service_worker').then(cache => {
      return cache.addAll([
        'src/app/assets/images/avatar.png'
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  console.log('PWA Service Worker activating.');  
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
	
  );
});