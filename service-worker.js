/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.jpg",
    "revision": "3a7cbf1ed88b0eb4307e09a49bf21235"
  },
  {
    "url": "2020/04/24/建站啦/index.html",
    "revision": "91a150c41ee0dee500e981cc4dd0b43d"
  },
  {
    "url": "2020/04/26/vuepress看板娘小埋/index.html",
    "revision": "f57c31d1dc98221636094717d9078c94"
  },
  {
    "url": "404.html",
    "revision": "505032e410ab72fc91ff8c3b6c7940c5"
  },
  {
    "url": "about/index.html",
    "revision": "cd40fda0b0acffc51be06d75c69dc818"
  },
  {
    "url": "assets/css/0.styles.d311cb9f.css",
    "revision": "e25b3fbf9f966538d1d9264f273d829d"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/xiaomai.d5b664f6.png",
    "revision": "d5b664f6ba131c0cf7600fc2c223b752"
  },
  {
    "url": "assets/js/10.e92f1c6b.js",
    "revision": "90b2285dbc8bba1df02ba879993c22d2"
  },
  {
    "url": "assets/js/11.3e21b9b1.js",
    "revision": "bb61c434cb2a1bf70c951aac4461ad45"
  },
  {
    "url": "assets/js/12.7bcc90e1.js",
    "revision": "1fdd02ad1083dae1e468f3711faf0c5e"
  },
  {
    "url": "assets/js/13.f5d1126a.js",
    "revision": "145c3f81cb94b1e21a0fbd1b6128835d"
  },
  {
    "url": "assets/js/14.9475f46e.js",
    "revision": "85054f33efaa25a167422f0d24e0d59c"
  },
  {
    "url": "assets/js/15.ad91e435.js",
    "revision": "2f74efbc404291ae028de5316c6f37f2"
  },
  {
    "url": "assets/js/16.11eb5c24.js",
    "revision": "1c20868f08eda6376fd50da6fd226c58"
  },
  {
    "url": "assets/js/17.e99bdb0b.js",
    "revision": "488634e2951d4e6eb403d57fc667a91a"
  },
  {
    "url": "assets/js/3.da906500.js",
    "revision": "babfa91579ae29507ac7481418a67f92"
  },
  {
    "url": "assets/js/4.6d8bd8b0.js",
    "revision": "0df2128acae9155abf26fc9083231d62"
  },
  {
    "url": "assets/js/5.f404057c.js",
    "revision": "e9a48b278332034eb3152449321e5262"
  },
  {
    "url": "assets/js/6.2f3d71fd.js",
    "revision": "94feb3455d66684a9a80040d87906161"
  },
  {
    "url": "assets/js/7.f8f6d692.js",
    "revision": "e20920df09b52bc3b663b32247ec7fb7"
  },
  {
    "url": "assets/js/8.4f824142.js",
    "revision": "c8bb44839e1112677f5f5d4ec74ca6d0"
  },
  {
    "url": "assets/js/9.725fd8d9.js",
    "revision": "4360744d4aa6d08c5dc4967de37b3c47"
  },
  {
    "url": "assets/js/app.44aafca6.js",
    "revision": "2db6b939298455392e92907080ccfd3d"
  },
  {
    "url": "assets/js/vuejs-paginate.267ce128.js",
    "revision": "c16e67c3bdf8c71e7053c1b9d4bfaf6c"
  },
  {
    "url": "bg_h4.png",
    "revision": "72193d3e5370e0de54ff6db2468bb6e5"
  },
  {
    "url": "bg_h6.png",
    "revision": "6f4a5f5b8e55fb137e0f8c72d853f49d"
  },
  {
    "url": "category/code/index.html",
    "revision": "71c2eecffb42ea75e2e2804a83e50a7a"
  },
  {
    "url": "category/index.html",
    "revision": "17fea9b302db68477e076c97c1c39a75"
  },
  {
    "url": "index.html",
    "revision": "865e5346f1fa6f240fc3b447e8405114"
  },
  {
    "url": "live2d.min.js",
    "revision": "da6657361c7d4f2758cda1b2971a17ba"
  },
  {
    "url": "model/xiaomai/13.jpg",
    "revision": "6fcf123674cf28b91837605f7a835c84"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "11301200913aa873a776a41e437378e5"
  },
  {
    "url": "tag/custome theme/index.html",
    "revision": "895059dc69c069de08d71584d6603071"
  },
  {
    "url": "tag/index.html",
    "revision": "91913cb9f77d44a4d327ba2edb16ab6c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c1e12d022435043fdd682417ca0965dc"
  },
  {
    "url": "tag/看板娘/index.html",
    "revision": "53b3df74e23380399f62f20e758d4c0a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
