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
    "revision": "9a4499d62654596dd2f9bbbf6780c2fb"
  },
  {
    "url": "2020/04/26/vuepress看板娘小埋/index.html",
    "revision": "cfb0affba98060f748552997abde495f"
  },
  {
    "url": "404.html",
    "revision": "0486bd0577bade3bd743b2918fdbd1bf"
  },
  {
    "url": "about/index.html",
    "revision": "25ea08467dd3d12e289520c0482fbec0"
  },
  {
    "url": "assets/css/0.styles.197062d3.css",
    "revision": "35ec8afa8ec74a0d89684e8de23b1930"
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
    "url": "assets/js/12.3e49fa3b.js",
    "revision": "09f0ef41c878ffc3278ce62285477933"
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
    "url": "assets/js/16.b71f4681.js",
    "revision": "b329d34a4dc452127408e39f2bd8f808"
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
    "url": "assets/js/4.58c6600e.js",
    "revision": "f9366f1755f399dc7c342591d5d92c63"
  },
  {
    "url": "assets/js/5.5a2140c5.js",
    "revision": "702ee129bd749afe62855cbe31d60b5f"
  },
  {
    "url": "assets/js/6.1bbb151b.js",
    "revision": "d40792d8d66cedd00e3c477fe9dbda58"
  },
  {
    "url": "assets/js/7.40758711.js",
    "revision": "eeeabbe2fac07eb6f212ee618417198b"
  },
  {
    "url": "assets/js/8.23d5fd4a.js",
    "revision": "546c55aecc145d80f9dae397ea78baef"
  },
  {
    "url": "assets/js/9.eaf8dcc3.js",
    "revision": "a65ebb43ed310530187129a20dac9bd4"
  },
  {
    "url": "assets/js/app.f640b1c3.js",
    "revision": "90e498e35d05de561d9a695da29b2344"
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
    "revision": "798f7f5a0f67090c5a9e9d74a7c5d7b3"
  },
  {
    "url": "category/index.html",
    "revision": "b092be4beb911e1de983e6ae8b38b598"
  },
  {
    "url": "index.html",
    "revision": "d6cfcb89ccf6e51ed76f7fb6eac1caa8"
  },
  {
    "url": "live2d.min.js",
    "revision": "97a7ac4695228102d94d2dd24f470d8e"
  },
  {
    "url": "model/xiaomai/13.jpg",
    "revision": "6fcf123674cf28b91837605f7a835c84"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "0d757af4fcf04ae0027b63a6fe35498b"
  },
  {
    "url": "tag/custome theme/index.html",
    "revision": "9085710cc85f2ae544eee06e4b83527c"
  },
  {
    "url": "tag/index.html",
    "revision": "6a8aa7efec501265814fd33c8fa084a5"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d1234f4111af3fb6dbeae93b98309151"
  },
  {
    "url": "tag/看板娘/index.html",
    "revision": "7b9066c83cf14bac94415480b1569195"
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
