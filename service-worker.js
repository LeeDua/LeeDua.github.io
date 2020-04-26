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
    "revision": "7dfcfdf3523582ceb7e8f583db33557b"
  },
  {
    "url": "2020/04/26/vuepress看板娘小埋/index.html",
    "revision": "6b703d5b06aef053d65851486975cd81"
  },
  {
    "url": "404.html",
    "revision": "a3a2c516729d50634b14dd69bbfbf160"
  },
  {
    "url": "about/index.html",
    "revision": "29d5ace0956a10a05470510bad554582"
  },
  {
    "url": "assets/css/0.styles.6d8de1df.css",
    "revision": "d73a90a44dd10d5b48620fda4548d0bf"
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
    "url": "assets/js/8.ce1135c2.js",
    "revision": "66fad3cb584a220e94adb733b0fe98b3"
  },
  {
    "url": "assets/js/9.34f1cec0.js",
    "revision": "bc2ec986f2931f6e9483431b68bc40d5"
  },
  {
    "url": "assets/js/app.da30e5a3.js",
    "revision": "87e024c13776c9b73f47e39aa8adf99b"
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
    "revision": "995e69028daa3dc08f5e55551d732933"
  },
  {
    "url": "category/index.html",
    "revision": "6b5612bd304a1cfa3ea7eecbde1aa85e"
  },
  {
    "url": "index.html",
    "revision": "4005666e3bfaa9586e2527610ad453ca"
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
    "revision": "12b23a72f2b53825bdcdf94a6dad4281"
  },
  {
    "url": "tag/custome theme/index.html",
    "revision": "f264b1e75577bdf3b32e07e0751d5b22"
  },
  {
    "url": "tag/index.html",
    "revision": "ab708f2773b0b0fd4c469150c5885baf"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "8ad6f73c446efd5c7141d15ce0fc4a1e"
  },
  {
    "url": "tag/看板娘/index.html",
    "revision": "9eccb87b7d881349d82aac73779eac8f"
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
