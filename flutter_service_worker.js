'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "81f28522db473d9139d0d4fb8d614063",
".git/config": "22de72731f12005b59a722dd0290e3f3",
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
".git/index": "0e5c2b6dcc5164d458c1dad9fb469718",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e548ea70efc9178374af829c774068a5",
".git/logs/refs/heads/main": "e548ea70efc9178374af829c774068a5",
".git/logs/refs/remotes/origin/main": "42048192f5fbb0d540ff753678318cda",
".git/objects/00/4d2aed3efa67ee5d08d350739afecebc8089df": "12b673ab3e3fb631b1750f3ea3350fd8",
".git/objects/00/ed81755670f09d63126886b80f622d2a4b88a7": "2418f2878e138a10361ef29a96e3d052",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/05/353a358f15706ad0b8fed01b9683959450ea33": "9d7cf4cdc0ab93bc37063785b6762a18",
".git/objects/05/9213ae0bd1ea24255c840093362eabdaf06dab": "5eb62fb787f1b156480b3023257866f9",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/08/4394ac54435b05886e40c130d495f514b81bde": "3683e374785465a604a02341ae13049d",
".git/objects/09/a120f6e18120ec01b3617acb829b46a2f275b0": "a733c1b3f4a6fb4355609e509d770a85",
".git/objects/0a/48eccf593eb8ecd61581b40d6c9bff3572724d": "cc65c17121abab52ed020e181482c55a",
".git/objects/0b/e681996b72aa90cb5de64dba1399bf8e0b11d7": "3064f44361f6c7e236fc6fc7430f4cf0",
".git/objects/0c/53785c6951213ddb9f2beeb5d5f82e0d0ad74b": "1f858f46a59ad0e940daabec5e9212db",
".git/objects/0d/d9f6acf8d87893f8fb6eda09cf113746cb13a8": "d6a0c606b541087a11e2d9e1095452eb",
".git/objects/0f/cf850f7158907e072cd3875dfcaf92bbaf3f54": "39c7fafc5f32d9f8dd9caccfb971eee2",
".git/objects/10/07b1141fc7878a106d2a0fb03953a12627b742": "e0820e1d7f3d2b0f27cb11582c036d13",
".git/objects/11/506414e4f854ca4ec0b34dbf66059c41ffd684": "4abced8d905ca658b55889fbcdd9dc8f",
".git/objects/11/86cc5b5a5d3dc9eb76c8077a0241d4436942d5": "d7a3ee62aa5432a3a3599b05017381c2",
".git/objects/12/4b7ccb8d5fa850622667663d8501fd87dd1867": "1f9caaefad7156abfe220a09de0b45f1",
".git/objects/13/79b1d6d9386374f387a995af5775655727625b": "41b40008550d9750bef2fb1451be7303",
".git/objects/14/b58129f119d6a01fa62a5c3c64f6936933fd37": "45f45fb7519307e1ef5bbdbda9b9e0c4",
".git/objects/15/349c45c8cc39aeea7d7f63ccbbdd3ab6c167ee": "92687159e8af8ff333703c39402a5cf8",
".git/objects/15/a7b1aa72db1722c6bdd8356131d86fabeddf66": "aedf6ad682042f72e8c082d8dc840cd8",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/c34c476dbf728c12fe4c63575026ed3301bdba": "8a3ab12ba0b11c412a8b6165d3a1cc12",
".git/objects/17/55a921a4533463512360fe3d96c83bbe9cd28d": "5f265a8c1f7c83ed13ef1eca19c2b01f",
".git/objects/18/3bdb35293781776af017d867c628cf18fb12e9": "51578a427e76386ccd7f73a6c90a394c",
".git/objects/18/66c6857b64d86dca3781e4eb183c131be4f97d": "c916b785b0347506ae7347f3e639d1e2",
".git/objects/19/d7c7915ddc0ed1870a2e81173b64cd78498772": "ba49661c75ca00e30615f15e8a7105e4",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/1a/f6d25a56daf717193359f4aaf3144c5e65c62b": "e3995dafbb291188409e29dee042fcc9",
".git/objects/1c/a0a5bc3261e44d1a699785738dbb00ed0fb761": "859437fd9cf34e4e5bf90eeadcdce3bd",
".git/objects/1d/f1d87a1fe6982a949d6cbb39b37fd2b6145b66": "ca4b0c7c86582f62dc2f5fe97c8ca0f3",
".git/objects/1f/b86e5e654e101df70cc14c955da90412541066": "27633cca39ee67cbb239567c9fa176ce",
".git/objects/1f/f6105b39eed2c975c16b1182f5df0b55ea8a5d": "3e63317cd33e3a2b183686c21647beb8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/1bdef1e7d32b118f09a0dcd6aea53a899345fc": "e50ab1b93a9c31d1befd6c890081e4a8",
".git/objects/20/3ceef1e3a0dfba882490e3ea63a30156e4c000": "8fff224c989763174a44835dce7c7deb",
".git/objects/21/8cf09502d1bc1f5015446044828af8898d79b7": "aacb2d74a365a73c3268c52efe8b065f",
".git/objects/25/dbf3b2d538e3b6ce4ca7f6b46ae4e5f37f67b1": "bbfaa0f9a05fe6ae3792bdb10b8b89a7",
".git/objects/28/79e18bb3e4a83069a4b1369559bf50271cd2a9": "25787cd8a6b1b827ef8a5be69be9abb5",
".git/objects/2a/780715765eab33d188687d5eb895bd9ebb4794": "769f61550d91c01b641f019828e4bba4",
".git/objects/2b/c11b10e9720a90b321d5ea300c2a6b85f1216a": "3c50b5da5d94a85853fc5f8decafd1ce",
".git/objects/2d/395fdc6b12d2e904c7d42761e5758b170355ff": "cbfc7267ed11d838dac7d4ee476d0c39",
".git/objects/31/467bb2506a4accab59a3b3b7b5c7b77970e6ab": "d4baf4bf4fc03f02fcb05bbf3685ac28",
".git/objects/32/86f64447c1f1986f67fee2145de3189108a36b": "eb5e1b8f9ecc8dc00fa042a5383c04f2",
".git/objects/34/36ff5bf65df0e1296aa451a5a32eb635ff3107": "370f685f3406821ad273f41d249987f1",
".git/objects/34/97608fb31b8dcababa1b6303a79c742257413e": "e5791910597a35db361ae9967b6eb2b7",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/ca3ad53db00d0dc956c70b9cf0025b2b90ac70": "d3fd7573d07acf63e3baa657f24e7c9f",
".git/objects/36/58c390f1c6b3c41179d13f9252eb954075c194": "f586890208147b86237da56ad6af21f3",
".git/objects/36/b6a679364647d09860e06faaaab54a1b5f3d9d": "828acdc5a3b042ee8390a65cc3bc3dbd",
".git/objects/37/109c5a3fae975b5b630932c1aaee2bb2ad0eff": "0f8d0fbd291fcd1da3302d5c38b23b76",
".git/objects/38/974b5ea3a2b03a4a590af97f1b592330809ca6": "c5f75bf1334fe65ebe73adbf03312938",
".git/objects/39/402887d9c0a326827b345cd8a5d6847b426d53": "30bebfcd5dadf8f6c9cc9f3fe5fc01ec",
".git/objects/39/ad1a8ecbfc0cc01fb072897eeae6c70871ba46": "5306f7e72315e818ef13e6fd6620d20a",
".git/objects/3b/515c481cc0f0fe76f244674b90ee35ff3babb0": "69deb944c60956b3a26cdf246e0e36fe",
".git/objects/3b/dd02f56182c7659adceb5a524f6a184b519dd8": "6275598c929f9421e4af016dcab12f8d",
".git/objects/3c/07caea257978e333d0d93d07576700f358f392": "e03288ac614d7267f814ee1066297819",
".git/objects/3f/a41fa83e8dc0c930c114a7240ccf90ca7e0a29": "8565ad6723d688e2de30d4f53b7cb73b",
".git/objects/3f/bd536d2799eeebea0d323a63769b96b0d2a3f2": "8ef531298ee0439860418bf69162cd26",
".git/objects/41/a7ed6db522d905a63ac9e69c1d0d5e931d8bfb": "a707a23b4894dc2c4b04333885a87c31",
".git/objects/42/10c6fd65393afe5e0e9fa522f5ce682ce4e40c": "a152f4ff96600e826d86835c1a97c672",
".git/objects/44/7b1b235771e2e2e78dddda5c4c6b29d1eea55f": "5ac0adbaa315ba8600ba15133387e1cd",
".git/objects/45/4edd5aa0e871665b35e40cfd1cf3d49f001da5": "c057af8c3ab8ddcad9169387c7f78828",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/45/f498772060a96b0e8c619b7277b0d59449b73a": "4989eb847c325c856abf87210eb62bd6",
".git/objects/47/086b45c334ae16b9045cde57f59c6e217daf5a": "6eac3790129f99e067aab08dbc8fce25",
".git/objects/48/7792132c99475a4175d2eb288c79a3423c4f7e": "b099ce857dfb31720f23a7ff69e4dc9a",
".git/objects/49/118422024cc4d2eb432cc6f26796f99dce732d": "4f4851d30b1a7ecfa161caac51725945",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/67d5dde989fcf261199daec3add4cc5ff28119": "1b84fdb3b70565e3d09be43524c86033",
".git/objects/4b/6d86ffefceeac239a42d98f41aee460501e752": "d57158bec02f6196c1c4897fb0b9e0d5",
".git/objects/4b/824e623e07aafd4e7d92c3d5e1c030139e4184": "13b32d76693134f8fcbf3d37589fa540",
".git/objects/4e/4887e0368b9bb13112d1bf362e0d9fed46d274": "373e446b1afdb95353dc8c3469684313",
".git/objects/4e/59a6e5a70132bdabd030f8f10e2f3884abf724": "417ed02924b2a6391d711b99a37237d0",
".git/objects/4e/8271b75e10be79bd8895020908b7ab331d02e1": "1126ec56a51210a3fbc935bb322211a3",
".git/objects/4e/ec9e7a0b762b2e2ec28b0c9424f592c114b590": "46b1897de3e6be775f0867b6828c70c2",
".git/objects/50/82b1649f609ea7b7b2c3091dff3ba0cced48fc": "55b51f11e97a6a5a82fa79bdb9afeea3",
".git/objects/51/073e63a767bb197e1145a0ab21b9a8aaf676b6": "bc0e55a6b9c8b762a2b1cb69365fa8ff",
".git/objects/51/d898180b3f51fab273dc812a0aa508132ff5df": "9ae0e80c6fb21bed8e0232cf2d8f0b3c",
".git/objects/52/0b9e4176da57e992797aac48d4c9028a55de72": "9eb3fc8fd55243b8b352c267369b99c2",
".git/objects/52/b63132a6290eb0a1d00f107c714f05b1ac8a38": "e33b38e3fead19ad43694916ee9ddada",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/8afd33bf2f0f21f739cf0b4c5d912bedb4f32c": "1d13216cfbd275e8d13779d0959e78d0",
".git/objects/56/059a7eec4ab41a30a821c373918cac8bae031c": "c258984bd8a11f559994fb6380a08e46",
".git/objects/57/ac73e77d9ee073f78f987d1d43f842fa8d28e9": "fd2594c0ab9b1ec70cf800fa386798e6",
".git/objects/57/bf920ac6218af1fabc3201748e06539ca4ce68": "81499ef3feb0d2409fac268a5c592591",
".git/objects/59/2d00eb51b651dede0076228d50b4d229e99f15": "1114e85f65a0e459e9651a38783cd880",
".git/objects/5a/4da249cd7baed10096122887683bdf36fa9cfe": "d8e97909892bef6d09f29ed8cc8cbd4b",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5d/a6e76f35f6bf47b79fff0a984183d0140b5735": "f4108242b27cf2144a668b8630df80d0",
".git/objects/5e/3bec6d355677bacff0d1fcb57fb48b23be7321": "9af01f723549da4ff5cebb06e686f09c",
".git/objects/5f/3dfb663497173dc56788efcfe8c6c7db757848": "69ea7889feee7bba29b9b972ce361f70",
".git/objects/61/a795348030d505ce0b3de973ba3c0a017bddac": "baf0794878c16e2bb7b4a752d27fed78",
".git/objects/62/380833b11600567d23e98c158c73ad4f9d5cfa": "50db6f07361266b4209842512036d53f",
".git/objects/62/420070826eedaf66334d1cf369766d319143f8": "fdd7d86a3c85892ee52426115be56837",
".git/objects/63/8e165e6a085753f97b6f8cdcf0095f72ae38f8": "5201af8b9cbe10941e125a9c3b4556ed",
".git/objects/63/a4c1c1179721861951344dd3089258aaa2913a": "bbe2521f15535bfc129b0db39b5fbf87",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/63/cf6db95de971614cd9b44a4b10a896481b9de0": "85d9d2d8ac2e3890f635b00fd3eb148f",
".git/objects/65/08e9faf64fa547db998596c3472e779dd6656f": "f138a67c99ccb5b7e05142941685ec89",
".git/objects/67/57b85fdb77b1752029831af1cb46f5a2fc1279": "a7a2fca109d977c4e37e889c9efe39cc",
".git/objects/68/069ab6c2be015ce52b2a20a3d3ffce8fbdbbc7": "504f85fe8246f2800d41cb8026ce6969",
".git/objects/68/37ffe945ff6254e2d1293ae5fdec34e7755ab0": "8236b36d8f10531840784f22a5821bf2",
".git/objects/69/dc1ab7975f20aa98c011c01e7cbd4373e2c5e0": "ffc2423c15bc779bdd29c6e8f6f3df38",
".git/objects/6b/0bcba981992c4d47b0023bcbf4e18ae11b9778": "0b19f89b8859977d06847084727d5156",
".git/objects/6c/6476065ff961c261eb0a3c53acae85d70625d7": "8da2a247a629a1d989a6da504565d57f",
".git/objects/6d/452b501f3a34530e3eddc87f7e6e4fcd3ff292": "2b363d54f159e6d197def90b156f59e6",
".git/objects/6f/17945c3a3521672eae7a3bf8a28b8dcd1718b9": "056cbd4b4ede859a3ceef7d392fffad2",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/2626d63ee83dc6c3d8fb848a2db59880c1e884": "b18993477d8c2c2f9fdc38708543f873",
".git/objects/71/42f0bfe0a4ce1ef37add86e7d80ec57dec783d": "44de57d266d83feabd169c313bfaaa2a",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/75/e028c8229ffbae555ecec8f513cf4c9b7d7f4d": "a89d8aac3712bdcb6912ecf2e5c8e8cb",
".git/objects/76/3164b1592ee8edba6eff7b3d1702be3aae0cda": "9e27c8b4aa2215debf0266d692f56c97",
".git/objects/76/62b0577c7ae9cd1fdc63fd6d9fc26371baf8a3": "404826e9f5fbdacab478b26a1dd40667",
".git/objects/78/36acd9a134e77eb6adf76cddba6354d844b4c8": "fa31655345afbab64e0d7a2d5a719573",
".git/objects/79/64da45c99e3644b9d7a10197ac9369f16cdf05": "a881dbb19752967b72975ca17b0a053b",
".git/objects/79/f38c6801d8e23f2ca22e0f2ab702741acf4a81": "e68cd9dbbc6e381db5861f8e26693088",
".git/objects/7b/5251d5dbff2609f8dc54f8c99490e9c9e2cbaf": "2b1fede2049be99aaad8d5e97f8bef23",
".git/objects/7e/b02d5f265101638c7940689cda66f797419a3a": "c436e7a3a7a21d415a4cf30745f921cc",
".git/objects/81/5cf1cb784a1cb879839139cf98cbe0ff234b43": "4406091fd6e21b726fd995c8df01cf3e",
".git/objects/82/c86b9b8ccee0f393bbab97415bc596d968fe2b": "703503800dab840b580a11a4eb5f0bea",
".git/objects/84/4ff8471626ac556bc826a6527d80868cb5b0ea": "c6569143aa35be08b6259f6b79c9fa1c",
".git/objects/85/ffc8d457945b48987b0ce871526faed80456c9": "c79046edb89a9808a8d80eca69106ac2",
".git/objects/86/e8900a4325a9a5ebd041dfb351ec4f8921f3ff": "ef3466ede676b5eef6103eca7205985e",
".git/objects/87/4bf6092db62abf52aaf60096092090a05e587a": "519aae51372323487af67e9081732f40",
".git/objects/89/47084b8987c37a64952c0bd413a7a47f84ef87": "ba86de9ae06cf27b4088bb26412bc1df",
".git/objects/89/8ed5d6ac131ca754d1c7f4ba34476f4caa7cb9": "5e150c99269ac846c1fbbf0267f06e2f",
".git/objects/8b/02601abd54e99dcb14c4998e3665678a2a31f4": "141a2ab9888fa5c34c16facb48699b84",
".git/objects/8b/79a8b308f98dc347129359597004df6df97f6b": "0f281425f67ffc52c1159676e338dc98",
".git/objects/8b/88cc61c81051e16e1fccd26fc214fc47ba0363": "4cc482a3b8cc75833b53bc6dc87a75e4",
".git/objects/8b/fb15b47879ad631fce2c0941104639556374b5": "bd2cf79d3791830b5f6d89403c7c3134",
".git/objects/8d/3733c1cae0c5ec22bc766a06eb840eb21aea0c": "7988be8c388aac09585d46ec0c266735",
".git/objects/8f/334f6bc5ba64624ce8f032e6c11e0ed7b8419b": "b2a75025596994debe1bc08071aac599",
".git/objects/90/27796fbeb930dab7ad8225dc19a56d59d7505e": "6901c2a9f83ee03948d61821abec76f7",
".git/objects/90/da7c12daa6a644b9bed5d87ab629abb67d11a2": "01f716d66347fca52604bb99d81aa07d",
".git/objects/91/0a15897452c9b27fcce73955fa67ce05ee9410": "1b6798124acf0dc67a5c67857c85fb9f",
".git/objects/93/51e835fcb94360da1d547491fc97f5e2f76a8f": "737aa6b43eb0ee37748a30610faac268",
".git/objects/93/ea50fbe46e32e1180955ee98d6a70bb141bf47": "cfc3d715c6c61022198f2c1f68b41681",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/efb4eb4a75edaf372bd537bee7c651e0abcc02": "fceb229588d6e348c6f62dfc59e9eefe",
".git/objects/96/3d5a55a0c11f438cc5a102cd46ee621d086637": "65248bcd686a80e8d4d40557b3eade33",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/9b/2caf33ed4ea1627f0e87b17eb7d4727f2c5a21": "6442b1d26cf5ec356a85e3f4653b32c7",
".git/objects/9d/c0d8a9f8246b14d8bd3f46d8c371deef7c1878": "fe75b0754ed57edf2ae9d522a9322897",
".git/objects/9d/f5d7d6280223ff1d08c8f5c6ed4e254ac8614b": "6a60b438992cc9e308baa3ba47c26013",
".git/objects/9f/a4d37eed3cfdaa0bcf726c1afb345e29e784ca": "7372e3684f1e2026b1a6db5dbb279322",
".git/objects/9f/d5523767c9ff2b8f6a4d7fc0440dae7828f0c9": "7c284943242f526915a0c8018a286ce5",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a2/7527de1a4282298e3043c48b9ae6b7d2ae10b8": "c0323f5ef89c142e88a2d5ce0618f35c",
".git/objects/a2/bafcc60f838fce582b5b26427b462ce89d7b39": "ab56ac07cd7f9e59419c7ad0169eb39c",
".git/objects/a3/826e86b88ab37e49a3d7976157ef0b4ea5fd23": "ec4ad94c32ce0ccf0a8b07f1601d2ae4",
".git/objects/a3/9c645083b8691edb9a6cf3824c840b70f63326": "a4b5065314b927b63d1927a31def2122",
".git/objects/a3/a04d5998396f0df7428e5161d3df3cc5f5ce29": "21d6c6b42c9dd79d6edc2204ac9d33c6",
".git/objects/a3/d53fad4e34c7d122e76aa7cc7e11ee8672116b": "f85c296f6397179b7d15f932b359dcc0",
".git/objects/a4/0cc6b31faa9f72266597d046933daa16b253aa": "4b6d36f5eadc08051601358896f9602b",
".git/objects/a7/66b4e24bd38ce721ca907c786fd57ddf513791": "9b87f132ca99e794e3834d5646185e63",
".git/objects/a7/72eedb547e23a6dd30b48eb330d222980c9ddc": "2f4d0075dc0c33643bc115f679688c8f",
".git/objects/ab/580ff570cbcc3dccd7a1fe4c08624d52e6e465": "8d2e4dd7e5ef77aeadb758f503a66368",
".git/objects/ab/7c25880158e6b8e4c24e9549798b8e3ca95b5a": "38aa786abd26ca29f9a223f4c51ac6b8",
".git/objects/ac/c3194fdfcc4e331e1e8672b5660942e5b87cc5": "cd25c64ecd5f9c24c5a2f8485e392f39",
".git/objects/ad/ce441aa264d401fd5c3c44e36d9b8a840dad06": "e768090a883566a69604f53b5f79832b",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/534c092b4651d33c941cda122b1b33282f68bd": "ce4e8c0a5b0f9a5b227725b33221e315",
".git/objects/b3/8cf684997c8539a1d44f53e3f7382715e162b0": "af329740fad5b441e4c00096c911c1b2",
".git/objects/b3/e3a14318be7c53746841866f0cc1b985a4a64f": "766d23e86a1f6850ddbea77d90d2938b",
".git/objects/b3/e9f376780ad4b9152df5f96bd4d4b6d970e331": "cbc5414760df6c50a4f180fdf8e6f676",
".git/objects/b4/dfc9f55e5f69ac4cf676ac7c29905caaf3ffc9": "14bca184082dfbfdaf03b92780f106c6",
".git/objects/b4/fe68a176cf92f0849e8795c8d9991a2136db91": "15c6b4cbdd3bf879f9af3dcacf849b52",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/1a3f54c6fd9dc9374833721a937ea89b2d0662": "014c4edf19ea193bee00242855663d7b",
".git/objects/b5/33ccbf56b87eb169f3f6eecdc1773c66fb053f": "df51546c1c200d65beef6135276caade",
".git/objects/b8/2affe466363539bf829e0b141e53f6d4cffe39": "a5aa29d2bad7d1e489fc86fa042a3616",
".git/objects/b9/133b54ca0a7cc4801c8a692df421f1a91503fd": "044f181c26336e1d262ba357f10808aa",
".git/objects/b9/a30f0ed28f96bed26b4fc29580e7831eb1b6c4": "2cbf4fe17ad754f026e462139eeef48a",
".git/objects/ba/7c8421ae5ff283b087e2da9a42dda6719a093a": "1cc5e066e463a3375203ccb28efb6feb",
".git/objects/bb/3423c8718059bad1905091ec8c551f624db62d": "88cd06231125bd53a9f984c612a0b2b6",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/7878fa56fc2f9864e9c45f12e7a4768234a465": "d8989c409563c26fc8b35b7c757f32e7",
".git/objects/be/3d91d139301f6c4a6b3ace2c6e868cbaa82212": "5a5e0903dac582c3de388cbc1fcecfb7",
".git/objects/bf/741319ad453cee5395b5620962e21d97a326fa": "211f068674785054f2341a613bbcf132",
".git/objects/bf/8659ae8d461f0518e7ed9f1ac70ac59513cda0": "9ffe9d94290794a9df1b03f5d1e652e0",
".git/objects/c1/2773100bdb8a61352db018e88b309c25c281db": "7e84d00d29de824876a98dbf95dac9e2",
".git/objects/c1/d556ac955005955469f28e24c8c08d2e26d72d": "be33534017c362d7c40dcca55bbca928",
".git/objects/c3/146683f43432d74bf54aaadd5af4a93fa4340a": "c0f3b06246fdf18b9464b935574de833",
".git/objects/c3/db70d1f57d3b21fe9f1ff21d0c9cf39dd237f1": "b9966c0afaffea327c8ff976203aa807",
".git/objects/c4/7a63b45b60d74a6d5c9e408f6675fe8a87a919": "7284cca20da4d783cb46599822c9c932",
".git/objects/c4/88bc0f5afb436461748fdafd938d85f63a5289": "01cb8a1d3cbd6dc694b85e00c2748f12",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c5/5c1c3e205cd3ecbc2fffd0c85f685c07426891": "01f80d4b418bba2e0af4f7b16f3ada7a",
".git/objects/c5/aca1f11b34e47cdbdcdb0a8e621f40de78b20c": "3f75e4160f447fa90457c3a5e23744cb",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/c19bfff60502a2579381975879e75943169367": "c96ade044a3b9517ad01f4041676d44f",
".git/objects/c8/9b0e6d286e625522abc632c5a64445eda2c641": "68d5603691be8eff2011b55f953770f7",
".git/objects/c9/f95202f4cf5f8b5a68285dd58e24b899e5a8e5": "628a96efe0a34646f8d263f2b1f1218d",
".git/objects/cb/217e83da5120d7035d009580c4ad73d7090a81": "4cf9b31054c96411156009b34f5b8871",
".git/objects/cb/50d4aeb784bb9e1df232ddf93240f2dec933cd": "f421726e6017950d74fe321b4ff227d1",
".git/objects/cc/80a12547b62122ccf93656a59ae323d1c6e161": "6021072fa723240884354593c100894c",
".git/objects/cd/476399174cf80203f7874bbb91f4ce86284d60": "f6b88f9e32c9c420dcd8dc14be37aad2",
".git/objects/cd/6950a471bc230ec7bf8721ebdb97cab08d88cb": "c9f44d052ce8e0c1ac1a44be5bb9f6c9",
".git/objects/ce/69c21dae1b663fa71185738df7a081d3f945ac": "e3b2cfeadc4686b34a48dddceae70fbe",
".git/objects/ce/bd19b8f59314f84309ec0dae71239d13e31595": "12a000a3fc2c23ca06963c7aaf6740a0",
".git/objects/cf/3289e2a20caa9603aac3b57d4585a57adb1bc9": "8bc9f88dd0cf78e11c64d12abb668fbb",
".git/objects/d0/fb2caf99926567306d1d702c1222bb28c1fcc5": "5c677f7aaac4b03eb15f0f7ec9a2f060",
".git/objects/d1/6b3e192c29ccd8a1484438874d9b643cd894c2": "a6f88b99343d24cbb478fe651e8f8496",
".git/objects/d1/992c94e737a9df6d66c6cdcf27d489b480ae0c": "6cd8a1d28e007bcce1c8b9d69798fe1f",
".git/objects/d2/ce5eb8eb308c7de6ca8fea5dee9e1b28c26a4c": "76a9ad5f4a573e85efa097d6072b1de6",
".git/objects/d2/e5b49f10cb223db4141491e7f60a827fee7e30": "b0a294b9dee24dbb11d33baa80f05f79",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d3/f39ee5165a4bfc68814f72c394b10229e0f94b": "9882b60c5a0f004f3472097c2988f7a5",
".git/objects/d4/2932eb83cbf5a1a2ca1f6a9379bdc61828bf27": "b6e259825f665edfdfb8a4bd347a89f1",
".git/objects/d4/5302b2c80dd08a9a8e19eb2cea104662c6ee25": "755bd26398d3428e8d374612d915e8f5",
".git/objects/d6/e45d65b42cc7e5edb9e4928b33c02b7205a224": "617e3374ce5d3430e5f4c15a5797e177",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/be4e64cade89a47366926f735457e5e49bf199": "9616a5e6735fc33e4a69c1c051a589a6",
".git/objects/d8/bd6488be9b5fa32b0c0e3c2fffe0b4cefe6887": "7cd8689caaac6814b7ecb6496cbe7a84",
".git/objects/d9/101fbea86d09eb04e92bfe1c0cbc101846eb49": "591c82f7faef4d4a5944f779697470d8",
".git/objects/d9/280158434b32bb9c6bceac136b78dac4e047cc": "9ea8a376bca96b9b75796e63a752d602",
".git/objects/da/c26acbe6fea6b51622bbc43189258b569b5665": "9dd40ebd3506155f1930a5bc549e2cd2",
".git/objects/db/41397103cb70322325c4f06ac71c1f8356f6f1": "53893bf8284b7951336aed514fdf32f4",
".git/objects/db/494850ac0f346d7e65cb9c74b3cd9fd3b28789": "73609a1d336d3fbff0bdda0446912df4",
".git/objects/dc/34ae9095dd5432500b7a4d1994c02c0fbe8eb9": "38b995b3431856fa9de6e838ae663b11",
".git/objects/dc/bb0705eb130e045808e3ac412bf2faaf88bd81": "bcbadb24b7485ec2632db9f755210167",
".git/objects/dd/3fbc8b492631dba3b994a0500945f223e45240": "807ebfcf3915819f33d1286f57d5933f",
".git/objects/dd/73b30d4387128c216f79e65459356c261e78cb": "9e77ec1611175d528bf9e16e46775a1f",
".git/objects/dd/db31e74e33cca555d465985c00340efecb47ca": "ae3e2d05c342b6d18ee5c0f066e9c313",
".git/objects/df/2d75f9326caf961a1b668849d57c1b9b7e4e9a": "138ed16ceef21f13c5f80674c304c797",
".git/objects/df/b6eac1e96cf2497c87573ba9cbfc02ac3b8d98": "54a743945f216cb28308a89dff9282c7",
".git/objects/df/fc8887470cc19ad24b96261bbb5ffd0bd355d5": "0c0adfb2023bfdce8e5723779ac3faae",
".git/objects/e0/870a5001202a880368bdae0106c61a219aa77c": "07abc39f2b8610e234c48884411cb9a3",
".git/objects/e1/5e9545bfb539bcd2cb22e68c4b0ce9d443ef26": "16866ef40815031cbb02cb8a0740e155",
".git/objects/e2/466aa3bf52be7d75af1d4cc55321adcfbac123": "be6007984ca1d57d4273edf837e54fd1",
".git/objects/e2/d29f48f4713f3e3cbcea31765c33f198bcb6ad": "a70e321c8778c877bc6ee12cb1f27e05",
".git/objects/e3/0018ae364a36383017259ab5bb81b256cdf4d4": "26598088bf870f50718111190e8a48bf",
".git/objects/e5/afba4b3f42180535cac323c356b186ba51d486": "0dbe28a82914d0290e92642056c0a55c",
".git/objects/e5/c4cb829c885e9e86b91064d1f5fbecf476386b": "8b41a810f35008d622f7aecd8ca69df8",
".git/objects/e6/513b086c9a5f384e9f7d18132207aa14ee3e2b": "fca12e5cb7b804a2f276544e3a79b777",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/281bdb898f2aedb1e470e595fc4c3731e64fc9": "33a3bc46db8dd2af3d56bb0971505748",
".git/objects/e7/2aadc79d857d3da1ca63dde9bf59a248001c4d": "aca78c4716dccf4a205c4a2978253f03",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/b8279263333c4292c812370c322a440e024bd9": "5fa5e260374c89ca4d638432fdd760b8",
".git/objects/ea/fade8e856fd85233bb05455efdab34850be3bc": "8ea95980404003f58e13f1c8a3b74dd3",
".git/objects/ec/9c7203ff78df659118f7c06293426290672734": "bbe7b904b8cf5d13c8af40bdfdf35533",
".git/objects/ec/d764329b0ca42627f83f95bef5fa61770d0008": "e6ffbb44d27ee1d594317523c83c016c",
".git/objects/ef/2b3e7a33b903184aaeca116e81a19d077b867f": "bdb5f0abadb15f4d3bf1907784d9a060",
".git/objects/ef/c9070b33d93453dc71fcda9dc7b3aabf7b7f7b": "a121a5d852134d4da715753627c51621",
".git/objects/ef/cbfa8d841d38aed64edf458d9e88d202ea94a0": "d0fa879fe1a76812b8bdda0e322347a5",
".git/objects/f0/d156f894f8302a86230fd6fe0cc1f66d4b696b": "1e57ee118342ba6343ca08123b9729e2",
".git/objects/f0/d282babce63badad647b60f2c3790ba0131ec0": "69d5f2c547f709a7d84f3eb02d6abac1",
".git/objects/f1/e7790d0b1853fa0aa82ddb38a82a24c4d121e4": "03deb34eddc3780cd5fe3713c217a238",
".git/objects/f3/ad42b9207bc789b67858a39ead1368067d6ea7": "3e4dc3bd99a1d24d7fda7b18cd442260",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/f6/a66081412ba713e0ab09c244a1bfda621bdec2": "f8f793cbb5f49ab0c89e7eb3a7f7ac52",
".git/objects/f7/6eb3434023f5010e3a2239bd454b4b55099a7e": "26c2801d8dfe2ce9fb44ceaa95fd6027",
".git/objects/f7/aa143acd887f699451af48131912208cce1741": "9e734551379a76759d32320a9d77e938",
".git/objects/f7/c6af0cb2361931810f5bdf9efba0ff033af8e8": "9da201d02e45dce44975d4ff9a8ad88a",
".git/objects/f8/51d1df490048a2627dfb840594eb21cc7db1bc": "7a62c4ac46b2e418a3d106a1cf9aea8b",
".git/objects/f9/050ea303a739cb2c43ada6c0672bf6830db58a": "886d065b7a792185a7a90260abbdbc19",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/refs/heads/main": "897a316fab71e186efb84c627dfcf107",
".git/refs/remotes/origin/main": "897a316fab71e186efb84c627dfcf107",
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
"index.html": "9b4bb5212ec49298dc502142334f961b",
"/": "9b4bb5212ec49298dc502142334f961b",
"main.dart.js": "2304d8d1ada709f5deeba6f3ab7a2759",
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
"version.json": "2c601d1a977348de46879bbedea7b056"};
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
