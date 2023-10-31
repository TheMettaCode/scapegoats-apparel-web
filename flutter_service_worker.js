'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/objects/00/ed81755670f09d63126886b80f622d2a4b88a7": "2418f2878e138a10361ef29a96e3d052",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/02/20fa481dd156375304f78fee736dc1d9185da8": "1140f46ac63f3f2ca69d4426eb29166e",
".git/objects/08/5b7685e0be1602b80cf439253516bb156c788e": "9aa4fa1e4308f7c5603937f3b3d28508",
".git/objects/12/4b7ccb8d5fa850622667663d8501fd87dd1867": "1f9caaefad7156abfe220a09de0b45f1",
".git/objects/15/496241da1a0c032c8d585dad71996292175388": "3dfa2c480a01ce1b385a16eb0daa4703",
".git/objects/16/c34c476dbf728c12fe4c63575026ed3301bdba": "8a3ab12ba0b11c412a8b6165d3a1cc12",
".git/objects/21/a89097a4fd2ea1cafcb7111c9aeee2cecc9918": "575ead43af36feb4d15ba280fd56558b",
".git/objects/31/467bb2506a4accab59a3b3b7b5c7b77970e6ab": "d4baf4bf4fc03f02fcb05bbf3685ac28",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3b/dd02f56182c7659adceb5a524f6a184b519dd8": "6275598c929f9421e4af016dcab12f8d",
".git/objects/3e/f6df87bbc335cf37b15e36b742f635fc9e4e6a": "b58ef9f2eddda1b86470199fb148f264",
".git/objects/41/3be6c3f2a62c48af95615ca9bad27aecc622fd": "281cbb11a46d3be01d159c919cd6fad4",
".git/objects/44/7b1b235771e2e2e78dddda5c4c6b29d1eea55f": "5ac0adbaa315ba8600ba15133387e1cd",
".git/objects/4a/b2871fe192d95e6873c3e49fa22a00f6d293ba": "f6bc20b602344816fee33dab5305e18a",
".git/objects/4d/bff7bed0c4d5938dd79a8e18d0f679d23df079": "395707dc276f03d203cdf9fd3d2e639b",
".git/objects/4f/c9f5e6832a9f90eea73ffcfa77f49210d2cbe2": "5aa442cfc726c089111ba2e8a6d030aa",
".git/objects/50/cce18fa6ba5624c3507db445693c5f7a38ba80": "362e5a4b9b100135795544b278b87443",
".git/objects/52/7781cdd95d00d70e721ee0ac6e896aa9da4a4f": "364a3368b3f492dc6e57b5e0e542af5e",
".git/objects/52/b63132a6290eb0a1d00f107c714f05b1ac8a38": "e33b38e3fead19ad43694916ee9ddada",
".git/objects/57/02f88e6576ce89e4c35b0c1484525c3b1fdc7c": "b379122725eb59860f485a056f1bf2af",
".git/objects/57/bf920ac6218af1fabc3201748e06539ca4ce68": "81499ef3feb0d2409fac268a5c592591",
".git/objects/57/cbc06fd0253d58417155607cc2f0f5b433d499": "992a1c29c7113418e13b565b3e56e8e3",
".git/objects/5f/3dfb663497173dc56788efcfe8c6c7db757848": "69ea7889feee7bba29b9b972ce361f70",
".git/objects/62/380833b11600567d23e98c158c73ad4f9d5cfa": "50db6f07361266b4209842512036d53f",
".git/objects/62/420070826eedaf66334d1cf369766d319143f8": "fdd7d86a3c85892ee52426115be56837",
".git/objects/63/8e165e6a085753f97b6f8cdcf0095f72ae38f8": "5201af8b9cbe10941e125a9c3b4556ed",
".git/objects/65/08e9faf64fa547db998596c3472e779dd6656f": "f138a67c99ccb5b7e05142941685ec89",
".git/objects/6b/e5e0806ded50d932c28f28451587e3ce43b6f1": "a18646f83db071d855c732579fa8723e",
".git/objects/6d/452b501f3a34530e3eddc87f7e6e4fcd3ff292": "2b363d54f159e6d197def90b156f59e6",
".git/objects/6f/66ff3cf4798d8ba90176c35899409e790fa04d": "efd554f6c78718b6f51a8fd4fee2b165",
".git/objects/71/42f0bfe0a4ce1ef37add86e7d80ec57dec783d": "44de57d266d83feabd169c313bfaaa2a",
".git/objects/75/e028c8229ffbae555ecec8f513cf4c9b7d7f4d": "a89d8aac3712bdcb6912ecf2e5c8e8cb",
".git/objects/77/aeabe0fa14fa2190e09502c44a1a740e8674c3": "3bf7d41d55d314036f6b88bde94b3b0a",
".git/objects/79/f38c6801d8e23f2ca22e0f2ab702741acf4a81": "e68cd9dbbc6e381db5861f8e26693088",
".git/objects/83/102d750607f3067dc695907af8c6e7ac46c5de": "57705125174fff8f847641a42b5599cb",
".git/objects/84/c29c62fc36e0be35a72febfbd0f80a8dcc9a81": "2eda3a0ec77d18c221784497eb6726ff",
".git/objects/87/a91afad977eca111d2fd86c1817e9af0b494d3": "5ccdca2dbfdf5abb490bed4a11a7d362",
".git/objects/8b/79a8b308f98dc347129359597004df6df97f6b": "0f281425f67ffc52c1159676e338dc98",
".git/objects/90/2ebf2dd837c78a19954e4c99d7b9b78f095246": "a856a8d8b4071ee4a9e9da9256953b20",
".git/objects/91/0a15897452c9b27fcce73955fa67ce05ee9410": "1b6798124acf0dc67a5c67857c85fb9f",
".git/objects/92/aae36a5d208d3db890f30e17747618187377fa": "2c0a4079c23e6fd6159f2ebd7db277a3",
".git/objects/93/51e835fcb94360da1d547491fc97f5e2f76a8f": "737aa6b43eb0ee37748a30610faac268",
".git/objects/98/2bbd76f9ad5224f1dc087e80bdcd3fd8096784": "ee0ef68366f5ed3e3131c957d077240b",
".git/objects/9d/f5d7d6280223ff1d08c8f5c6ed4e254ac8614b": "6a60b438992cc9e308baa3ba47c26013",
".git/objects/a3/9c645083b8691edb9a6cf3824c840b70f63326": "a4b5065314b927b63d1927a31def2122",
".git/objects/a7/e404c73b85b89138e41fb73317bfa35be5dab7": "deee4fd8726f48b5cd4cc8a55c999e11",
".git/objects/a9/638bbcec62f469705143306df1497618cbbca4": "80a685d73974ff8a949c058b1c7837ca",
".git/objects/b2/1aa3fcc1a5c26363e0ce18f97ad1dd77714048": "64d4b4028e9a319c5428228156d9c4a3",
".git/objects/b2/e20a40c2db823d604836d826d65d2ccb5d3584": "0b0608248e8b05ce9034ad78e64173e8",
".git/objects/b3/e9f376780ad4b9152df5f96bd4d4b6d970e331": "cbc5414760df6c50a4f180fdf8e6f676",
".git/objects/b4/019189e62db7de9d1fb24c88f14e90bff905e4": "50294e9b9a99f27b74ffdb355769a881",
".git/objects/b4/fe68a176cf92f0849e8795c8d9991a2136db91": "15c6b4cbdd3bf879f9af3dcacf849b52",
".git/objects/b9/133b54ca0a7cc4801c8a692df421f1a91503fd": "044f181c26336e1d262ba357f10808aa",
".git/objects/bb/2df4691c79025fe320b0a081962d7eb8c1615f": "1d51757f6888716831379a7ce9325ad6",
".git/objects/bc/2cccd45c31faaac62066c9c87cef30839edc40": "808f29067d0302ad5942078611947fd9",
".git/objects/c1/2773100bdb8a61352db018e88b309c25c281db": "7e84d00d29de824876a98dbf95dac9e2",
".git/objects/c4/88bc0f5afb436461748fdafd938d85f63a5289": "01cb8a1d3cbd6dc694b85e00c2748f12",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c7/0c9cfb9a578651828d252aab5a9b8d26dcb753": "f39a077c23f37ef12aefe4cc96b61408",
".git/objects/cc/59b31c1a624e67bd1a094ded3aa14acb28a0ae": "617d9c3ba1cd2d862c7201500de34509",
".git/objects/cd/6950a471bc230ec7bf8721ebdb97cab08d88cb": "c9f44d052ce8e0c1ac1a44be5bb9f6c9",
".git/objects/cf/8fa9813cbb79a724cbe9b0dc1d50c3c7150bc1": "366eb60fc784bb4221b949c10cb137c4",
".git/objects/d0/fb2caf99926567306d1d702c1222bb28c1fcc5": "5c677f7aaac4b03eb15f0f7ec9a2f060",
".git/objects/d1/18266866ed94441b902050b0f814c784afaf5a": "88c308a5d1d25449135ae208445b5ce7",
".git/objects/d1/6b3e192c29ccd8a1484438874d9b643cd894c2": "a6f88b99343d24cbb478fe651e8f8496",
".git/objects/d5/0ba880f99f63efa60eefeeca9a5813dfb78bee": "deccd1624eca6a23eb7cd5ca8b091aa3",
".git/objects/d9/1126d5834613da32f6dd91a681525c97055be9": "e26dbb66f2b2d4276dc318bf164524d9",
".git/objects/da/6f478fbdf88821b9e0a6c2a5949d88c6d2f081": "da4e7d59016e37890a1153e5d3727d2c",
".git/objects/da/c26acbe6fea6b51622bbc43189258b569b5665": "9dd40ebd3506155f1930a5bc549e2cd2",
".git/objects/dc/3cbd4cdb8a6c2a480873faa30e6f119f031d78": "657efe48c2c265c14a95b0fe429c5ad9",
".git/objects/dd/db31e74e33cca555d465985c00340efecb47ca": "ae3e2d05c342b6d18ee5c0f066e9c313",
".git/objects/de/0757a463182f40735866fb31591c1dc87d3ac9": "7a7e325cddaca175366226bf7bc5e93c",
".git/objects/e1/5e9545bfb539bcd2cb22e68c4b0ce9d443ef26": "16866ef40815031cbb02cb8a0740e155",
".git/objects/f3/74dbc1bf2152f0d0272a0b4eb26f158e4f500b": "18010660d026a420d502ae8d042914eb",
".git/objects/f5/2ff3c1f5b3ace2709026e460f13a74bf0f4516": "1c5a09094f3325ce14a3d03ebd356b73",
".git/objects/f7/d76d937393c0442a67ead0dc9c16b21b6cf17c": "cd4645c84b0a55b6648cf79ed9612987",
".git/objects/f9/1deb241f272d09c36f7333bc0fa84106fdcfd0": "3cc22af223940390589113f578995a35",
".git/objects/ff/18201d08c0ae036a1b8758193823a8ea1f7829": "ab52fc49be8a646c8771d46353b983db",
"assets/AssetManifest.bin": "b3c9993ec532cc20afc9b0db05a414cd",
"assets/AssetManifest.json": "7afbc9c8360a3b60e391809dfd77e90f",
"assets/assets/app_icon.png": "015d375c070772b9cb8888806b7f47f3",
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
"assets/assets/social_media/rumble.png": "ac190ef9e408a63f854a7003ee8775b2",
"assets/assets/social_media/tiktok.png": "a3352efadc94a5ab0d11173dcaa7d7a5",
"assets/assets/social_media/x.png": "69d4bd7aea0945ba7ff5e77d1752a5d1",
"assets/assets/social_media/youtube.png": "2b5270fc7e50270749881e91da72e984",
"assets/assets/tos/tos_app.txt": "4bd68be7f72008e16b3e69b30e1a2d9d",
"assets/assets/tos/tos_payments.txt": "956c5ddbaaad73154fccda6f540ac44a",
"assets/assets/tos/tos_web.txt": "3b84b54d0e81ccc3b565d4313d19ee6b",
"assets/FontManifest.json": "08e6c927a377fef4ab8bb76db856982b",
"assets/fonts/MaterialIcons-Regular.otf": "20b90a7950f71ddfdb868da1bdd427e2",
"assets/lib/env/env.g.dart": "17168c5856bd1d77b9c1c995494f7a24",
"assets/NOTICES": "4d23b9d285bd5cb41e208df8edebca3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "8746f21712bc06fdda1c70c44d50955a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "16e8c4d584f0ab63971a558a88bde9f7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2f0ca87fa97b9c5b66bea12e7cec94aa",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
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
"index.html": "40e453e547c4368c5d6e0b030cf1053f",
"/": "d866de262ccb8d90ba2e88df0c29915e",
"main.dart.js": "b8a9c754c9f416e42a4cb608296354e7",
"manifest.json": "4a13449471cb4965f6336dcb5f980eeb",
"OneSignalSDK-v16-ServiceWorker/OneSignalSDKWorker.js": "bb342b01d13bebb317c67b881692efd3",
"payment/cancel/index.html": "a5bdebe29167c20b3b4b0c8071c4ef9a",
"payment/index.html": "d7d2ef228729ddeda3710fa6c06ed6e4",
"payment/success/index.html": "d866de262ccb8d90ba2e88df0c29915e",
"version.json": "d20413646ec063f89dd1fceae7f66720"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
