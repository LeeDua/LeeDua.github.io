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
    "url": "2018/11/07/frontmatter-in-vuepress-2/index.html",
    "revision": "8653767d8dd9667ac5dbde11c317df81"
  },
  {
    "url": "2018/11/07/frontmatter-in-vuepress-3/index.html",
    "revision": "2e171809b8341612682feda28f04c3e2"
  },
  {
    "url": "2018/11/07/frontmatter-in-vuepress/index.html",
    "revision": "be18fc105b3dcee6f4f1f2a713fd142a"
  },
  {
    "url": "2019/02/26/markdown-slot-2/index.html",
    "revision": "774873f7e5c6fec93039e931b371a3f0"
  },
  {
    "url": "2019/02/26/markdown-slot-3/index.html",
    "revision": "0a7eab0be9112bcdca8d0465236ad7c9"
  },
  {
    "url": "2019/02/26/markdown-slot-4/index.html",
    "revision": "f1feffd37b628ea93b87c8d778ba36c3"
  },
  {
    "url": "2019/02/26/markdown-slot/index.html",
    "revision": "84348003b2e36c392336150bea1a0df8"
  },
  {
    "url": "2019/05/06/writing-a-vuepress-theme-2/index.html",
    "revision": "ce23fe15bd5573ade0ae6a160a674631"
  },
  {
    "url": "2019/05/06/writing-a-vuepress-theme-3/index.html",
    "revision": "7ca0c27e78b3494537e03218e9fc24af"
  },
  {
    "url": "2019/05/06/writing-a-vuepress-theme-4/index.html",
    "revision": "9f5523928f2158d65c491144f66da3c1"
  },
  {
    "url": "2019/05/06/writing-a-vuepress-theme/index.html",
    "revision": "e4cc17a7ba1a3313cff573987ec7da5a"
  },
  {
    "url": "404.html",
    "revision": "ed03db764acf61bf0151537f2a9c1365"
  },
  {
    "url": "assets/css/0.styles.6b212e42.css",
    "revision": "ac064106ad392e27005f33b301d8684b"
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
    "url": "assets/js/10.c3a6ff16.js",
    "revision": "6b5ea0b91980d0061048214f68ac0aa5"
  },
  {
    "url": "assets/js/11.1106079a.js",
    "revision": "c88f1b159b63ec9b6af8b7b0bf681bf9"
  },
  {
    "url": "assets/js/12.96c8e4d1.js",
    "revision": "03d2bac0d6e4d8cd9026be0c0f56ab3a"
  },
  {
    "url": "assets/js/13.60592550.js",
    "revision": "dc0b1c1f4c2358756d4573b65428e7bb"
  },
  {
    "url": "assets/js/14.bef5dc72.js",
    "revision": "8c5d729a9aa09eeea0f945908ff2cc16"
  },
  {
    "url": "assets/js/15.41178d86.js",
    "revision": "0ed05a51d97bef4c88ee8201538de18d"
  },
  {
    "url": "assets/js/16.41084b22.js",
    "revision": "fc7222b2e970996ff0e5ec6f92de8f62"
  },
  {
    "url": "assets/js/17.4c270059.js",
    "revision": "28d25c41a5caa5d84ab4f2bb44dbd4fd"
  },
  {
    "url": "assets/js/18.0ca16966.js",
    "revision": "150ceefed0666021529cee2777db4903"
  },
  {
    "url": "assets/js/19.b6271db3.js",
    "revision": "250f35f87e5c723a8f0c9a26f467f408"
  },
  {
    "url": "assets/js/20.f56d4fb6.js",
    "revision": "38e018e939d0e35aae92aa798b25a707"
  },
  {
    "url": "assets/js/21.55658972.js",
    "revision": "3c444df3715cef43f0c47e7a938f35a5"
  },
  {
    "url": "assets/js/22.19c1c711.js",
    "revision": "d118178a554028cb87890fc174cf2976"
  },
  {
    "url": "assets/js/23.7c99597c.js",
    "revision": "3c50954661e57c417d41980ba05f35fd"
  },
  {
    "url": "assets/js/24.4e71df65.js",
    "revision": "db84bf346c46e9dafa8d96cc08717a11"
  },
  {
    "url": "assets/js/3.ced18616.js",
    "revision": "0c65807a4b09e73e73b65e244700ea2c"
  },
  {
    "url": "assets/js/4.63ab64e5.js",
    "revision": "61470dbacfb903a5d60e6e1eb5f8f226"
  },
  {
    "url": "assets/js/5.f3d3d946.js",
    "revision": "88d97ec4411632c99cd12e312264c398"
  },
  {
    "url": "assets/js/6.004582a9.js",
    "revision": "209667f9c0345df03ba2d0a2d7b036fd"
  },
  {
    "url": "assets/js/7.d48830bb.js",
    "revision": "ab1c46b6a9ab90ff21f7bb1b7e35c8a0"
  },
  {
    "url": "assets/js/8.b31e981a.js",
    "revision": "ddf48cc5724888b491df3d6aee48ed2f"
  },
  {
    "url": "assets/js/9.435c1d66.js",
    "revision": "3db611bf11451f6069a785d2ce6526fd"
  },
  {
    "url": "assets/js/app.866c728a.js",
    "revision": "e19545bd6ee3d7b99d813288769c0cf3"
  },
  {
    "url": "assets/js/vuejs-paginate.4ecb46e2.js",
    "revision": "d6d671d4b054d690078c05a158d83f3a"
  },
  {
    "url": "index.html",
    "revision": "1589e70ea63769d9e54b045595519782"
  },
  {
    "url": "location/Hangzhou/index.html",
    "revision": "50834099126e847247e8e1d12b1f3bb4"
  },
  {
    "url": "location/Hangzhou/page/2/index.html",
    "revision": "b37680bd84c872dac1cbb3aa562756a1"
  },
  {
    "url": "location/Hangzhou/page/3/index.html",
    "revision": "63f46a0a549ce2a117b395791b6abd29"
  },
  {
    "url": "location/index.html",
    "revision": "d92f2c0c42785b88cdc0094f434c4435"
  },
  {
    "url": "location/Shanghai/index.html",
    "revision": "4188d833c1d8f4ddbe10eda51d87a122"
  },
  {
    "url": "location/Shanghai/page/2/index.html",
    "revision": "12c19dda383683b22f88764af4b67d10"
  },
  {
    "url": "page/2/index.html",
    "revision": "7d7489e21c35325a24ab61b2389682a6"
  },
  {
    "url": "page/3/index.html",
    "revision": "30ee81690e41334e6faf78a460b90a5d"
  },
  {
    "url": "page/4/index.html",
    "revision": "a49f72b50d091694efc18e817fad9bf6"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "1d85de0416a7c2fe0fd9656edf628e20"
  },
  {
    "url": "tag/blog/page/2/index.html",
    "revision": "16200668cdb85740ea847eef02cfa053"
  },
  {
    "url": "tag/frontmatter/index.html",
    "revision": "a32cd1c4caea811d52e60353c03e67e1"
  },
  {
    "url": "tag/index.html",
    "revision": "f8572c7505a25b3ecac856b045d1dbd3"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "703741209faf0c78d72a2fb6ef25db03"
  },
  {
    "url": "tag/markdown/page/2/index.html",
    "revision": "ae319274f06fa845a8c367860523934a"
  },
  {
    "url": "tag/theme/index.html",
    "revision": "af1671b047d42d94fc8a91d87262e830"
  },
  {
    "url": "tag/theme/page/2/index.html",
    "revision": "991534e85c0e9515d2115ad29de48f26"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "63007dea2123569a05a44d7c9d7145e6"
  },
  {
    "url": "tag/vuepress/page/2/index.html",
    "revision": "3d2adcf6b474d8d0fc3b192d699da083"
  },
  {
    "url": "tag/vuepress/page/3/index.html",
    "revision": "3f00a2caf9ace730b8d4df1e52266a4f"
  },
  {
    "url": "tag/vuepress/page/4/index.html",
    "revision": "8f1a7c363ed59138dcbb6a835d8d980c"
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
