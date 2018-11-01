
self.addEventListener('install', function (event) {
  // Perform install steps
}); var CACHE_NAME = 'restaurant-cache';
var urlsToCache = [
  '/',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/index.html',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/restaurant.html',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/css/styles.css',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/js/dbhelper.js',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/js/main.js',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/js/restaurant_info.js',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/data/restaurants.json',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/img/1.jpg',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/img/2.jpg',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/img/3.jpg',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/img/4.jpg',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/img/5.jpg',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/img/6.jpg',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/img/7.jpg',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/img/8.jpg',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/img/9.jpg',
  './Users/Krishna/udacity projects/mws-restaurant-stage-1/img/10.jpg',
];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
    .catch(err => console.log(err, event.request))
  );
});
