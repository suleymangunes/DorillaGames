'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a103862b5cf84bc73cd73d5a04b8ff19",
".git/config": "a0d7a22b619a9f08d4b77762562522ba",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c0502d9d96997f55341d04e5bdae0369",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "81ea0fd7b2eb765dcd50fb781f239cf6",
".git/logs/refs/heads/main": "ce64b6555b0418f84bd743d9fbbd2416",
".git/logs/refs/remotes/origin/main": "993d395ef7833f149dab3a761b2907c9",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/08/57a39ebc208ecb6f102b6da68e1f1073c4a2d0": "43a9814c442f604097e6e0a78222880f",
".git/objects/09/a8eed2c9abffbc38f2bc82f556bb0164fd1458": "9d8ca6258350e0b1bb352d590de4cf9a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/16/04c1dc078d3b59c7e4a6243243ec2d40b880b5": "f25ff266eb5ccdee8d7255e2a37d08bf",
".git/objects/17/61bed16ed80616d92a353755e176d4599cca76": "b1a3d8ecf549b5e02dffbf28e3ee1f78",
".git/objects/2a/9a28a4179996a0193d96a8a2947c5bdd06f5b7": "d18503328a9f501b34439d21c71f993b",
".git/objects/31/8e123bf5a243015829c4ec3435371f8aada38e": "e081a000043e8c733054150170a68557",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/8c64bb1fb22aeca1e21493c00b6720e46b3c5a": "236fec9e95f07b036f36c34abfa6b611",
".git/objects/39/3d7fb64109ce783a093256c9d48a86bd03ab52": "d2c9bfa7ecf63acdb271e2c1233034df",
".git/objects/3d/2cc8ebe3859859decae235f3bbc0843b15f7bd": "d0e3442c14ade96f4600a70fe5c5ef18",
".git/objects/3e/0a152495bd12004119302c8103fb01c36c188f": "d1d030f53f04a475664ff7915f0449d4",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/50/ff6d1f900120951a53fd56082c27c8b942c305": "9caadd83a762e3a6615e54a3c83dbc19",
".git/objects/55/3b37385173528e2fe58b9c5f32ce3806aaf07b": "d3ac2f25e5565f635a28246ee6bc784a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6e/2048f4e4de01c3d54a5c8806270ef5d211aa0a": "438cad35d0a314f0e3e71cb6741192e5",
".git/objects/6f/00b7e9e776a7301815e1321d8a42f571dff518": "09989451359509956f8ee024af603dd5",
".git/objects/71/1f4160cf256512498af6e6656a4bae62fe7643": "f7b01d3b9a158c1941785d3ab50276e5",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0f617147d6ca06ad79c18a17260118fbbb53c4": "c3b5111ba2ad61299ca7bd1038af6518",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/a04439433f724376754b75658b7d477f366614": "24011fdf4f359c9915836c2078d9f327",
".git/objects/95/61509902365d075f0400ce3d8ca4c355500e20": "7f6114c9950c4c174e91f53133804332",
".git/objects/98/f5875137247235000a499e6111d8bcb7719c3d": "f987ca0ecf7ca24725356c8960c88375",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/1d0708a8b259d272e4f62f8cc1d25df96e7061": "2a090c3aae58d532947e02da5b0064c5",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/172c1d0c27776331e4637330a62522321d2826": "0d1dd2cef0db3446e3a15171c48edf14",
".git/objects/b2/e1b1d23e36d9c9b2bd86562f4115098dce40b5": "d5ac34b2f26661857e20d64647eab236",
".git/objects/b3/89a8e83f1f5c4d7f490d307d7b7b1eb76b5054": "f584f781d0e8ff54b01efc571928b6f1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/30996bd22dabdac8e396643a48b94514b44670": "b4b08249f174293de7f2c29a97c21840",
".git/objects/bc/8ad958f0db430dda09930862dcc4f4cb7a0b81": "b53050791c334a65c2e6eb7a5455229f",
".git/objects/c2/248dcd789c37601488ccbeb079068ce992215e": "bdc8e552dae945ac3b83f932fdda955a",
".git/objects/c6/6b3e319a4d5562ac5e97020bf52fa3e64f47fd": "be37d20022351dce8bb958a64d4dc5eb",
".git/objects/c7/7b7464b049c7d6666155c61df5f486f241f760": "4ab8ee67a3eb5dc207a2be6cb6cffe4e",
".git/objects/cb/7b8156166b53471253a61fd055e49ad23b7506": "88f1748f8c449c14c4ec0973e8efb440",
".git/objects/ce/63c2c1b841b6a20fe3c1a8c85ac8c096dca90a": "ab4a4ede84d16ce601cc9cc203040cb4",
".git/objects/d0/efbae9fa3028167f86f4071914f137b6a1bbef": "1a63c2da907f6fe761937d78efddc38d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/e48eedeee812f618234e5ec539afd02727cadb": "a8f5dc8ef14d7838140fa1ecd4e9838b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b039a5adc314ab98cce0979022e8a7559f4131": "7e2c44d37374a8712fca5933b239894c",
".git/objects/f7/5afd159b3dd4fe6a6a875eee2f9aa2004ff17a": "aa9d0fdcfe44f14aec9836e4abe72a10",
".git/objects/f8/f367e754bf2293f24adace96f78dcbac2dde91": "4a1740bc7800fb02bfca41f3b0527a84",
".git/objects/fe/66e77ccf9a1c3dc181fa61f2a5f2193d9267db": "6d98bdbe00990bdf37ed4865058e2021",
".git/refs/heads/main": "4494934e42d5e950e533a463d846afc7",
".git/refs/remotes/origin/main": "4494934e42d5e950e533a463d846afc7",
"assets/AssetManifest.json": "1120a349082d85cbe2c346671a0c35cb",
"assets/assets/animation/background.flr": "9339e0adee54da143bd411ac63bba3c7",
"assets/assets/fonts/Bodoni.ttf": "565409058d92faca4c4bd599327629cb",
"assets/assets/fonts/FELIXTI.TTF": "0016f77f50d636d6eb6336a8a9d5d3d5",
"assets/assets/images/phone.png": "2c923da576d34ba7e05086409fac2710",
"assets/assets/images/screen.png": "5bcafd505a30511d157883a2ad009f34",
"assets/assets/images/store.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/jpg/about.png": "5eca23dda05b91176c4aceaf7d1104f1",
"assets/assets/jpg/games.png": "e1652f16fdd1645203adf19df5f28d30",
"assets/assets/jpg/home.png": "89dfd241179b10f1f37cdf1cea2233ac",
"assets/assets/logo/logo.png": "625c106422607e021bd547aafe32e506",
"assets/assets/svg/app.svg": "d41ad340f544a5ee437d00de7814c489",
"assets/assets/svg/game.svg": "1fb3124713a6d636802744771ef9b0be",
"assets/assets/svg/github.svg": "ba679906e271d70b0c6c0f2460e8d2e5",
"assets/assets/svg/gmail.svg": "188c093fbb0996f3ecfb86b4ea6d7336",
"assets/assets/svg/linkedin.svg": "d5bd09771457d78960a3f04bc73704a0",
"assets/assets/svg/play.svg": "bc5c2c27d07d5a1923bb83584ae76653",
"assets/assets/svg/web.svg": "7ed366b077f8d2bc6350ac1a6549d0ed",
"assets/assets/svg/youtube.svg": "a7445e52976f52ef71db2f7e8e690ac1",
"assets/FontManifest.json": "5cae52e12e4925d55500455cdf0e26e9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1f9630c3d25d1611551a57926c4478b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "02ef562414542954476267c707fc3b49",
"/": "02ef562414542954476267c707fc3b49",
"main.dart.js": "42ab2ea9ad9fd61760612ca01c676e8d",
"manifest.json": "fafcdedc7b0a91e2733f26f75436aa37",
"version.json": "08d7e84ccf5b6655752a711076e120c0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
