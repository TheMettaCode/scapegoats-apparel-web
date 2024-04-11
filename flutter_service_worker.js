'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "22de72731f12005b59a722dd0290e3f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bf1ef32b99ad10a7790756851f989e1b",
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
".git/index": "52087fa845e6f1c200ed4b0b97fa02e4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b196d3ce4620899d1b328592a7841943",
".git/logs/refs/heads/main": "b196d3ce4620899d1b328592a7841943",
".git/logs/refs/remotes/origin/main": "49f0548a5c09304b878cccbd613d6d06",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/32/86f64447c1f1986f67fee2145de3189108a36b": "eb5e1b8f9ecc8dc00fa042a5383c04f2",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/57/ac73e77d9ee073f78f987d1d43f842fa8d28e9": "fd2594c0ab9b1ec70cf800fa386798e6",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cd/6950a471bc230ec7bf8721ebdb97cab08d88cb": "c9f44d052ce8e0c1ac1a44be5bb9f6c9",
".git/objects/d7/be4e64cade89a47366926f735457e5e49bf199": "9616a5e6735fc33e4a69c1c051a589a6",
".git/objects/e3/0018ae364a36383017259ab5bb81b256cdf4d4": "26598088bf870f50718111190e8a48bf",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/f7/c6af0cb2361931810f5bdf9efba0ff033af8e8": "9da201d02e45dce44975d4ff9a8ad88a",
".git/refs/heads/main": "aaa7bb4fb79db3badc8e8dae59f2419f",
".git/refs/remotes/origin/main": "aaa7bb4fb79db3badc8e8dae59f2419f",
"assets/AssetManifest.bin": "b3c9993ec532cc20afc9b0db05a414cd",
"assets/AssetManifest.bin.json": "333253a474bd6714a8cd44631b58158c",
"assets/AssetManifest.json": "7afbc9c8360a3b60e391809dfd77e90f",
"assets/assets/app_icon.png": "015d375c070772b9cb8888806b7f47f3",
"assets/assets/dev/logo_orange_512.png": "106f399b391ff8578eceb65eeb25ecfa",
"assets/assets/dev/mettacode_application_brand.png": "678f5b20ff1e34d9bc2e7127dd2463f3",
"assets/assets/dev/mettacode_application_brand_slim.png": "d853b4379aa309ca2eeb4bc740a6f684",
"assets/assets/fonts/Wanted.ttf": "88953b2a68cb82684000502668d3ab3a",
"assets/assets/fonts/Wantedo.ttf": "9f872a2ac377884f27f9161cd0fd4358",
"assets/assets/head_logo.png": "5785489c343103eb9b7e43eba4f77dbd",
"assets/assets/other_logos/android_apk_badge.png": "4e2c8eeda2efaa694b3283175ac9adfc",
"assets/assets/other_logos/bitcoin.png": "8227f2b9f0fcef8b588cecd9b1bcae7a",
"assets/assets/other_logos/cashapp.png": "42dec4b15db727eedbb9a12c3f5169e2",
"assets/assets/other_logos/ethereum.png": "e37e8eae3fc42945b7fd904d18ac54f2",
"assets/assets/other_logos/google_play_badge.png": "1a9453063dc4ab95fc0cd62b9c1a095e",
"assets/assets/other_logos/ios_app_store_badge.png": "362c61de9a60dcf6b1f2e9732c5d7205",
"assets/assets/other_logos/litecoin.png": "1752b6f6b63f71a75bd472dabad939d6",
"assets/assets/other_logos/venmo.png": "bdfa9632d227044c5cbbfcdf8f640f03",
"assets/assets/other_logos/windows_store_badge.png": "486a0de58c132ee4a9e4b43dc7368857",
"assets/assets/photos/model_girl_color.png": "65034ab06738ea59c3e1f1997f3baa50",
"assets/assets/photos/sg_hoodie.png": "6d0c0ae02f6bcd7d24087c742da2dd93",
"assets/assets/photos/sg_short_e.jpg": "b29cc4339586cbbeee8f9385a4895754",
"assets/assets/photos/world_map.png": "849715edc6a57842819b6e6a07077005",
"assets/assets/sg_blame_3d.png": "ca377ae4cf94c3114e951f5aee8d947a",
"assets/assets/sg_usa_tag.png": "52696d06065c4663a5eb53b943ca4da7",
"assets/assets/sg_usa_tag_square.png": "97322cec0a151dcaca159968c678fd85",
"assets/assets/social_media/facebook.png": "3e541fe022037cb156e74270120236d2",
"assets/assets/social_media/instagram.png": "12965f33f5982686f6eb63d51073722b",
"assets/assets/social_media/pinterest.png": "3e71796f0b2cb4742d7dd9ebe6906aba",
"assets/assets/social_media/rumble.png": "ac190ef9e408a63f854a7003ee8775b2",
"assets/assets/social_media/tiktok.png": "a3352efadc94a5ab0d11173dcaa7d7a5",
"assets/assets/social_media/x.png": "69d4bd7aea0945ba7ff5e77d1752a5d1",
"assets/assets/social_media/youtube.png": "2b5270fc7e50270749881e91da72e984",
"assets/assets/temp/coded_message.txt": "3b5ffa8693fe9a17070e9a94d328d138",
"assets/assets/temp/test_message.txt": "7741975441ec22f7080243bf7eba8cef",
"assets/assets/tos/tos_app.txt": "4bd68be7f72008e16b3e69b30e1a2d9d",
"assets/assets/tos/tos_payments.txt": "956c5ddbaaad73154fccda6f540ac44a",
"assets/assets/tos/tos_web.txt": "3b84b54d0e81ccc3b565d4313d19ee6b",
"assets/FontManifest.json": "08e6c927a377fef4ab8bb76db856982b",
"assets/fonts/MaterialIcons-Regular.otf": "20b90a7950f71ddfdb868da1bdd427e2",
"assets/lib/env/env.g.dart": "d75d402efa81f329849973c3797ac780",
"assets/NOTICES": "e4e38265191a5e1d33c3045273083bcd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "510724c5e944c8c04932f569147fca99",
"favicon.png": "3ab46306a88bcbb71360f4493f8f14f8",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-chrome-192x192.png": "fcdc6fb2b47420c0a5528a93b05d0e87",
"icons/android-chrome-24x24.png": "fb2597173d3d211c55448e048e3ec4de",
"icons/android-chrome-256x256.png": "be8917b8d405a062244d6131b95e08a3",
"icons/android-chrome-512x512.png": "3ab46306a88bcbb71360f4493f8f14f8",
"icons/android-icon-144x144.png": "8f1b732c605d15a9738a67c7c200e94c",
"icons/android-icon-192x192.png": "4bf731c855fb8b4a64d461651a4a60a5",
"icons/android-icon-36x36.png": "bf1e8a0d58a95ceda3eb76791a8efb0b",
"icons/android-icon-48x48.png": "19cebe358a01ef31faf589a74e1a17f6",
"icons/android-icon-72x72.png": "6d75185340a994187fe4ea7b1e9eed8e",
"icons/android-icon-96x96.png": "8f7c0fdb7b529bf5e81d19bbf1152596",
"icons/apple-icon-114x114.png": "a8cb8ddc91fd4a6f8b98a8e3f36c6efe",
"icons/apple-icon-120x120.png": "d1ec37e33b7a46bcd4164f02eb92a566",
"icons/apple-icon-144x144.png": "8f1b732c605d15a9738a67c7c200e94c",
"icons/apple-icon-152x152.png": "9a987a0606bcd8d4fbcf8ac0aa2712d6",
"icons/apple-icon-180x180.png": "a6d9455663bcff829d19ef96a903cdb9",
"icons/apple-icon-57x57.png": "c3a742e9b2d4303892d703bff6508f1e",
"icons/apple-icon-60x60.png": "997b381e230ed6ebe57e1b97c5c5db45",
"icons/apple-icon-72x72.png": "6d75185340a994187fe4ea7b1e9eed8e",
"icons/apple-icon-76x76.png": "058f54aeac8f12f68aa14dae5e05ee6a",
"icons/apple-icon-precomposed.png": "6311ef24ca8f7276e20ba54bfb64f231",
"icons/apple-icon.png": "6311ef24ca8f7276e20ba54bfb64f231",
"icons/apple-touch-icon.png": "3a4f6dfc2eca3700fe5fd7c694f08518",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "024ddd60abeecf1ad179c5bec974055d",
"icons/favicon-32x32.png": "8e4e57d3dcd82523d30e9e3fb2cd4316",
"icons/favicon-96x96.png": "8f7c0fdb7b529bf5e81d19bbf1152596",
"icons/favicon.ico": "76d436f4405f104b6a1575e7888ff62c",
"icons/icon-192-maskable.png": "a0d426b5232b54f2d36b9dce9b22fc34",
"icons/Icon-192.png": "462909b02bc8e1cb16f37d22d7fd8453",
"icons/icon-512-maskable.png": "e0f11a4d41c6d4577af9859f41907550",
"icons/Icon-512.png": "625c7780378b3043264627fefd88abc7",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "8f1b732c605d15a9738a67c7c200e94c",
"icons/ms-icon-150x150.png": "4e8c022135e1f8c499f066376bd8c0eb",
"icons/ms-icon-310x310.png": "ea2e8d9b3bfc3c22a759c2fa981c267b",
"icons/ms-icon-70x70.png": "1e9c22a9f5042adfcf2a2c1e60050fe9",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"index.html": "f4ca2f947a8e8365bdd74c063ebdb419",
"/": "f4ca2f947a8e8365bdd74c063ebdb419",
"main.dart.js": "4a9b9976153772f779c0df31f868595d",
"manifest.json": "990ac3cce3d5ce855ed488761ba57ac8",
"payment/cancel/index.html": "a5bdebe29167c20b3b4b0c8071c4ef9a",
"payment/index.html": "d7d2ef228729ddeda3710fa6c06ed6e4",
"payment/success/index.html": "d866de262ccb8d90ba2e88df0c29915e",
"pinterest-33206.html": "352446ef8ab159035c6c5970e38aebea",
"push/onesignal/OneSignalSDKWorker.js": "fc0f10b45cd3c24406e7d30d4d13a383",
"splash/img/branding-1x.png": "095d39e195d7729023418b35fb4a1dcb",
"splash/img/branding-2x.png": "08ab939f2101d3af03687cbb87770150",
"splash/img/branding-3x.png": "e339e760524c2a7efe3251c1f3a6db52",
"splash/img/branding-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/branding-dark-1x.png": "095d39e195d7729023418b35fb4a1dcb",
"splash/img/branding-dark-2x.png": "08ab939f2101d3af03687cbb87770150",
"splash/img/branding-dark-3x.png": "e339e760524c2a7efe3251c1f3a6db52",
"splash/img/branding-dark-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/dark-1x.png": "6b269714cc9e01d5f23209003b8b518d",
"splash/img/dark-2x.png": "767cecac7268421cf156ad2ec2ee73dc",
"splash/img/dark-3x.png": "55c65d6dfe6428cfde65eeaa215b66fa",
"splash/img/dark-4x.png": "91ff030c8be9914763dfac276e9e6501",
"splash/img/light-1x.png": "6b269714cc9e01d5f23209003b8b518d",
"splash/img/light-2x.png": "767cecac7268421cf156ad2ec2ee73dc",
"splash/img/light-3x.png": "55c65d6dfe6428cfde65eeaa215b66fa",
"splash/img/light-4x.png": "91ff030c8be9914763dfac276e9e6501",
"version.json": "a28331f57bea74fed74ccf4af67db892"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
