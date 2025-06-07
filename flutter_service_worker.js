'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "d11ebe375061eb60fdf7695020f9bfb2",
"assets/AssetManifest.bin": "685e810db037ce65b5df02a8c7ebf41a",
"assets/AssetManifest.bin.json": "96861b3cce4071d1ee2a7ef81023aa3c",
"assets/AssetManifest.json": "b39763b86a40b72ede234d04a69e6d75",
"assets/assets/animations/loading.json": "19bce4d2ac7a23dce3cf8b70a3cb0429",
"assets/assets/images/About.png": "6b51d0324b9a9dd04b1122aeb8941fb8",
"assets/assets/images/Arcot_Makkan_Peda.png": "b65020c20314b552e994f6cf6202c35b",
"assets/assets/images/Biriyani.jpg": "6e0010fa0fb29ca5cd85b96e34e7d7e1",
"assets/assets/images/Chicken_65.jpg": "2ddc58cc3f1df6ace42e02a051e9b9b1",
"assets/assets/images/dysn.png": "d6e881e6461181fb8f0cb96a0b7375f6",
"assets/assets/images/facebook.png": "979d8984cd93a2f62b062e3fc1a92940",
"assets/assets/images/Instagram.png": "61f114da4a5e6ed3fca5b794d76491f0",
"assets/assets/images/kari_dosai.jpg": "99c255c7b5a12183f3750eeb2d9b6a77",
"assets/assets/images/landing_page.png": "4f24303d43e637c0ad3f5024ca9b4ebd",
"assets/assets/images/Lappa.jpg": "f44f174c545bc67f81852d024cd67dd1",
"assets/assets/images/logo.png": "50148145186380b0b27b8636cbda1d3b",
"assets/assets/images/noodles.jpg": "f596583c1c5d62453de9dd847502bce1",
"assets/assets/images/Parotta.jpg": "032ba0f8b66eb9fc595862d9cff68b12",
"assets/assets/images/Traditional_Badam_Milk.png": "c435222fe1252effba9115b9896bf59e",
"assets/assets/images/treandy_2.png": "455a973aabe2967402ed5238c8c05460",
"assets/assets/images/trendy_1.png": "8e5cfe590d79506fee7839f5287d366e",
"assets/assets/images/Varuthu_Aracha_Aatu_Kari_Thokku.png": "29840a51762dde19371ecfb0bd4aa3f8",
"assets/assets/images/whatsapp.png": "62b046fdbd71b0bed66899587645b50d",
"assets/assets/images/x.png": "b39a156cc0d508ca8d6e6d9ce71e6831",
"assets/assets/images/youtube.png": "3bf30fd40b5b20ee5cfa47af8c12bec0",
"assets/assets/jsons/menu_list.json": "204eb13a3a1b7054599916d405e068ec",
"assets/assets/jsons/menu_list_ta.json": "ff5328027e208eab79da7efe829b152c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "208d956ecf9c46b96e90884730a7f8b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "bca2a9a882057f2b0d82abb2ccfcf3da",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "381253d56aa054df9eacffb6acdefbd8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "51c98bc2b9decffca0250ed4c6919680",
"/": "51c98bc2b9decffca0250ed4c6919680",
"main.dart.js": "8da1b56ea14b52e4318dc2c32135e1af",
"manifest.json": "1e27bb891050d17e620ac2b5065c4bce",
"version.json": "19b3dca61e7c0191037f1f79a6b0c984"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
