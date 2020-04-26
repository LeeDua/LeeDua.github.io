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
    "revision": "76a56b3a5c085e1f0c1db291d72069fa"
  },
  {
    "url": "2020/04/26/_26-vuepress看板娘小埋/index.html",
    "revision": "305120ccadc3cb03d75cdf11ad8cbdf1"
  },
  {
    "url": "404.html",
    "revision": "a32d86bfd29e39de6b3b348590ebf2de"
  },
  {
    "url": "about/index.html",
    "revision": "7f7093d68c670853d977a793e1fc892f"
  },
  {
    "url": "assets/css/0.styles.6d70b21b.css",
    "revision": "5b56f0dafd244f5c1d71c1f922937300"
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
    "url": "assets/js/11.f4f35078.js",
    "revision": "7f7ac5408ad83ba8ee3405733449d252"
  },
  {
    "url": "assets/js/12.d3902f96.js",
    "revision": "99c49bfe06728529eb37846938519025"
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
    "url": "assets/js/4.17d61346.js",
    "revision": "cf98c515f275733b2538074cfcdfac39"
  },
  {
    "url": "assets/js/5.5a2140c5.js",
    "revision": "702ee129bd749afe62855cbe31d60b5f"
  },
  {
    "url": "assets/js/6.8bcd47d3.js",
    "revision": "914ddf75f1f136c67ca567c894931737"
  },
  {
    "url": "assets/js/7.0ebd04b3.js",
    "revision": "2d95971e81ee316498d59b81489b552e"
  },
  {
    "url": "assets/js/8.42dc7992.js",
    "revision": "81321919096a3ed44e46924c6ffa19af"
  },
  {
    "url": "assets/js/9.33c1b6e4.js",
    "revision": "8528fc0f803d228bdbfeea49b2eab3b7"
  },
  {
    "url": "assets/js/app.c90c61a2.js",
    "revision": "62fca93627c0f454ff7cd07081e3cc0b"
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
    "revision": "2cc67286d0469947c7d71ef76d3f2d19"
  },
  {
    "url": "category/index.html",
    "revision": "8bc17b5be6c4118eb3e790d3f525c8e4"
  },
  {
    "url": "index.html",
    "revision": "b7ebbdc3405d0f41ebd8f0422f8160ff"
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
    "revision": "2c352c3bc4e4b9508a8bcc0c56967b85"
  },
  {
    "url": "tag/custome theme/index.html",
    "revision": "23999e227f5bbf3fc4d588764b0090b6"
  },
  {
    "url": "tag/index.html",
    "revision": "f99fc7484b88b628286256db199de737"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "253a90af9b93f3c16281bb8a69744629"
  },
  {
    "url": "tag/看板娘/index.html",
    "revision": "db0a98ec2dd5566654c2fa993408fdbc"
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
