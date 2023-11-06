'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "e15328b0f685ce971d41e91ee5a677de",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5b3a13e00f91a4fc598511011897d70a",
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
".git/index": "208f7e75251ceda98e882c7529e1a5ce",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e5aeff7aedbed621a73fb0536812d441",
".git/logs/refs/heads/main": "e5aeff7aedbed621a73fb0536812d441",
".git/logs/refs/remotes/origin/main": "eb6a96a9119846df2a1082032bb6ea88",
".git/objects/00/ed81755670f09d63126886b80f622d2a4b88a7": "2418f2878e138a10361ef29a96e3d052",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/02/20fa481dd156375304f78fee736dc1d9185da8": "1140f46ac63f3f2ca69d4426eb29166e",
".git/objects/03/1fb0440d8627099d388f7269476123e6b0d86e": "f84d0ea3d1938c302e890baca15c467f",
".git/objects/05/9213ae0bd1ea24255c840093362eabdaf06dab": "5eb62fb787f1b156480b3023257866f9",
".git/objects/06/7cf4dac4b5029f643086e0e30071f214a1ce33": "9bd883eadd93bf2f6879604fdd0afee5",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/08/5b7685e0be1602b80cf439253516bb156c788e": "9aa4fa1e4308f7c5603937f3b3d28508",
".git/objects/09/033a66744208fc2dbaee73f38dba58be157315": "85b27203edd8d9aa113640d25cf6cfc5",
".git/objects/0b/7eeed0a2597e793e772ec2783c97d0e4c76ea5": "e43fbada0a5e9d8a8d750a9bbe3d4a9a",
".git/objects/0c/27a8df6cf7ee6cfc535e113825e6e8d641a1a0": "7c3eaac89556156c83c1676f6f590a46",
".git/objects/0f/cf850f7158907e072cd3875dfcaf92bbaf3f54": "39c7fafc5f32d9f8dd9caccfb971eee2",
".git/objects/10/90fa8b0c415235acee8688d2b11c57a0fa49a3": "22e3e8ff607345fbefcc4ce310eac542",
".git/objects/11/127e37230f22d6f3497e2c9d1a54609f0319d6": "4d53e3a8276065c5cea0b13a9ced6e56",
".git/objects/12/4b7ccb8d5fa850622667663d8501fd87dd1867": "1f9caaefad7156abfe220a09de0b45f1",
".git/objects/13/79b1d6d9386374f387a995af5775655727625b": "41b40008550d9750bef2fb1451be7303",
".git/objects/15/496241da1a0c032c8d585dad71996292175388": "3dfa2c480a01ce1b385a16eb0daa4703",
".git/objects/16/c34c476dbf728c12fe4c63575026ed3301bdba": "8a3ab12ba0b11c412a8b6165d3a1cc12",
".git/objects/18/3bdb35293781776af017d867c628cf18fb12e9": "51578a427e76386ccd7f73a6c90a394c",
".git/objects/19/79d76423bfaebd2587b216e015b3d43ae8715a": "a8c797ffcc92baa18fbde779424ec4ff",
".git/objects/19/d498883a296a6c38193f43548830f8c67a2964": "2d10a3176a5ff4546e38ab02f49a38fc",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/1e/39ba03f25a8543df8b336185032ff702388790": "6aa414f464516b91171ddbaccf96ac86",
".git/objects/1f/b86e5e654e101df70cc14c955da90412541066": "27633cca39ee67cbb239567c9fa176ce",
".git/objects/20/13b34fb7de932dc431fbe36347c2935d903581": "6efa9d2e476cb17f668c5c592aa02b3b",
".git/objects/20/1bdef1e7d32b118f09a0dcd6aea53a899345fc": "e50ab1b93a9c31d1befd6c890081e4a8",
".git/objects/20/9d23dc813b5ed92c84081e79482bc689263819": "d625b593f442869f7b3839f097e21bd0",
".git/objects/21/8cf09502d1bc1f5015446044828af8898d79b7": "aacb2d74a365a73c3268c52efe8b065f",
".git/objects/21/a89097a4fd2ea1cafcb7111c9aeee2cecc9918": "575ead43af36feb4d15ba280fd56558b",
".git/objects/26/56d6dd10423cd4338dccd02419860648903da5": "f06a8609614886971508c5a83acd933e",
".git/objects/28/d759d2b69e763e43a58928a58799cc5d169c1b": "91a8aedb5c192c166f30d5a108725792",
".git/objects/2a/3ed1af1f7b9d68bc056bf4136605f431b1a347": "f049984c7741d27278d58682a8e1c7dc",
".git/objects/2a/72132abb5b27f2bdc45749536e0a9d869a2839": "6bb073a241e145b7b1af19d030e49bec",
".git/objects/2a/b21746143c4c510c4698cfb4fe2eb8a3c4dc47": "0da0a09c27f7442c521c526d56a72c23",
".git/objects/2b/68102460ad059fdc211e3c03999fab344d06e4": "eb15cb926111ab5141aa825a93e0b4e8",
".git/objects/2b/edb295e73f672521e9bb074b8fb5157fc4becd": "f12b4af9383ab43acb66e9a5ba85537b",
".git/objects/2d/2c6122370269a20ed6c7590e8f10abedd09a9b": "8e576239ee9b75597417c5c5170b7145",
".git/objects/2d/395fdc6b12d2e904c7d42761e5758b170355ff": "cbfc7267ed11d838dac7d4ee476d0c39",
".git/objects/2f/1696165441d625f5355a32c1755e3d20442e3e": "7a1769c1e00dff13aca8948d3c985186",
".git/objects/2f/61e58445e2cc699dd2c66ce9ca498921fe4d24": "1d69b1a3dbe6d8716e8ec710500e516b",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/31/467bb2506a4accab59a3b3b7b5c7b77970e6ab": "d4baf4bf4fc03f02fcb05bbf3685ac28",
".git/objects/32/8564fdbe5591c6385b349dc1ee4b8ad32e5720": "8ff2d2c6813f96cab03da9c9267f632d",
".git/objects/35/7253092a525af43d1e6aa4bae17e6d10e4250b": "0befb5b116a8f0c72992c63efc6b2779",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/1f35a39786d5b660b4c95b0c14e5059da891cf": "48c77f7b7c58586f846b927ef6b6dd41",
".git/objects/36/b6a679364647d09860e06faaaab54a1b5f3d9d": "828acdc5a3b042ee8390a65cc3bc3dbd",
".git/objects/37/109c5a3fae975b5b630932c1aaee2bb2ad0eff": "0f8d0fbd291fcd1da3302d5c38b23b76",
".git/objects/37/f77528f4fd18b39ab471578901d50c43cb2bad": "e0f171aae7f6c917eb47817046dbb274",
".git/objects/38/50fe5de552f11297712515e34c9a1376c62d39": "6b57034a006d1d9766a61940cd36c189",
".git/objects/39/ad1a8ecbfc0cc01fb072897eeae6c70871ba46": "5306f7e72315e818ef13e6fd6620d20a",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3b/dd02f56182c7659adceb5a524f6a184b519dd8": "6275598c929f9421e4af016dcab12f8d",
".git/objects/3c/c3b1fb13f3c14fae4179ee4fbeda4f5f36aa08": "04e8e5b20ad6d5e8b7e06f73da17356b",
".git/objects/3e/af1f8b388a0b8bdb0bc8ff81ff87d7ae76f1b6": "32b9ad1f0e028145231c95a0bc42afda",
".git/objects/3e/f6df87bbc335cf37b15e36b742f635fc9e4e6a": "b58ef9f2eddda1b86470199fb148f264",
".git/objects/41/3be6c3f2a62c48af95615ca9bad27aecc622fd": "281cbb11a46d3be01d159c919cd6fad4",
".git/objects/41/a7ed6db522d905a63ac9e69c1d0d5e931d8bfb": "a707a23b4894dc2c4b04333885a87c31",
".git/objects/42/5864fe2a61d3ab8c857db138fc7a716a4a6b9d": "42f3618a84b160dc96bf94f51dd26107",
".git/objects/42/cfd53b042571ebbf0874f3cb10d7dc790ac203": "ff9234879cf7a5b7d1393f2096f881c4",
".git/objects/44/7b1b235771e2e2e78dddda5c4c6b29d1eea55f": "5ac0adbaa315ba8600ba15133387e1cd",
".git/objects/44/ab305963f66a392f0415197681db0609169365": "a57ed4ec2f99d3c8f2f68e46f2c62f81",
".git/objects/45/19a13327b29f624b7015d6527e79d17f8f8265": "50d4629a9ccd0f9547cc450f0deb3e8c",
".git/objects/45/849ef89000d006738f0cf0000ca2a9432a327d": "148feb5af8b0597771058633e08159fe",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/46/92cf798a7818f2e0f1aac5c4c4611912f884cf": "abef57709ed155eb4e7ae91757abd846",
".git/objects/46/cf5efb3e0e8c816fa570c621583972f36750bb": "0942a74d0552ecae19f1e3bd4a90aede",
".git/objects/47/87f4b443398af711eeb50ebbd717ea89b21eaf": "a5a6eae12171b3082af6cdf3efd5068f",
".git/objects/4a/67d5dde989fcf261199daec3add4cc5ff28119": "1b84fdb3b70565e3d09be43524c86033",
".git/objects/4a/7c8945eef481184b6b8f398091feeb4cf3bbc7": "f41ee91422fd2c1a2749bfefe5e37667",
".git/objects/4a/961fb2933ed0c030e375e3ebeef23941a15f3c": "94dc0c93b6c435fc3959000e221364f7",
".git/objects/4a/b2871fe192d95e6873c3e49fa22a00f6d293ba": "f6bc20b602344816fee33dab5305e18a",
".git/objects/4c/68032d7879aa2b3987dc931ea7ed074b6eae25": "1bd75045eee8e7fd43a93d4a57683c6c",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4c/ec2a5a0f8d7e6cf1bca5f72a4287eb68a1fd88": "5194b0db08c24a42754cc368ecdb98c3",
".git/objects/4d/bff7bed0c4d5938dd79a8e18d0f679d23df079": "395707dc276f03d203cdf9fd3d2e639b",
".git/objects/4e/7b3727c12526de29340d39444ad00e1a615976": "44fe6063352ded6ad603f9d89ebd6e87",
".git/objects/4e/ec9e7a0b762b2e2ec28b0c9424f592c114b590": "46b1897de3e6be775f0867b6828c70c2",
".git/objects/4f/c9f5e6832a9f90eea73ffcfa77f49210d2cbe2": "5aa442cfc726c089111ba2e8a6d030aa",
".git/objects/50/4a5f7583ce8157943adcd55f02b9ed350fe7f6": "edd5b5b881e5cbf88bf7ad280345e48f",
".git/objects/50/656ada278a636ee7d35005bf3e075b75541305": "cc46e4ebf770e96f9ffde09294310c08",
".git/objects/50/714367b1e2a3f7af297206ef998ecdecd75d8d": "8fdce26a324a6be1a70290afb1caf3f3",
".git/objects/50/cce18fa6ba5624c3507db445693c5f7a38ba80": "362e5a4b9b100135795544b278b87443",
".git/objects/52/7781cdd95d00d70e721ee0ac6e896aa9da4a4f": "364a3368b3f492dc6e57b5e0e542af5e",
".git/objects/52/b63132a6290eb0a1d00f107c714f05b1ac8a38": "e33b38e3fead19ad43694916ee9ddada",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/783629ad3992ef04c2ac2961f4bd3d912e280e": "b8a19e0028126e991be9cba2c2573d92",
".git/objects/54/8afd33bf2f0f21f739cf0b4c5d912bedb4f32c": "1d13216cfbd275e8d13779d0959e78d0",
".git/objects/57/02f88e6576ce89e4c35b0c1484525c3b1fdc7c": "b379122725eb59860f485a056f1bf2af",
".git/objects/57/bf920ac6218af1fabc3201748e06539ca4ce68": "81499ef3feb0d2409fac268a5c592591",
".git/objects/57/cbc06fd0253d58417155607cc2f0f5b433d499": "992a1c29c7113418e13b565b3e56e8e3",
".git/objects/59/723579a91698bd16f87ecf87d81a366370566a": "41c632b0f2331b5b03f84a0555a2aeac",
".git/objects/59/b29c58c44679798d9e5117bf0f898ca7bd585d": "507aad8b30012acac52ce37749ef0c53",
".git/objects/59/dde1c449ed09e2aeccd03eb62872655427aae7": "025e95f96b0c8e6127530c729b8b1890",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5d/8ec4039e0fbb70c872172307a07c634bd81949": "8c9bf85ed8edd53d690e31a1138ed9ba",
".git/objects/5d/a6e76f35f6bf47b79fff0a984183d0140b5735": "f4108242b27cf2144a668b8630df80d0",
".git/objects/5e/cd9cfe34353d769420db5272b133a7094707f1": "bd4994583bff23d07683f95dd884299a",
".git/objects/5f/3dfb663497173dc56788efcfe8c6c7db757848": "69ea7889feee7bba29b9b972ce361f70",
".git/objects/62/380833b11600567d23e98c158c73ad4f9d5cfa": "50db6f07361266b4209842512036d53f",
".git/objects/62/420070826eedaf66334d1cf369766d319143f8": "fdd7d86a3c85892ee52426115be56837",
".git/objects/63/8e165e6a085753f97b6f8cdcf0095f72ae38f8": "5201af8b9cbe10941e125a9c3b4556ed",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/63/cf6db95de971614cd9b44a4b10a896481b9de0": "85d9d2d8ac2e3890f635b00fd3eb148f",
".git/objects/65/08e9faf64fa547db998596c3472e779dd6656f": "f138a67c99ccb5b7e05142941685ec89",
".git/objects/65/6f9edf6b5698d3629e2c67dffe9837c613a24c": "2514087c3dcbe86c2af55049512c591f",
".git/objects/65/80f7fc7cc0f2c7fc54e9593432a1ddbd2c1827": "85fa472d2ffe3154423301425c33f945",
".git/objects/65/8af219e98ab7976de91decbda8e26816d32c67": "eb2ebe4eb692b33cb935337a8da90286",
".git/objects/66/7e56a823a5e9356ea8309c6aa32069b6cad540": "56b462a4bdd33882c0e26988e9e654d1",
".git/objects/66/f286c2985fce29037eea264bb23acb3be3df1a": "55486b6ba7cabc69e964333f56f306ed",
".git/objects/67/8026c18e20fdfeb78ab6ebf00a8481c99a75eb": "d9e8f3667fbd37ac60e5ed3ff1b034b8",
".git/objects/67/8f42c54ef1909147dbcc26f09288da751ff199": "338656338d7896388ff36259dc656794",
".git/objects/6a/16ff877a69e1b58e64905c65a548a75fe3e36d": "099206423fadfb3c05ce40827b897639",
".git/objects/6b/e5e0806ded50d932c28f28451587e3ce43b6f1": "a18646f83db071d855c732579fa8723e",
".git/objects/6c/6476065ff961c261eb0a3c53acae85d70625d7": "8da2a247a629a1d989a6da504565d57f",
".git/objects/6c/d0ce6e22bb99ea2ccc353a8df04cbd0f5c433c": "a43b191c8781628b40c8dcb958c72fce",
".git/objects/6d/452b501f3a34530e3eddc87f7e6e4fcd3ff292": "2b363d54f159e6d197def90b156f59e6",
".git/objects/6e/ad9209b655260ca74f88c3a811e6e788c2ed80": "cf25d63497a6396b7d44500ad20d7dfd",
".git/objects/6f/17945c3a3521672eae7a3bf8a28b8dcd1718b9": "056cbd4b4ede859a3ceef7d392fffad2",
".git/objects/6f/3866ff1c6a5cd899449b4ec408fd355bbebc18": "4e1345abb20d797cef0bf06d4bad9ab5",
".git/objects/6f/66ff3cf4798d8ba90176c35899409e790fa04d": "efd554f6c78718b6f51a8fd4fee2b165",
".git/objects/71/42f0bfe0a4ce1ef37add86e7d80ec57dec783d": "44de57d266d83feabd169c313bfaaa2a",
".git/objects/73/b5091dfb3478b4669e236248db963a45fdb851": "89ef9c0e57b68c3d28974f2b9aa5d8c3",
".git/objects/74/c5bd5df39060c1457fb4400192514d8a6422db": "5dab3917610768ae285a4a17baf977b5",
".git/objects/75/e028c8229ffbae555ecec8f513cf4c9b7d7f4d": "a89d8aac3712bdcb6912ecf2e5c8e8cb",
".git/objects/77/a710afc99550df0c7212385dcf9e9ee5f54557": "f2411ecb864bd43da647d47d7bd9f1bf",
".git/objects/77/aeabe0fa14fa2190e09502c44a1a740e8674c3": "3bf7d41d55d314036f6b88bde94b3b0a",
".git/objects/78/36acd9a134e77eb6adf76cddba6354d844b4c8": "fa31655345afbab64e0d7a2d5a719573",
".git/objects/79/64da45c99e3644b9d7a10197ac9369f16cdf05": "a881dbb19752967b72975ca17b0a053b",
".git/objects/79/765a24a78facc622c9f8e92a8011be79a97dc4": "d47e58265424182187fa029c2699cab1",
".git/objects/79/f38c6801d8e23f2ca22e0f2ab702741acf4a81": "e68cd9dbbc6e381db5861f8e26693088",
".git/objects/7b/5251d5dbff2609f8dc54f8c99490e9c9e2cbaf": "2b1fede2049be99aaad8d5e97f8bef23",
".git/objects/80/b160b2e0a6164cf6fb27bf83ea50ae0580ba02": "ce40630cebf519fb145f273395b00837",
".git/objects/82/6b71c7b89a03beea1d1ad31bd21ca40a24268e": "6df8336daff3280aa2c328138f048a52",
".git/objects/82/cb9702cee9566d5e0ae76944380c3f8a3ea894": "7447ae2ebd1cdef1fb21e7a0364f3825",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/102d750607f3067dc695907af8c6e7ac46c5de": "57705125174fff8f847641a42b5599cb",
".git/objects/83/6dccfebc80be30b81686d6e61fe946e6b6845b": "819109af97ed905031d9894221567440",
".git/objects/84/4ff8471626ac556bc826a6527d80868cb5b0ea": "c6569143aa35be08b6259f6b79c9fa1c",
".git/objects/84/c29c62fc36e0be35a72febfbd0f80a8dcc9a81": "2eda3a0ec77d18c221784497eb6726ff",
".git/objects/87/124cfa8e496da500a598923a9311d50d55933c": "9b88d11b3eb29a3558a3c8e32d4dcec7",
".git/objects/87/a91afad977eca111d2fd86c1817e9af0b494d3": "5ccdca2dbfdf5abb490bed4a11a7d362",
".git/objects/89/8ed5d6ac131ca754d1c7f4ba34476f4caa7cb9": "5e150c99269ac846c1fbbf0267f06e2f",
".git/objects/8a/89ff15b9b46853ef1dd5e36ea3f9070f798da7": "024c5a2a15637cb642c91fe3c37bb893",
".git/objects/8b/02601abd54e99dcb14c4998e3665678a2a31f4": "141a2ab9888fa5c34c16facb48699b84",
".git/objects/8b/478c2278a3c09c81b732db6efced07ec9961f9": "94db12dd3b8babd4ae7f9aa95302a8b8",
".git/objects/8b/79a8b308f98dc347129359597004df6df97f6b": "0f281425f67ffc52c1159676e338dc98",
".git/objects/8b/88cc61c81051e16e1fccd26fc214fc47ba0363": "4cc482a3b8cc75833b53bc6dc87a75e4",
".git/objects/8b/c3a829b10a4892cef272efed51189efd2c1727": "108c996ce6683fd382b79a1905548dde",
".git/objects/8d/3733c1cae0c5ec22bc766a06eb840eb21aea0c": "7988be8c388aac09585d46ec0c266735",
".git/objects/8d/8104485b4d425f15e17f8732b3344cce24e5d0": "428d54ceac8c1e66f853e730838294df",
".git/objects/8f/334f6bc5ba64624ce8f032e6c11e0ed7b8419b": "b2a75025596994debe1bc08071aac599",
".git/objects/8f/86838058b45b9eed583d09481c8d887ee2c015": "9b182ec1ba64c57479b25246e72ed2b2",
".git/objects/90/2ebf2dd837c78a19954e4c99d7b9b78f095246": "a856a8d8b4071ee4a9e9da9256953b20",
".git/objects/91/0a15897452c9b27fcce73955fa67ce05ee9410": "1b6798124acf0dc67a5c67857c85fb9f",
".git/objects/92/55316b3f36d8f1d8d3c498894a0f0073187f87": "eef9a38bc0b5ecf062117367f9654565",
".git/objects/92/aae36a5d208d3db890f30e17747618187377fa": "2c0a4079c23e6fd6159f2ebd7db277a3",
".git/objects/93/51e835fcb94360da1d547491fc97f5e2f76a8f": "737aa6b43eb0ee37748a30610faac268",
".git/objects/94/77f7a6ba2c609fbfc65d528c8d41d61386fd92": "8e46edd431758272126054bbb7594113",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/96/70694ca651dfc882f9613b53d2129a860312db": "f28cd90d65333d4bc98aa9f8bedb9275",
".git/objects/97/a8d5583414612e4f3c51526fc559f1336f7b20": "d6c1f484c75ec8241f17b2eb2acbb1bd",
".git/objects/98/2bbd76f9ad5224f1dc087e80bdcd3fd8096784": "ee0ef68366f5ed3e3131c957d077240b",
".git/objects/99/53f46fddb7e4c99ab6a733e2bbb3c62750be40": "0ff8647d48f46862f511efaf94ebdcbd",
".git/objects/99/5f1d372c86df6cab2c41434eb63649d3667a53": "56e1a99b215fb471371d1e390e299538",
".git/objects/9b/2caf33ed4ea1627f0e87b17eb7d4727f2c5a21": "6442b1d26cf5ec356a85e3f4653b32c7",
".git/objects/9d/f5d7d6280223ff1d08c8f5c6ed4e254ac8614b": "6a60b438992cc9e308baa3ba47c26013",
".git/objects/9f/65b2632985d420249ef966cd21fcf50bd94d28": "b1179eb71e3a68fdc1bde56eb6729ad9",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a0/ed9c9c2c79b08d6dcd31d8f3c50649f69542c3": "8be29787d35623881f9665a147526dd2",
".git/objects/a2/bafcc60f838fce582b5b26427b462ce89d7b39": "ab56ac07cd7f9e59419c7ad0169eb39c",
".git/objects/a3/6f2e4a08413f1f4b7318f1ceb1df8cc4636e15": "370af704f45a2edd297192645522b0fe",
".git/objects/a3/9c645083b8691edb9a6cf3824c840b70f63326": "a4b5065314b927b63d1927a31def2122",
".git/objects/a3/a04d5998396f0df7428e5161d3df3cc5f5ce29": "21d6c6b42c9dd79d6edc2204ac9d33c6",
".git/objects/a7/66b4e24bd38ce721ca907c786fd57ddf513791": "9b87f132ca99e794e3834d5646185e63",
".git/objects/a7/9255bb339df50241c15dcc0f595c11797a32d8": "69981a0e8b9d3c5b060c06bd5441f9e5",
".git/objects/a7/e404c73b85b89138e41fb73317bfa35be5dab7": "deee4fd8726f48b5cd4cc8a55c999e11",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/e8033be26fb5c9ed4a0baec06aec4b001dfd5a": "c275d08702cd2013caa3e8e28b0000f9",
".git/objects/a9/3231a86fcc9db78d5dbae75f70a04644a25af5": "830b4fb67b425ab2d19741b657e483ec",
".git/objects/a9/638bbcec62f469705143306df1497618cbbca4": "80a685d73974ff8a949c058b1c7837ca",
".git/objects/aa/2b48bd7526f025f39e715de7d6e6fa50a7f72b": "11952e7d93934ba1c95df5cf5a916c00",
".git/objects/ab/580ff570cbcc3dccd7a1fe4c08624d52e6e465": "8d2e4dd7e5ef77aeadb758f503a66368",
".git/objects/ab/8ef99d6cce496301b38165c101ab76c4a07af3": "02805f158ee5a38b4530875222ec026f",
".git/objects/ab/c22979ed8acc06f1ad739262928b30643b2f9d": "a569783b2391c3b616df7f923192548d",
".git/objects/ac/c3194fdfcc4e331e1e8672b5660942e5b87cc5": "cd25c64ecd5f9c24c5a2f8485e392f39",
".git/objects/ac/e420ddff438a45e5b3ecc299a8eecb7cfc402c": "4b5d0d3b69b42f8e99731a003537c79f",
".git/objects/ad/43f865546f8c68c6ef3c52a03886a3beaeb760": "b9fdbc19e9b0c75d3b510b80fd99b708",
".git/objects/ad/fa404c20c935df1f7be383d4e0df446fe44c67": "1d5f26425578fca33fd3e7c371ece993",
".git/objects/ae/29fc827851e39ea42c2d27896bc306080ac87a": "4e4180cb03d3fb7bc013cd4ddb4274bd",
".git/objects/af/f9c4fd06661a29c9cab9e71659bb3022c93e0b": "11f3e71b6423a45ad707a3a959271177",
".git/objects/b1/7914b07e55dde77dab728b8350e9ab4b28dfe2": "0af0f5950bc4823c50ca3824343d89bb",
".git/objects/b2/1aa3fcc1a5c26363e0ce18f97ad1dd77714048": "64d4b4028e9a319c5428228156d9c4a3",
".git/objects/b2/e20a40c2db823d604836d826d65d2ccb5d3584": "0b0608248e8b05ce9034ad78e64173e8",
".git/objects/b3/e9f376780ad4b9152df5f96bd4d4b6d970e331": "cbc5414760df6c50a4f180fdf8e6f676",
".git/objects/b4/019189e62db7de9d1fb24c88f14e90bff905e4": "50294e9b9a99f27b74ffdb355769a881",
".git/objects/b4/75e46cb6901d832d56dd4fd768fc4100934239": "884a44c24a3aa1e6dc570a775f61d84c",
".git/objects/b4/e573e594eecb385b556a2f839e66a095a76b14": "1e61900bb96e99ec1e0e7b31dc941e65",
".git/objects/b4/fe68a176cf92f0849e8795c8d9991a2136db91": "15c6b4cbdd3bf879f9af3dcacf849b52",
".git/objects/b5/1a3f54c6fd9dc9374833721a937ea89b2d0662": "014c4edf19ea193bee00242855663d7b",
".git/objects/b8/2affe466363539bf829e0b141e53f6d4cffe39": "a5aa29d2bad7d1e489fc86fa042a3616",
".git/objects/b8/fc671da6ac4e7d1ae751234cfdd4dcb9c42a4d": "28e9411a9165ed9abb934bfcad3b38ed",
".git/objects/b9/133b54ca0a7cc4801c8a692df421f1a91503fd": "044f181c26336e1d262ba357f10808aa",
".git/objects/b9/a30f0ed28f96bed26b4fc29580e7831eb1b6c4": "2cbf4fe17ad754f026e462139eeef48a",
".git/objects/bb/2df4691c79025fe320b0a081962d7eb8c1615f": "1d51757f6888716831379a7ce9325ad6",
".git/objects/bb/3423c8718059bad1905091ec8c551f624db62d": "88cd06231125bd53a9f984c612a0b2b6",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/bf6baa380d53047ebd8bb2a7b5fda08b3c5df2": "c4d89de5879132d0098a57931b87472f",
".git/objects/bc/2cccd45c31faaac62066c9c87cef30839edc40": "808f29067d0302ad5942078611947fd9",
".git/objects/bc/ab55de317d5c45a3304c0200875b672538a297": "5332ffc65a8de65b8ed47e51f4c2c8a6",
".git/objects/bd/7878fa56fc2f9864e9c45f12e7a4768234a465": "d8989c409563c26fc8b35b7c757f32e7",
".git/objects/bd/bea01aa9958bb4b8b8f7485710fd8f94a4507b": "4ac955cd0ffdab4b25a12452a4aa600c",
".git/objects/be/21e975e71bca5b2cee55b9416b35e6c16eec58": "a170319172c4a0692924956ab50fcf3c",
".git/objects/be/3d91d139301f6c4a6b3ace2c6e868cbaa82212": "5a5e0903dac582c3de388cbc1fcecfb7",
".git/objects/bf/5ca5be96ecea97505d487ecb3ebeb1131b7c0a": "1303b7bc6333b9804b7a59a3322720cf",
".git/objects/c1/2773100bdb8a61352db018e88b309c25c281db": "7e84d00d29de824876a98dbf95dac9e2",
".git/objects/c1/d556ac955005955469f28e24c8c08d2e26d72d": "be33534017c362d7c40dcca55bbca928",
".git/objects/c4/6317508c93018a3e65515143e24abd77be2bee": "6bc8c5f37256bee68b6b59297a858da6",
".git/objects/c4/7a63b45b60d74a6d5c9e408f6675fe8a87a919": "7284cca20da4d783cb46599822c9c932",
".git/objects/c4/88bc0f5afb436461748fdafd938d85f63a5289": "01cb8a1d3cbd6dc694b85e00c2748f12",
".git/objects/c4/daf787cb60911d04bae1a4a21156b43d943231": "326e0079f607f8c4c05b635e57d6ecc2",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c5/aca1f11b34e47cdbdcdb0a8e621f40de78b20c": "3f75e4160f447fa90457c3a5e23744cb",
".git/objects/c5/b707b5a0af1f8faf5b53d35127fd8c24faf36e": "f3baf36f3142c23cf02732d106af5ec5",
".git/objects/c7/0b5c851c842d47742e763288f37655560dded7": "6442be9373699603432ef1c3d4665305",
".git/objects/c7/0c9cfb9a578651828d252aab5a9b8d26dcb753": "f39a077c23f37ef12aefe4cc96b61408",
".git/objects/c7/8b6e28938f7715ec15ccdc36fe0987d35f2b4e": "7d456ebc0764a9c4fe84cc805173a5b7",
".git/objects/c7/c19bfff60502a2579381975879e75943169367": "c96ade044a3b9517ad01f4041676d44f",
".git/objects/c9/f3611103c0bfe341055952a5a78fd11742cae8": "6f886960987e42ebccd084e403f7f965",
".git/objects/cb/50d4aeb784bb9e1df232ddf93240f2dec933cd": "f421726e6017950d74fe321b4ff227d1",
".git/objects/cc/59b31c1a624e67bd1a094ded3aa14acb28a0ae": "617d9c3ba1cd2d862c7201500de34509",
".git/objects/cc/80a12547b62122ccf93656a59ae323d1c6e161": "6021072fa723240884354593c100894c",
".git/objects/cc/a0f0facf08276c8d8eef17bc07b420e850c0cf": "95d2fed6429281f96b41fd226bdcc140",
".git/objects/cd/6950a471bc230ec7bf8721ebdb97cab08d88cb": "c9f44d052ce8e0c1ac1a44be5bb9f6c9",
".git/objects/cd/d7504474ca3e5427b03b44a8252bd8209fb793": "ca145adbbc3038d6d781d073da8a3a85",
".git/objects/cd/ee84907fdb9095ab816af876998c27e3a8ea54": "d426af6c0dc09c36772c599965f9c6d5",
".git/objects/ce/bd19b8f59314f84309ec0dae71239d13e31595": "12a000a3fc2c23ca06963c7aaf6740a0",
".git/objects/ce/dad1e8ac5298683d14dff5353ad7c658692ee2": "f0cee5cf7eac32562aa24765f9579f0e",
".git/objects/cf/13215f947eb72b4bbea8b432f13f20d1cc0517": "43bd78022db3483451b9d9eef7748e61",
".git/objects/cf/8fa9813cbb79a724cbe9b0dc1d50c3c7150bc1": "366eb60fc784bb4221b949c10cb137c4",
".git/objects/d0/fb2caf99926567306d1d702c1222bb28c1fcc5": "5c677f7aaac4b03eb15f0f7ec9a2f060",
".git/objects/d1/18266866ed94441b902050b0f814c784afaf5a": "88c308a5d1d25449135ae208445b5ce7",
".git/objects/d1/6b3e192c29ccd8a1484438874d9b643cd894c2": "a6f88b99343d24cbb478fe651e8f8496",
".git/objects/d2/ce5eb8eb308c7de6ca8fea5dee9e1b28c26a4c": "76a9ad5f4a573e85efa097d6072b1de6",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d3/f39ee5165a4bfc68814f72c394b10229e0f94b": "9882b60c5a0f004f3472097c2988f7a5",
".git/objects/d4/5302b2c80dd08a9a8e19eb2cea104662c6ee25": "755bd26398d3428e8d374612d915e8f5",
".git/objects/d5/0ba880f99f63efa60eefeeca9a5813dfb78bee": "deccd1624eca6a23eb7cd5ca8b091aa3",
".git/objects/d5/7133ca2eb189078c43ff64d172c2765a588721": "384d11f064cfaac064bce4329962dc73",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/2ffb6b556dd1b11f3e865821aa7b8742b3c19f": "8cf483039f6563cc7a8adc90ed971910",
".git/objects/d6/e45d65b42cc7e5edb9e4928b33c02b7205a224": "617e3374ce5d3430e5f4c15a5797e177",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/2e27ca7d459b0074b74bc69443da7d44c96a2b": "7bad7f594c1ac6aff1ac7c577deaf7ec",
".git/objects/d7/eb71789ecd4bb77417ddebebbbb4abd5aca4f2": "e5e893ba7596bb6a5a609a4c24d27049",
".git/objects/d7/fbb18565bef02a84f806cb880001eefd8ad1e1": "0dca3921ac63c3e139b38e0ad36c8f64",
".git/objects/d9/1126d5834613da32f6dd91a681525c97055be9": "e26dbb66f2b2d4276dc318bf164524d9",
".git/objects/d9/954220e24f577346ad6502fa3ca1cb60126e49": "1523b18f735ff559803066c4a84ace06",
".git/objects/da/6f478fbdf88821b9e0a6c2a5949d88c6d2f081": "da4e7d59016e37890a1153e5d3727d2c",
".git/objects/da/c26acbe6fea6b51622bbc43189258b569b5665": "9dd40ebd3506155f1930a5bc549e2cd2",
".git/objects/da/c8067842db4ff7d14b4da0c6ff8f5183d5c22e": "cfc7272834c0a9778702d9b5349ad745",
".git/objects/db/3a22287b2330e37a4e67003c95bcad1f98eadd": "e9e3625a8807784eca43c926000c246c",
".git/objects/db/d79a3a67c0252da96a8c5ca029467ca41bdacc": "b37bb4d582b48df398e63671cfe57e50",
".git/objects/dc/3cbd4cdb8a6c2a480873faa30e6f119f031d78": "657efe48c2c265c14a95b0fe429c5ad9",
".git/objects/dd/99ee9f9cf4ae91b65367bda341cd246e689105": "32f34c62d35e2b415ad2fa168f056691",
".git/objects/dd/db31e74e33cca555d465985c00340efecb47ca": "ae3e2d05c342b6d18ee5c0f066e9c313",
".git/objects/de/0757a463182f40735866fb31591c1dc87d3ac9": "7a7e325cddaca175366226bf7bc5e93c",
".git/objects/de/17a57cd88f7d468b5ba58562c67c93bfb62cfa": "09c3fece8faa1d652d35f697a067b40a",
".git/objects/de/9dc2c2fb4ebe76d2c7e8cb235cbcbc1cbd9634": "e5da6a563f1925f931a2a0810d59d885",
".git/objects/df/2d75f9326caf961a1b668849d57c1b9b7e4e9a": "138ed16ceef21f13c5f80674c304c797",
".git/objects/df/b6eac1e96cf2497c87573ba9cbfc02ac3b8d98": "54a743945f216cb28308a89dff9282c7",
".git/objects/e0/2274de642c32d10d13e24f0afc76eae5b35b85": "5a8b53ff811d80221f9dba869abb3c09",
".git/objects/e1/5e9545bfb539bcd2cb22e68c4b0ce9d443ef26": "16866ef40815031cbb02cb8a0740e155",
".git/objects/e1/8f219d186ec3153cfc0e8ff6b8a2412f4903dc": "f9623197c189e0eea4076fe52677a330",
".git/objects/e2/32a0b688424e220e188e9a146ba42d13c8f847": "05ff57a8de0855a527cf7f67b14e1c43",
".git/objects/e2/4a14cb3c5adf2a8819681bf2d88f2e23032744": "3d2ec7184007cff3c5657472cccdb60d",
".git/objects/e2/d29f48f4713f3e3cbcea31765c33f198bcb6ad": "a70e321c8778c877bc6ee12cb1f27e05",
".git/objects/e5/c4cb829c885e9e86b91064d1f5fbecf476386b": "8b41a810f35008d622f7aecd8ca69df8",
".git/objects/e6/513b086c9a5f384e9f7d18132207aa14ee3e2b": "fca12e5cb7b804a2f276544e3a79b777",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/281bdb898f2aedb1e470e595fc4c3731e64fc9": "33a3bc46db8dd2af3d56bb0971505748",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ec/d8f2d8dc32a814f29864a075cc15698ea62f84": "a7812ebee761a4a770996b22c049624d",
".git/objects/ef/2b3e7a33b903184aaeca116e81a19d077b867f": "bdb5f0abadb15f4d3bf1907784d9a060",
".git/objects/f0/454cbcdb659b8a9dfc2ba1469406f5fa6a99c0": "0955e84470a285e17cf407db297c3850",
".git/objects/f3/74dbc1bf2152f0d0272a0b4eb26f158e4f500b": "18010660d026a420d502ae8d042914eb",
".git/objects/f3/864d1e9bbf989bcce8a06ad6b49ec75954057a": "5ea62bfbcf6138db352fd349d77deee3",
".git/objects/f3/ad42b9207bc789b67858a39ead1368067d6ea7": "3e4dc3bd99a1d24d7fda7b18cd442260",
".git/objects/f4/d03488c565c5b3bb3cc47364db7f4b8d4e7c96": "89a4ed5b7690f5a01fb4ea9a7dc1e9fa",
".git/objects/f5/2ff3c1f5b3ace2709026e460f13a74bf0f4516": "1c5a09094f3325ce14a3d03ebd356b73",
".git/objects/f7/aa143acd887f699451af48131912208cce1741": "9e734551379a76759d32320a9d77e938",
".git/objects/f7/d76d937393c0442a67ead0dc9c16b21b6cf17c": "cd4645c84b0a55b6648cf79ed9612987",
".git/objects/f8/51d1df490048a2627dfb840594eb21cc7db1bc": "7a62c4ac46b2e418a3d106a1cf9aea8b",
".git/objects/f8/9512fdef138ff11b1b53a6e45021a276ad9b7f": "618f73a506eec2b364636be424c8c7c3",
".git/objects/f9/1deb241f272d09c36f7333bc0fa84106fdcfd0": "3cc22af223940390589113f578995a35",
".git/objects/fa/be7b01f6b344a020e51c81843c9805932587a0": "0abd6602d7c760cea4ef22c51d8b7222",
".git/objects/fc/72562b8504e50236832f2362085aed1224cf06": "70a572ed1da81d3d6ef2480493f589e2",
".git/objects/fc/847ac50b95d0bec2e19e7b8d051617cd61df38": "72f455081251ce8b5a51837ef1d41c12",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ff/18201d08c0ae036a1b8758193823a8ea1f7829": "ab52fc49be8a646c8771d46353b983db",
".git/ORIG_HEAD": "d8db3cef048779ac90c71ddf630c8069",
".git/refs/heads/main": "d73bc70e5c6380816ceb05093ee7e827",
".git/refs/remotes/origin/main": "d73bc70e5c6380816ceb05093ee7e827",
"assets/AssetManifest.bin": "b3c9993ec532cc20afc9b0db05a414cd",
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
"assets/assets/social_media/rumble.png": "ac190ef9e408a63f854a7003ee8775b2",
"assets/assets/social_media/tiktok.png": "a3352efadc94a5ab0d11173dcaa7d7a5",
"assets/assets/social_media/x.png": "69d4bd7aea0945ba7ff5e77d1752a5d1",
"assets/assets/social_media/youtube.png": "2b5270fc7e50270749881e91da72e984",
"assets/assets/tos/tos_app.txt": "4bd68be7f72008e16b3e69b30e1a2d9d",
"assets/assets/tos/tos_payments.txt": "956c5ddbaaad73154fccda6f540ac44a",
"assets/assets/tos/tos_web.txt": "3b84b54d0e81ccc3b565d4313d19ee6b",
"assets/FontManifest.json": "08e6c927a377fef4ab8bb76db856982b",
"assets/fonts/MaterialIcons-Regular.otf": "20b90a7950f71ddfdb868da1bdd427e2",
"assets/lib/env/env.g.dart": "d75d402efa81f329849973c3797ac780",
"assets/NOTICES": "e4e38265191a5e1d33c3045273083bcd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
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
"index.html": "dfd84562b85c049a59051b78543525f2",
"/": "d866de262ccb8d90ba2e88df0c29915e",
"main.dart.js": "494650b564cf7da550434baeaba2007a",
"manifest.json": "4a13449471cb4965f6336dcb5f980eeb",
"OneSignalSDK-v16-ServiceWorker/OneSignalSDKWorker.js": "bb342b01d13bebb317c67b881692efd3",
"payment/cancel/index.html": "a5bdebe29167c20b3b4b0c8071c4ef9a",
"payment/index.html": "d7d2ef228729ddeda3710fa6c06ed6e4",
"payment/success/index.html": "d866de262ccb8d90ba2e88df0c29915e",
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
"version.json": "d88faafed609ecde21a995c53636e1c7"};
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
