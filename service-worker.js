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
    "revision": "c79bff5e7acff29aa05c0bfc625d9af5"
  },
  {
    "url": "2020/04/24/碎碎念/index.html",
    "revision": "a340e327a02e636f0aecd0a8ccd01d5c"
  },
  {
    "url": "404.html",
    "revision": "384cb8219103ca04df21e541d0b70709"
  },
  {
    "url": "about/index.html",
    "revision": "8805bc9b1218366717b69ee2629c2f82"
  },
  {
    "url": "assets/css/0.styles.74b82016.css",
    "revision": "65f070df8cf6b22d524578fe27a2161e"
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
    "url": "assets/js/10.2451aa56.js",
    "revision": "46b7fd475017d8fa9c3f6d0563b6e7f8"
  },
  {
    "url": "assets/js/11.b06c5ff0.js",
    "revision": "2407dcda379f34410a02aaeacfc472ca"
  },
  {
    "url": "assets/js/12.1d709917.js",
    "revision": "16f884e3352565bc0806e2c22db1a87a"
  },
  {
    "url": "assets/js/13.e1512bc9.js",
    "revision": "4d473ef49f0f804ecb3e9be7249702ed"
  },
  {
    "url": "assets/js/14.b6fb8832.js",
    "revision": "022398babe12c7d99b4dad51616da10f"
  },
  {
    "url": "assets/js/15.a424ba3a.js",
    "revision": "2b1107e6f1efaf406badb77c27c55407"
  },
  {
    "url": "assets/js/16.a9471995.js",
    "revision": "4aeda6919be3da29b535c93390bc7715"
  },
  {
    "url": "assets/js/17.40ca4d76.js",
    "revision": "db61c8b4e59995b0068bc12a240d3434"
  },
  {
    "url": "assets/js/18.a0a5c0c2.js",
    "revision": "7adda0ea2fe86e13661499d500be18f1"
  },
  {
    "url": "assets/js/3.a5085e64.js",
    "revision": "4bc348f4fff2997479a494c7046006c3"
  },
  {
    "url": "assets/js/4.ad12e7b0.js",
    "revision": "6e72c74bf8b50ea29e6abee5c3bf480c"
  },
  {
    "url": "assets/js/5.26dd4891.js",
    "revision": "db74a5c2e08675734bfcc3f440e52b33"
  },
  {
    "url": "assets/js/6.fa6cc508.js",
    "revision": "7412ba9c4da537332f0420a70898fc86"
  },
  {
    "url": "assets/js/7.0b669d9e.js",
    "revision": "9a920651214721eb5b7d55d27fc94192"
  },
  {
    "url": "assets/js/8.c1713128.js",
    "revision": "8ec4a0a3986be5be02e1a67c0d1247fd"
  },
  {
    "url": "assets/js/9.6a0de675.js",
    "revision": "c79a1181d781385b073aa6ddb8e0fbbb"
  },
  {
    "url": "assets/js/app.f291f1bd.js",
    "revision": "a81f409b6ee54655f2b904cf6325dd26"
  },
  {
    "url": "assets/js/vuejs-paginate.c565e113.js",
    "revision": "f46994598d24a01c017efe6881657beb"
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
    "revision": "fdcb0b9181b35cfe197da0b1c3cb55f5"
  },
  {
    "url": "category/index.html",
    "revision": "7932382697f22250c629bbb8d9292d4a"
  },
  {
    "url": "index.html",
    "revision": "6c223a98faabbd808118d38081f9b540"
  },
  {
    "url": "model/xiaomai/13.jpg",
    "revision": "6fcf123674cf28b91837605f7a835c84"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "d12aa98e9bb84f5559e514ffdbca9421"
  },
  {
    "url": "tag/custome theme/index.html",
    "revision": "faef3f15c780c8b654e7cf5ea5fa19f1"
  },
  {
    "url": "tag/index.html",
    "revision": "5073ef3475ec43559cdaed86310f79a1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3ab8a3764b706ba9d399ce02b69ab93a"
  },
  {
    "url": "tag/碎碎念/index.html",
    "revision": "4b936687e6bc4c006baa1bfd4f9796f8"
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
