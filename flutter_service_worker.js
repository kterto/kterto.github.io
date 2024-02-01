'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4729c9a6bbdb6ea4b947acabef43866c",
"index.html": "f92cbb81c22ced89a7869b9a9e141f5f",
"/": "f92cbb81c22ced89a7869b9a9e141f5f",
"main.dart.js": "9d82f1bae068eb2e4a541f94622427af",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "98f6c0ceffa5c7e1481d09d1febeaa6f",
"assets/AssetManifest.json": "1233709b30be95050f715484ac1e77e9",
"assets/NOTICES": "0790315df7c37a1484717aa25bf46d6a",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/CHANGELOG.json": "cc6bf5eb410ea4c160049f1344623a16",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/lotties/analysing_leveling_test.json": "600a48ffaf12f952ebf7e4eb3eb7b5ea",
"assets/assets/icons/oab-de-bolso-white/2.0x/oab-de-bolso-white.png": "cc9e854c20634c13958e0e8bbf9c4c89",
"assets/assets/icons/oab-de-bolso-white/3.0x/oab-de-bolso-white.png": "ab4c18826ee08a78bf6e8f9fc11000ae",
"assets/assets/icons/oab-de-bolso-white/oab-de-bolso-white.png": "2421cff444fec244886a086143e6bf24",
"assets/assets/icons/filter-line/2.0x/filter-line.png": "b97c55d5ee01734f161dbda2a438bfd3",
"assets/assets/icons/filter-line/3.0x/filter-line.png": "9b624fb1128698f49b3ce31463f18081",
"assets/assets/icons/filter-line/filter-line.png": "d64ce0b1b295c309d3d9de83c267f96e",
"assets/assets/icons/thumbs-down/2.0x/thumbs-down-solid.png": "9a0e35a751995e4c589f6c96f57004f1",
"assets/assets/icons/thumbs-down/3.0x/thumbs-down-solid.png": "2407ff8872a722ee18a79a78914aeb39",
"assets/assets/icons/thumbs-down/thumbs-down-solid.png": "01a591761ba8bf21611de2418996a021",
"assets/assets/icons/home-second-phase/premium-access/2.0x/premiumAccess.png": "487301d2ebaca104f267c9b246515b6a",
"assets/assets/icons/home-second-phase/premium-access/3.0x/premiumAccess.png": "93cdf8fef133e84458aab9b2c1ec8fa0",
"assets/assets/icons/home-second-phase/premium-access/premiumAccess.png": "8f3288029e1ec467d017b8d540b33c9a",
"assets/assets/icons/home-second-phase/phase/2.0x/phase.png": "fc2cfae20776d5d99976bd1616c8f33c",
"assets/assets/icons/home-second-phase/phase/3.0x/phase.png": "4ac82ed11c6ffefcfd86b86a0d75984c",
"assets/assets/icons/home-second-phase/phase/phase.png": "ed9e15f02bbc96b8ef2626455e5d9029",
"assets/assets/icons/home-second-phase/materials/2.0x/materials.png": "0f42d16b88dd59481448c326bbe193b6",
"assets/assets/icons/home-second-phase/materials/3.0x/materials.png": "cd238542e567b8cd8a72b285fdc6e8f1",
"assets/assets/icons/home-second-phase/materials/materials.png": "b5185181b66b123c183bbed2b551ff0b",
"assets/assets/icons/home-second-phase/video-classes/videoClasses.png": "639446d060abf98deec2099861479825",
"assets/assets/icons/home-second-phase/video-classes/2.0x/videoClasses.png": "6397b20d38a58365af644a4d64069cef",
"assets/assets/icons/home-second-phase/video-classes/3.0x/videoClasses.png": "317a24e7a9700c022cab7576cc0d5f32",
"assets/assets/icons/home-second-phase/vademecum/vademecum.png": "6a5d60c8c32a6208f2740a3b0652b1c7",
"assets/assets/icons/home-second-phase/vademecum/2.0x/vademecum.png": "721380abcbcc375dc02448ba8f8759e4",
"assets/assets/icons/home-second-phase/vademecum/3.0x/vademecum.png": "3b50246e34b8c57b004c817acb682a9c",
"assets/assets/icons/home-second-phase/tips/2.0x/tips.png": "590afc83f153bf32be49ae71c4bbca48",
"assets/assets/icons/home-second-phase/tips/3.0x/tips.png": "6c430f31e8f8983028ca13de29da693d",
"assets/assets/icons/home-second-phase/tips/tips.png": "3bc0eacd6866ca9bb4fd0a8e6714bbb3",
"assets/assets/icons/home-second-phase/questions/2.0x/questions.png": "cdea28cfa0d15e21188e04906c206df0",
"assets/assets/icons/home-second-phase/questions/questions.png": "a8e42fff1b3ca684326564ef6ad42a0e",
"assets/assets/icons/home-second-phase/questions/3.0x/questions.png": "1c1c333892361cffecd883e041745b7c",
"assets/assets/icons/new-badge/2.0x/new-badge.png": "1b68922fb76a4e3f409701a62187a2fe",
"assets/assets/icons/new-badge/3.0x/new-badge.png": "09ebb89c5ac303e9b05e761807b4c79c",
"assets/assets/icons/new-badge/new-badge.png": "55ed67d176417bb8d2d53bbc1a4926c9",
"assets/assets/icons/arrow-right-line/arrow-right-line.png": "c8d085a1d720f2335796764c8386620c",
"assets/assets/icons/arrow-right-line/2.0x/arrow-right-line.png": "63f1caa5b60a2916af14327c9c17b5e6",
"assets/assets/icons/arrow-right-line/3.0x/arrow-right-line.png": "0f0d8dd7d052aaf814de503f7af6ccd8",
"assets/assets/icons/onboarding-app/premium-access/2.0x/premiumAccess.png": "6711304d8423c1bc32075e0add420902",
"assets/assets/icons/onboarding-app/premium-access/3.0x/premiumAccess.png": "d65886c9f49c5a985b79e551c1cca555",
"assets/assets/icons/onboarding-app/premium-access/premiumAccess.png": "8357f046e7d58d73c88d0d7bc824e06f",
"assets/assets/icons/onboarding-app/phase/2.0x/phase.png": "1815f08c4a55de41dad01758ad600f39",
"assets/assets/icons/onboarding-app/phase/3.0x/phase.png": "821727110f6f026bd229849fdba20e2e",
"assets/assets/icons/onboarding-app/phase/phase.png": "d7bfebaf9b3b5f8b851f2ce0ae849616",
"assets/assets/icons/onboarding-app/materials/2.0x/materials.png": "349019ef491f2618df2cdb19dd192619",
"assets/assets/icons/onboarding-app/materials/3.0x/materials.png": "e36fbf9a2596ee5ba78a1a6576dd248c",
"assets/assets/icons/onboarding-app/materials/materials.png": "0cc1fb1e281f702ddd3f5fb487d7dc0f",
"assets/assets/icons/onboarding-app/video-classes/videoClasses.png": "b670555b33c6fa66d75affc4e4fca947",
"assets/assets/icons/onboarding-app/video-classes/2.0x/videoClasses.png": "ceed7d99687fce49b1c21f4dacfb5969",
"assets/assets/icons/onboarding-app/video-classes/3.0x/videoClasses.png": "020a7638c3cb8acb643bf6fbb069b13d",
"assets/assets/icons/onboarding-app/smart-coach/smartCoach.png": "fb42932ca5e90d6ba2c7bfdf55a80929",
"assets/assets/icons/onboarding-app/smart-coach/2.0x/smartCoach.png": "a6720f7f3708c399ed7d4565d520f5d5",
"assets/assets/icons/onboarding-app/smart-coach/3.0x/smartCoach.png": "91044aaef2dc21e44a9d87fc22e462dd",
"assets/assets/icons/onboarding-app/vademecum/vademecum.png": "19c8c2c212df15dbf806de489d61cbcd",
"assets/assets/icons/onboarding-app/vademecum/2.0x/vademecum.png": "c9dfd1bdbb788e63d21280a6ffae9cf2",
"assets/assets/icons/onboarding-app/vademecum/3.0x/vademecum.png": "d798aace956cf1c04569e4a420af02d0",
"assets/assets/icons/onboarding-app/questions/2.0x/questions.png": "f5302749cca807c44be87c7de2f4d0a1",
"assets/assets/icons/onboarding-app/questions/questions.png": "e42d20493200544fe45aa9020286e96a",
"assets/assets/icons/onboarding-app/questions/3.0x/questions.png": "c4479ff82d3d0a9dda98a332b90b3a8b",
"assets/assets/icons/rounded-arrow-next/rounded-arrow-next.png": "522ae2bc24c3d42f8a467581b5bcbe40",
"assets/assets/icons/rounded-arrow-next/2.0x/rounded-arrow-next.png": "2581da2197cfdb96e86cba318711b812",
"assets/assets/icons/rounded-arrow-next/3.0x/rounded-arrow-next.png": "db3e23e7afaa6e1e2ab92eb022cb95a0",
"assets/assets/icons/smart-coach-onboarding/fourth-page/2.0x/fourthPageImg.png": "1f3674a4c5bb7ff3c49a282fb85fd4b9",
"assets/assets/icons/smart-coach-onboarding/fourth-page/3.0x/fourthPageImg.png": "28f1289f300f03d73518c6ad5134ce18",
"assets/assets/icons/smart-coach-onboarding/fourth-page/fourthPageImg.png": "9c0248002f824b91f446365e89fa9d77",
"assets/assets/icons/smart-coach-onboarding/coach/2.0x/coach.png": "1f36a3540cb259042be4fc39ba767841",
"assets/assets/icons/smart-coach-onboarding/coach/3.0x/coach.png": "77d3151110a59422bfdac08938defeb3",
"assets/assets/icons/smart-coach-onboarding/coach/coach.png": "a668a3e435d2173fab8f4f263220d6b6",
"assets/assets/icons/smart-coach-onboarding/second-page/2.0x/secondPageImg.png": "b2e99702837cab7dd4104afdb5d923ec",
"assets/assets/icons/smart-coach-onboarding/second-page/3.0x/secondPageImg.png": "895913f8535d63346edd3fa8d47ca211",
"assets/assets/icons/smart-coach-onboarding/second-page/secondPageImg.png": "fcee5cc1ed593a78212252a9b435fe38",
"assets/assets/icons/smart-coach-onboarding/third-page/2.0x/thirdPageImg.png": "2664b2a56b39b3a879fd31c7e685873e",
"assets/assets/icons/smart-coach-onboarding/third-page/3.0x/thirdPageImg.png": "932775028cfe67fd6a72e6aac608e1d5",
"assets/assets/icons/smart-coach-onboarding/third-page/thirdPageImg.png": "3fc135cfbb9abeb7b6dcf4836a143d84",
"assets/assets/icons/alternatives-icons/alternative-correct/Correct.png": "7cd5cd0e7b02bdd313ace00d1b26676d",
"assets/assets/icons/alternatives-icons/alternative-correct/2.0x/Correct.png": "34d29f3ab4748281e92e94482c9f5902",
"assets/assets/icons/alternatives-icons/alternative-correct/3.0x/Correct.png": "85c4e65b7438901fe0a617a909baf8fa",
"assets/assets/icons/alternatives-icons/alternative-d/unselected/2.0x/D-unselected.png": "0474c48f89ce5deef8b61579fdfd747f",
"assets/assets/icons/alternatives-icons/alternative-d/unselected/D-unselected.png": "f1ced96d5275877535c3815f6bc47e7e",
"assets/assets/icons/alternatives-icons/alternative-d/unselected/3.0x/D-unselected.png": "5b1335d473d1104f0ad6eeb30cfce409",
"assets/assets/icons/alternatives-icons/alternative-d/selected/2.0x/D-selected.png": "bb3ffe9460e204dbe2391fc785c30157",
"assets/assets/icons/alternatives-icons/alternative-d/selected/3.0x/D-selected.png": "ceb61a55065b188a1cd3b02274e4f906",
"assets/assets/icons/alternatives-icons/alternative-d/selected/D-selected.png": "a0264aaab314b51a9b072883325cf67a",
"assets/assets/icons/alternatives-icons/alternative-c/unselected/C-unselected.png": "dc7ac6969e7eec10c26f2f4e52dedb33",
"assets/assets/icons/alternatives-icons/alternative-c/unselected/2.0x/C-unselected.png": "a97ba9af3f153660b4c39579cadb1a29",
"assets/assets/icons/alternatives-icons/alternative-c/unselected/3.0x/C-unselected.png": "fe2e6b71570f9cd2052951ad5b31638f",
"assets/assets/icons/alternatives-icons/alternative-c/selected/2.0x/C-selected.png": "127561f44715ace0387dc9bc5b9cc65e",
"assets/assets/icons/alternatives-icons/alternative-c/selected/3.0x/C-selected.png": "7c2f90c88e6ec0ddb2bbcdae4faeeef5",
"assets/assets/icons/alternatives-icons/alternative-c/selected/C-selected.png": "193a893b853a30cd3a5645a14683ccf1",
"assets/assets/icons/alternatives-icons/alternative-b/unselected/2.0x/B-unselected.png": "d98f57dc191e5d0f769ec44e5db9ce21",
"assets/assets/icons/alternatives-icons/alternative-b/unselected/3.0x/B-unselected3x.png": "fd520d405c5e3aad6eb513c2d9d3dec4",
"assets/assets/icons/alternatives-icons/alternative-b/unselected/B-unselected.png": "2554ad3661e311f6a71db49414438c67",
"assets/assets/icons/alternatives-icons/alternative-b/selected/2.0x/B-selected.png": "6ee95c1d205c044ff7935613f9cfa774",
"assets/assets/icons/alternatives-icons/alternative-b/selected/3.0x/B-selected.png": "2ff5174cfab016263d2fb6a7d5c94d0f",
"assets/assets/icons/alternatives-icons/alternative-b/selected/B-selected.png": "8d622e52e9adb46e5c979f61c56160bc",
"assets/assets/icons/alternatives-icons/alternative-wrong/Wrong.png": "4d4234dcf95fcda1c65690af8ecfbf9c",
"assets/assets/icons/alternatives-icons/alternative-wrong/2.0x/Wrong.png": "b5f68a7d5ee8b6f6a8420ea1533d5868",
"assets/assets/icons/alternatives-icons/alternative-wrong/3.0x/Wrong.png": "22e469a475559a0d84d82a6b66a7ee83",
"assets/assets/icons/alternatives-icons/alternative-a/unselected/A-unselected.png": "80beda71a4c876fed350c26996e05b69",
"assets/assets/icons/alternatives-icons/alternative-a/unselected/2.0x/A-unselected.png": "abcd4de90f8105f5602c12c4632b87eb",
"assets/assets/icons/alternatives-icons/alternative-a/unselected/3.0x/A-unselected.png": "5fdc6e13960826c1faa8f93fc2f6df7d",
"assets/assets/icons/alternatives-icons/alternative-a/selected/A-selected.png": "53fba83c35f363464800a66604bd4df9",
"assets/assets/icons/alternatives-icons/alternative-a/selected/2.0x/A-selected.png": "1fc7efa16840cb599da5835b4a61c719",
"assets/assets/icons/alternatives-icons/alternative-a/selected/3.0x/A-selected.png": "42ab0d297a4c088781d24afd9147c468",
"assets/assets/icons/bottom-drawer-text-video/bottom-drawer-text-video.png": "3062f2862dbe6bbf0f254d04e72ef82e",
"assets/assets/icons/bottom-drawer-text-video/2.0x/bottom-drawer-text-video.png": "ddc5118d98e64215498f19296dc82f52",
"assets/assets/icons/bottom-drawer-text-video/3.0x/bottom-drawer-text-video.png": "b4008b545bfa68d5115973983022d0d5",
"assets/assets/icons/social-icons/apple/2.0x/apple.png": "7fffba55b7f8ce6f18984f36ed84a857",
"assets/assets/icons/social-icons/apple/3.0x/apple.png": "f303ec60c540de0854b69d234ef58bc4",
"assets/assets/icons/social-icons/apple/apple.png": "a24b439696c5a1d49d930288b452a726",
"assets/assets/icons/social-icons/google/2.0x/google.png": "11b8082936f64661efcae2fd86241182",
"assets/assets/icons/social-icons/google/3.0x/google.png": "9cd42e25ad106191923bd38ba69e4d7b",
"assets/assets/icons/social-icons/google/google.png": "9b1cd19263c3ff4dfa85d66c47758b38",
"assets/assets/icons/social-icons/facebook/2.0x/facebook.png": "5449a967ccbad8757aa82974b880cdbf",
"assets/assets/icons/social-icons/facebook/3.0x/facebook.png": "c30a4350a70f8de2113ad7561779c9bd",
"assets/assets/icons/social-icons/facebook/facebook.png": "45a15e263c3705ca23798f1bbcf05fec",
"assets/assets/icons/trophy/2.0x/trophy-solid-1.png": "65f18e0a04c46c7f907edb414518ba73",
"assets/assets/icons/trophy/3.0x/trophy-solid-1.png": "156e5f2c7e3706522a95eca27eb4642e",
"assets/assets/icons/trophy/trophy-solid-1.png": "3e2cd929892eee495fbc0abbaba305e1",
"assets/assets/icons/premium-icon/2.0x/premium-icon.png": "c499154d8b5b4513e5531a92e3b66fc8",
"assets/assets/icons/premium-icon/3.0x/premium-icon.png": "3671cdbbb71573a96b5b874543d0e952",
"assets/assets/icons/premium-icon/premium-icon.png": "366f6b3ea918f4b293bb61755296cc9e",
"assets/assets/icons/bottom-drawer-legislation-associated/2.0x/bottom-drawer-legislation-associated.png": "45f7f67cfd031fd6ab4166eb407e64e9",
"assets/assets/icons/bottom-drawer-legislation-associated/3.0x/bottom-drawer-legislation-associated.png": "e51e9fce70364051136b03999c489385",
"assets/assets/icons/bottom-drawer-legislation-associated/bottom-drawer-legislation-associated.png": "82fdd80deeaf88150b9658e1d583aef0",
"assets/assets/icons/thumbs-up/2.0x/thumbs-up-solid.png": "782c209f345b263be0c163ae31b87087",
"assets/assets/icons/thumbs-up/3.0x/thumbs-up-solid.png": "3b7f9f66cf60bf8356b08426cb87c808",
"assets/assets/icons/thumbs-up/thumbs-up-solid.png": "23826ca832254bf027e3aa4b30f0a3bd",
"assets/assets/icons/check-double-line/2.0x/check-double-line.png": "3bfeb7350f38ac4e9cfe934f6e98cd51",
"assets/assets/icons/check-double-line/check-double-line.png": "49ebcf7a4181856593b49df2045fe54a",
"assets/assets/icons/check-double-line/3.0x/check-double-line.png": "b67abe85d7524993b5ec4f17e4d8dbda",
"assets/assets/icons/error-warning/error-warning.png": "780999ae12ea2cc8bea6cce8c402b6fb",
"assets/assets/icons/error-warning/2.0x/error-warning.png": "84272a1bd2144a8c1616339ca69a0c4a",
"assets/assets/icons/error-warning/3.0x/error-warning.png": "0eac05bd4534f640856f22df165b6890",
"assets/assets/icons/comments-icon/2.0x/comments-icon.png": "0657cc4c42c61eb36b0201006ebda23a",
"assets/assets/icons/comments-icon/3.0x/comments-icon.png": "5f2c6397a66da0fa15c0e46461809611",
"assets/assets/icons/comments-icon/comments-icon.png": "aaa1e65333f58e4956e5402743cda7ca",
"assets/assets/icons/bottom-drawer-text-comments/2.0x/bottom-drawer-text-comments.png": "8d34b6143ec067bbac1b6fe5dfdbf981",
"assets/assets/icons/bottom-drawer-text-comments/bottom-drawer-text-comments.png": "7005703c2ed1941c69a25cdd215a849b",
"assets/assets/icons/bottom-drawer-text-comments/3.0x/bottom-drawer-text-comments.png": "2a035f3a0d715223680eb5130a0a1400",
"assets/assets/icons/arrow-right-circle-line/2.0x/arrow-right-circle-line.png": "716dcc8be4fea0beda440d25bfa44a86",
"assets/assets/icons/arrow-right-circle-line/3.0x/arrow-right-circle-line.png": "2007a990af1ed87ca8fe5f7a20313080",
"assets/assets/icons/arrow-right-circle-line/arrow-right-circle-line.png": "e8ca04e9056e53d8aa557ec5f1549f90",
"assets/assets/icons/material-icon/2.0x/material-icon.png": "8d4b910eb404bf83dbbb7a888ec69367",
"assets/assets/icons/material-icon/material-icon.png": "b11115169f5fc3db00af299ac4fd1094",
"assets/assets/icons/material-icon/3.0x/material-icon.png": "e9112427c32c052594a47d9a3f7459db",
"assets/assets/icons/bottom-drawer-summary/2.0x/bottom-drawer-summary.png": "4fec115c66e30a7da1b5f27e2e458d8b",
"assets/assets/icons/bottom-drawer-summary/3.0x/bottom-drawer-summary.png": "24a67bc33c6a5b0787c87554803c85d1",
"assets/assets/icons/bottom-drawer-summary/bottom-drawer-summary.png": "d709939eab81297184628bb18d066103",
"assets/assets/icons/stop-circle-line/stop-circle-line.png": "664e849e7ad22d7ab4784680b38d7ca3",
"assets/assets/icons/stop-circle-line/2.0x/stop-circle-line.png": "2886c3bbaa80e231997abaadf7e66155",
"assets/assets/icons/stop-circle-line/3.0x/stop-circle-line.png": "1b4660150cd7bb09d1b3fe76b9780a71",
"assets/assets/icons/new-answer-questions/2.0x/new-answer-questions.png": "d8becbf47ff3107a660578695833f07e",
"assets/assets/icons/new-answer-questions/3.0x/new-answer-questions.png": "61a12ccf7cd992d2eabad3b30285b590",
"assets/assets/icons/new-answer-questions/new-answer-questions.png": "78888f52695cce184c20fa6cab73d293",
"assets/assets/icons/blank/blank.png": "6bf8ef086e59971bea6d5de4cb12cdca",
"assets/assets/icons/blank/2.0x/blank.png": "58e29dae7c2da7a5550b51c9e2033204",
"assets/assets/icons/blank/3.0x/blank.png": "6cedb7e536f89372a0f60a8df0837cb2",
"assets/assets/icons/text-size-decrease/2.0x/text-size-decrease.png": "54a86b44ff6251affc15b5c10b6048c8",
"assets/assets/icons/text-size-decrease/3.0x/text-size-decrease.png": "ecf7a12c577e0826082ccfa23e45bfb7",
"assets/assets/icons/text-size-decrease/text-size-decrease.png": "d88e9afdc8e6e40a5b55d253fb185a66",
"assets/assets/icons/discuss-line/2.0x/discuss-line.png": "2b156a7b496bbfe691a3d5c3a90a0ec5",
"assets/assets/icons/discuss-line/3.0x/discuss-line.png": "b71d6fba57fda57e91ca823e11e1673b",
"assets/assets/icons/discuss-line/discuss-line.png": "f2d7b8578b4bc750abddd6e56b5acdb1",
"assets/assets/icons/text-size-increase/2.0x/text-size-increase.png": "7ae000c4f8852df71feb1cad298d772a",
"assets/assets/icons/text-size-increase/3.0x/text-size-increase.png": "462a21614142eab5e50a89b9429bc461",
"assets/assets/icons/text-size-increase/text-size-increase.png": "4a377c68c67fb52464b195afb0282fd3",
"assets/assets/icons/download/download.png": "8c4e7d09c9f6315902ff546da51cd18a",
"assets/assets/icons/download/2.0x/download.png": "0ceed99b44679473fac962172688fa7c",
"assets/assets/icons/download/3.0x/download.png": "fb4959975ef5deb40ea6e3c0cadf2e5f",
"assets/assets/icons/smart-coach-reactions/coach_mid.png": "3e64a2c040dd4e19dd2b9bbd488012c7",
"assets/assets/icons/smart-coach-reactions/coach_happy.png": "7f10c0dfeb4b63deb4e1abf7d0cdc403",
"assets/assets/icons/smart-coach-reactions/coach_full_sad.png": "8a2bbd0254216be6bfcc49bbaa58dafa",
"assets/assets/icons/smart-coach-reactions/coach_mid_sad.png": "f26af64222ee1a2642594abb4468ce7b",
"assets/assets/icons/smart-coach-reactions/coach_full_happy.png": "f2fed4e7b57a7873de4256b030c6f742",
"assets/assets/icons/smart-coach-reactions/coach_sad.png": "03474d199e60c2dacb75fe64efcff58c",
"assets/assets/icons/smart-coach-reactions/coach_mid_happy.png": "070e43f8d518cb19a5a3d28713524db1",
"assets/assets/icons/rounded-red_exclamation-icon/rounded-red_exclamation-icon.png": "f40a623dd611d84c495fe66263eb851c",
"assets/assets/icons/rounded-red_exclamation-icon/2.0x/rounded-red_exclamation-icon.png": "d81462e1bd86955190a79d233b754324",
"assets/assets/icons/rounded-red_exclamation-icon/3.0x/rounded-red_exclamation-icon.png": "6ce26a00d374a6f53a67c13fc302ab94",
"assets/assets/icons/rounded-arrow-previous/rounded-arrow-previous.png": "fb57e105643b219a11716b970fe5fd85",
"assets/assets/icons/rounded-arrow-previous/2.0x/rounded-arrow-previous.png": "784288d237e00ad173e2d78948afbba8",
"assets/assets/icons/rounded-arrow-previous/3.0x/rounded-arrow-previous.png": "433ce8c0860095ec7a89aaa62dc76f33",
"assets/assets/icons/exit-app-icon/exit-app-icon.png": "9a01729c893df1f23c690b851bde3dcb",
"assets/assets/icons/exit-app-icon/2.0x/exit-app-icon.png": "6668ce4a435508a40974685a58cc58c4",
"assets/assets/icons/exit-app-icon/3.0x/exit-app-icon.png": "1913a14bf9cdb48f7d7f4ea352128dcd",
"assets/assets/icons/home-first-phase/premium-access/2.0x/premiumAccess.png": "74b262ca5678d2ba833ae02372c236ed",
"assets/assets/icons/home-first-phase/premium-access/3.0x/premiumAccess.png": "e67222ce8f0bad0c164bbd4c82c9c02d",
"assets/assets/icons/home-first-phase/premium-access/premiumAccess.png": "aff732f340aa595f84ac54e3ff661806",
"assets/assets/icons/home-first-phase/phase/2.0x/phase.png": "1815f08c4a55de41dad01758ad600f39",
"assets/assets/icons/home-first-phase/phase/3.0x/phase.png": "821727110f6f026bd229849fdba20e2e",
"assets/assets/icons/home-first-phase/phase/phase.png": "d7bfebaf9b3b5f8b851f2ce0ae849616",
"assets/assets/icons/home-first-phase/materials/2.0x/materials.png": "38b2d81f138088d84a56fce35407a5f8",
"assets/assets/icons/home-first-phase/materials/3.0x/materials.png": "14ca524a01fabf554d9cf99948f93229",
"assets/assets/icons/home-first-phase/materials/materials.png": "2f5856e4798e173e5bc1468968231e6f",
"assets/assets/icons/home-first-phase/video-classes/videoClasses.png": "75b2fd67b2f17cf8add0c278e029bf41",
"assets/assets/icons/home-first-phase/video-classes/2.0x/videoClasses.png": "07d2b62c6accffa0f8715cd9f7adfbf5",
"assets/assets/icons/home-first-phase/video-classes/3.0x/videoClasses.png": "c1956323d93d06f61e93ce093e471137",
"assets/assets/icons/home-first-phase/smart-coach/smartCoach.png": "def87e1a030cbd7ae4c130dac5c75e86",
"assets/assets/icons/home-first-phase/smart-coach/2.0x/smartCoach.png": "93ced0fe5e57170ddd8a426256a6eccb",
"assets/assets/icons/home-first-phase/smart-coach/3.0x/smartCoach.png": "b24ea8ca31fbd18fbe1fab1ebf24a191",
"assets/assets/icons/home-first-phase/vademecum/vademecum.png": "2e6e3c6f8e73ee214b2bc552738c69de",
"assets/assets/icons/home-first-phase/vademecum/2.0x/vademecum.png": "399efb193accc47f4d2bf7d29388c7eb",
"assets/assets/icons/home-first-phase/vademecum/3.0x/vademecum.png": "0569de7dfb885c806866c37f360a0bb1",
"assets/assets/icons/home-first-phase/questions/2.0x/questions.png": "9f44084f9913ed9d9d33492742b68d7d",
"assets/assets/icons/home-first-phase/questions/questions.png": "c5895e7f879b635caefdb59e91b70cb2",
"assets/assets/icons/home-first-phase/questions/3.0x/questions.png": "cf61aac46a406117c6e6cbedbde874e5",
"assets/assets/icons/daily-goals/dailyGoals.png": "c140f9261bbe999eb0fc957376e95999",
"assets/assets/icons/daily-goals/2.0x/dailyGoals.png": "b9554357f7254c9c4d8c1fc1d2f40d49",
"assets/assets/icons/daily-goals/3.0x/dailyGoals.png": "c747e9bfe449730c1ab0c1df1238ee69",
"assets/assets/icons/arrow-left-circle-line/2.0x/arrow-left-circle-line.png": "df1abac5d44f1cb32fc97b01078e6a64",
"assets/assets/icons/arrow-left-circle-line/3.0x/arrow-left-circle-line.png": "925b4c46698a0a55093ae7ed4797e490",
"assets/assets/icons/arrow-left-circle-line/arrow-left-circle-line.png": "fc819444969be522627064b32e1d0588",
"assets/assets/icons/espaco-juridico-logo/2.0x/espaco-juridico-logo.png": "a30b981bb7267e51348b780447709e17",
"assets/assets/icons/espaco-juridico-logo/3.0x/espaco-juridico-logo.png": "99a8e1973e13ad6060040a38d60de1b9",
"assets/assets/icons/espaco-juridico-logo/espaco-juridico-logo.png": "d1d239d6bee2933bbd0d34cc3a993792",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
