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
    "revision": "9d94c1f136180c542a6cf235d1647502"
  },
  {
    "url": "2020/04/26/vuepress看板娘小埋/index.html",
    "revision": "15ee456b28078d59004ea38c293873c3"
  },
  {
    "url": "404.html",
    "revision": "d649e1f8bdd829bf1823c99a93c17665"
  },
  {
    "url": "about/index.html",
    "revision": "0f3759cc647d5a3e6deceaeafa955352"
  },
  {
    "url": "assets/css/0.styles.fb097c5d.css",
    "revision": "8bef8de98d3cd134dd5242658b1952c1"
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
    "url": "assets/js/10.15272bcb.js",
    "revision": "d022f0e6ac72b7ab5791b0f524626883"
  },
  {
    "url": "assets/js/11.ab529091.js",
    "revision": "7f7ac5408ad83ba8ee3405733449d252"
  },
  {
    "url": "assets/js/12.88c81a55.js",
    "revision": "6c0db26231f3cb16755a4eae5ce8bbf1"
  },
  {
    "url": "assets/js/13.355bff21.js",
    "revision": "911eae3c3139b715ffae80709f2520d3"
  },
  {
    "url": "assets/js/14.f9e57b15.js",
    "revision": "d6c191b7af2f7667f26fd2adce06ac0b"
  },
  {
    "url": "assets/js/15.648c7f01.js",
    "revision": "621bea33430a9cb9ae2b1bd39bee07cb"
  },
  {
    "url": "assets/js/16.dfd02b72.js",
    "revision": "5cffd48284f2aad6cab7be00000d750d"
  },
  {
    "url": "assets/js/17.6c15709a.js",
    "revision": "d513bae24c89891e8311b9bbf228e758"
  },
  {
    "url": "assets/js/18.a0a5c0c2.js",
    "revision": "7adda0ea2fe86e13661499d500be18f1"
  },
  {
    "url": "assets/js/3.c94c1226.js",
    "revision": "d8e8dfdf1a02d9a8adb376f3dd21a7cd"
  },
  {
    "url": "assets/js/4.17d61346.js",
    "revision": "cf98c515f275733b2538074cfcdfac39"
  },
  {
    "url": "assets/js/5.5a2140c5.js",
    "revision": "702ee129bd749afe62855cbe31d60b5f"
  },
  {
    "url": "assets/js/6.723d8b5d.js",
    "revision": "b47258210affdb845c4b28671c03a740"
  },
  {
    "url": "assets/js/7.4b995baf.js",
    "revision": "15cce6e719fbafeed1c0f565dc03d9c5"
  },
  {
    "url": "assets/js/8.c96400a6.js",
    "revision": "d4f77ea183b1427170f7149c62194368"
  },
  {
    "url": "assets/js/9.92a2e09a.js",
    "revision": "6ffc5ec0c1984e5c58a5c57b471b8d90"
  },
  {
    "url": "assets/js/app.f70475cf.js",
    "revision": "dc9fa6d4200aaec39d63cc6586cff294"
  },
  {
    "url": "assets/js/vuejs-paginate.643397bf.js",
    "revision": "00218330226e545c74fcf5b024e1d793"
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
    "revision": "4c4d61d99b00a99621b80fe14455d94a"
  },
  {
    "url": "category/index.html",
    "revision": "fac32b3a1fc6eb84d8a806210ffdd4d4"
  },
  {
    "url": "index.html",
    "revision": "22de923bc09e80ca6bd555476e2dae4e"
  },
  {
    "url": "live2d.min.js",
    "revision": "0b114267d901addce86e0deb14487368"
  },
  {
    "url": "model/xiaomai/13.jpg",
    "revision": "6fcf123674cf28b91837605f7a835c84"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "9f68c96017803ea21c93d914a0e7eb28"
  },
  {
    "url": "tag/custome theme/index.html",
    "revision": "90eebfbb4edf2a5f7491df02ac4453ae"
  },
  {
    "url": "tag/index.html",
    "revision": "d08dc1320838170d4fbea3c761964978"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fc34d21617d4cd9d6fb8dad32e159adc"
  },
  {
    "url": "tag/看板娘/index.html",
    "revision": "98f34060edabe725f68d827218bb3eb2"
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
