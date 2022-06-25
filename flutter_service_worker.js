'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "304503bf515b120314b1790c9d65e043",
".git/config": "ce756931cf7b7e2fb4722e8404cbbb83",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f3ab4ca984ddf605ed55e825152c32fa",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ff1115a14aff57c101fb29c549160be5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6961076c03d28232d7bdd950160c523c",
".git/logs/refs/heads/master": "6961076c03d28232d7bdd950160c523c",
".git/logs/refs/remotes/origin/master": "986bff8658450f0e6abf53eda18b7c11",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/8371fdbd7cc98e0904e9130c7630203defc864": "2d8b800e6c5518834a298a675f2dba45",
".git/objects/06/a9937b28afcbb91affec914b6f3f59a24caf34": "4e3d8c81fdf14e047eb2f606c1185dd2",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/13/ea564bcd36f062f9335562fb29c83617575ec8": "029b7dad9858734999053f35235fd4c5",
".git/objects/14/09cfe59f917a559697be4d82b3ed970a735514": "55a160d0d11fc828d53a7d7c25220aa3",
".git/objects/16/2b2705923adb8fdddd9dc7b5ba169e040d3e95": "fb57aacf1fbed59a787800cc48d7e5ce",
".git/objects/18/5e64e5670d5e4b5deb396deac6170ddf8cab7e": "ebc90345f97938ef43f3ec5c5f74e0d4",
".git/objects/20/22afa760fbd872e42c9b31f73e27e99af8a194": "2b4b4cd9ffa41ad59b0e9e1c626346f6",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/d987fe795627cee2ce248ed09526eb1fa44f6b": "3962878bcbe92fa8b6c6b8bce1e93cc8",
".git/objects/2b/9e530e31776a5e583e7c13013d0101a23489c0": "bef75d2d3ee7e5d7176234dedada6537",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/65203afbcec8ac6662ca817c9a2e23957ff436": "d92318af58285f93914773673073c2f5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/33b3d09869a983af6ae5d3e0f7b813b350143b": "ed3e2fb79f6cbf4cff19e6def81fe1b3",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3b/3bc71118ecd8694747016c6c61054ed08c7f49": "93c177a55f2e5142fe645692fc007b94",
".git/objects/3f/386beb168b8c2d9be9ff166f486981f98d5074": "a3388079d4edfba937bbc9bf1966b2b1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/228f0e9eccba5643c28967cc1bd093b8cce498": "6df879c9261b884a34a1a1b8d1fabd5a",
".git/objects/4d/a215e9d6ef287034852c8389b6a574f880b205": "4a86823ca5483a4adc0367726ff713a2",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/56/07dd6d5428ea869ea67b318253f3a38ac05e9d": "6eb2af0b5cfc9612072270d2fa5efb8b",
".git/objects/59/7ef24f8e11120d1f4c987b4be947fa0e6a5c9d": "806f19b864d180180ba5f2528a4b6ab5",
".git/objects/5f/6482dca1afe45a4f8bb9a99323d1444ff464cf": "4543f77866c80df4ecee435298dc0a0c",
".git/objects/60/e5cb4786f50dcc61c6963e26eb2d4198701b6a": "b28267ff47ccb0159271b54d4160929a",
".git/objects/65/d74850a43f86f2f0f164158d424e5954f04bd4": "b86ed8bdd6d06d030f091ba9ee87fb11",
".git/objects/6f/2197f5df131ccffa4915fc3c9211213bd745e1": "06f3d805617ee8e0fe5bf8b1486b4e79",
".git/objects/74/23fd640e1a7383b172c7869dc3b21b9a7152e5": "71aac704dd58ee771dce865840659c3e",
".git/objects/75/09d278d07f062a9d712a916da438232628ad20": "ee9267e334233f31f955c1bba42c09f0",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/f8095c08a21fedc932bebb8f638158af878df8": "1135bf2a86c42f52a458693956aa1981",
".git/objects/83/f98c195ff78f92a549269d329a067030d1b71f": "d15c48c3603c5eda2635bdb948328475",
".git/objects/87/921aa89498006652431d5691ae839ff2f9e843": "d7a55c57bbc75c74e4a7b3fc85de197e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/36db6fc4c56dffbe5827f21fa6cd3f4d657855": "de0f8560e96f29c3db9a63f12f439a19",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/21253b24970eaa82204febd8cbb6d14471a102": "36846613505ebfc1d156dab95c06fcbb",
".git/objects/95/f75d6191351f19c554aff8f2158302396fbb19": "cada086f25d7b2c4e2b46f975b2a5d88",
".git/objects/96/176120554bdb50a2bae30f4179230aeefe620e": "ae997a078ba78575d15aad8a9369618f",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/5ea505a2a2382b5a54db9a71c7410d036cffc9": "b5235ba5fb1869f25055daed7ff4eab2",
".git/objects/a5/48ecc87ce4f4a52dd30e0cc8c997774825464d": "360cb1cec8891c8ec6656401a336634d",
".git/objects/a6/08335df81fd9ac89cc605875b591f905d92ffd": "92f98a26a6b1bd7a0dce6d825bbd1ab1",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/06f2fca4cf5d2fad115c4371c9bf83b34a48df": "083833a79fb8d799fe38218bd93206bf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/7d4125a7cc69e60fe7bb5b1fba772fcb5b37b5": "fcd7a3175b5ebf68f00cc22bfc6046f5",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b0/fc8da6716008636f9d7e413db36ea9e27d8a89": "a3c1ffb15f1657df4d10425b925bf3e5",
".git/objects/b2/68e333b5fb13ceb02cbfe98360a5f09944a95f": "c15a3a980f1f7d61f9ef84d28301c350",
".git/objects/b5/3e2d5695a42a1b3d4472106d4e6dd18e3757ef": "2e5adec877145c29553fe3248350c00b",
".git/objects/b5/9a82d61d45bce1fba3e51feeb83d2b4251c926": "a03b07d69c631bca836b6377f7605d92",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/39ff4a03068d8a2f5fb9a93b65e9659f27d709": "8ddb0386da621a99955c61b9cc51f8e8",
".git/objects/c7/43d25f5e1104971dd24a27ebc31074ebbc32c1": "3798289fe5058042c22c2ef57c8b772c",
".git/objects/c9/48fcd4481d22f39f5b43c4197e73c60b0dd4c5": "5e143013ade896a7569d8b2dd891df12",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/f0f32170565fa496249e5890f490b91ffe7537": "d1cb0b0a3687eda5cb35971ae0a582f8",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/239be070edb6d47eb77f270e2366b32bed61c5": "4dd7fc92b263f7d38b05908ada1fc651",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/6a13d8c3f0fbda649f02731fea19d691d71cef": "6161c96816adda20e190baf3c430c522",
".git/objects/f3/e4a32beb62e268c731e1497b41ac5deefeacfa": "a7f10c75844dd5326af0a559a94e88d5",
".git/objects/fa/af1faced2b1ddb9216bee9c47ca8c92e5f87eb": "c9959c6f58e3f3f5dfd7fd37afc9ffd1",
".git/objects/fd/dfbf5d0dea578f3f0270082c98de36f9e97aa8": "76ff248116c2343d1d94d5752331f09e",
".git/ORIG_HEAD": "a11aa1afb442c62db6664ec41e22c6ff",
".git/refs/heads/master": "1c13720fff1aec3893b883e80286b328",
".git/refs/remotes/origin/master": "1c13720fff1aec3893b883e80286b328",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "0db571c369d60856a6f9a8795120ebdb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "42214e99ba34187b10a6b2308ebd5d44",
"/": "42214e99ba34187b10a6b2308ebd5d44",
"main.dart.js": "bc31e94c2e44f571fd620bf5e449bc53",
"manifest.json": "b605734295a9a962f7576bed2f57f2cd",
"version.json": "58717352dd7fbdf2ba426f20aa875697"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
