(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{321:function(t,n,e){},322:function(t,n,e){},328:function(t,n,e){"use strict";var r=e(321);e.n(r).a},329:function(t,n,e){"use strict";var r=e(322);e.n(r).a},330:function(t,n,e){"use strict";var r=e(12),i=e(7),o=e(168),a=e(31),s=e(9),u=e(30),c=e(331),p=e(43),l=e(6),f=e(44),g=e(76).f,v=e(29).f,m=e(13).f,d=e(180).trim,h=i.Number,_=h.prototype,b="Number"==u(f(_)),y=function(t){var n,e,r,i,o,a,s,u,c=p(t,!1);if("string"==typeof c&&c.length>2)if(43===(n=(c=d(c)).charCodeAt(0))||45===n){if(88===(e=c.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(a=(o=c.slice(2)).length,s=0;s<a;s++)if((u=o.charCodeAt(s))<48||u>i)return NaN;return parseInt(o,r)}return+c};if(o("Number",!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var x,N=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof N&&(b?l((function(){_.valueOf.call(e)})):"Number"!=u(e))?c(new h(y(n)),e,N):y(n)},P=r?g(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;P.length>k;k++)s(h,x=P[k])&&!s(N,x)&&m(N,x,v(h,x));N.prototype=_,_.constructor=N,a(i,"Number",N)}},331:function(t,n,e){var r=e(11),i=e(169);t.exports=function(t,n,e){var o,a;return i&&"function"==typeof(o=n.constructor)&&o!==e&&r(a=o.prototype)&&a!==e.prototype&&i(t,a),t}},332:function(t,n,e){var r=e(177),i=e(170),o=e(333),a=e(337);t.exports=function(t,n){if(null==t)return{};var e=r(a(t),(function(t){return[t]}));return n=i(n),o(t,e,(function(t,e){return n(t,e[0])}))}},333:function(t,n,e){var r=e(110),i=e(334),o=e(104);t.exports=function(t,n,e){for(var a=-1,s=n.length,u={};++a<s;){var c=n[a],p=r(t,c);e(p,c)&&i(u,o(c,t),p)}return u}},334:function(t,n,e){var r=e(335),i=e(104),o=e(108),a=e(75),s=e(45);t.exports=function(t,n,e,u){if(!a(t))return t;for(var c=-1,p=(n=i(n,t)).length,l=p-1,f=t;null!=f&&++c<p;){var g=s(n[c]),v=e;if(c!=l){var m=f[g];void 0===(v=u?u(m,g,f):void 0)&&(v=a(m)?m:o(n[c+1])?[]:{})}r(f,g,v),f=f[g]}return t}},335:function(t,n,e){var r=e(336),i=e(107),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var a=t[n];o.call(t,n)&&i(a,e)&&(void 0!==e||n in t)||r(t,n,e)}},336:function(t,n,e){var r=e(178);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},337:function(t,n,e){var r=e(171),i=e(338),o=e(340);t.exports=function(t){return r(t,o,i)}},338:function(t,n,e){var r=e(106),i=e(339),o=e(172),a=e(173),s=Object.getOwnPropertySymbols?function(t){for(var n=[];t;)r(n,o(t)),t=i(t);return n}:a;t.exports=s},339:function(t,n,e){var r=e(176)(Object.getPrototypeOf,Object);t.exports=r},340:function(t,n,e){var r=e(174),i=e(341),o=e(109);t.exports=function(t){return o(t)?r(t,!0):i(t)}},341:function(t,n,e){var r=e(75),i=e(175),o=e(342),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var n=i(t),e=[];for(var s in t)("constructor"!=s||!n&&a.call(t,s))&&e.push(s);return e}},342:function(t,n){t.exports=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}},344:function(t,n,e){},355:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return f}));e(21);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;e.e(2).then(e.t.bind(null,378,7)).then((function(n){t.comp=n.default}))},methods:{clickCallback:function(t){var n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}},i=(e(328),e(5)),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.comp?e(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,a=(e(329),Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),s=(e(330),e(77)),u=e.n(s),c=e(332),p=e.n(c),l={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return p()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},f=Object(i.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return"vssue"===this.$service.comment.service?n("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?n("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},362:function(t,n,e){"use strict";var r=e(344);e.n(r).a},383:function(t,n,e){"use strict";e.r(n);e(111),e(1);var r=e(78),i=e.n(r),o=e(4),a=e(355),s={components:{NavigationIcon:o.n,ClockIcon:o.a,TagIcon:o.q},data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return a.b},resolvePostDate:function(t){return i()(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}},u=(e(362),e(5)),c=Object(u.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"base-list-layout"}},[e("div",{staticClass:"ui-posts",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(n){return e("article",{key:n.key,staticClass:"ui-post",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[e("meta",{attrs:{itemprop:"mainEntityOfPage",content:n.path}}),t._v(" "),e("header",{staticClass:"ui-post-title",attrs:{itemprop:"name headline"}},[e("NavLink",{attrs:{link:n.path}},[t._v(t._s(n.title))])],1),t._v(" "),e("div",{staticClass:"post-pad"},[e("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"}},[t._v("\n        "+t._s(n.frontmatter.summary||n.summary)+"\n        ")]),t._v(" "),e("footer",[n.frontmatter.date?e("div",{staticClass:"ui-post-meta ui-post-date"},[e("div",{staticClass:"icon-pad-clock"},[e("ClockIcon")],1),t._v(" "),e("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:n.frontmatter.date}},[t._v("\n            "+t._s(t.resolvePostDate(n.frontmatter.date))+"\n          ")])]):t._e(),t._v(" "),n.frontmatter.tags?e("div",{staticClass:"ui-post-meta ui-post-tag",attrs:{itemprop:"keywords"}},[e("div",{staticClass:"icon-pad-tag"},[e("TagIcon")],1),t._v(" "),t._l(t.resolvePostTags(n.frontmatter.tags),(function(n){return e("router-link",{key:n,attrs:{to:"/tag/"+n}},[t._v("\n            "+t._s(n)+"\n          ")])}))],2):t._e()])])])})),0),t._v(" "),e("div",{staticClass:"pagi-align"},[t.$pagination.length>1&&t.paginationComponent?e(t.paginationComponent,{tag:"component"}):t._e()],1)])}),[],!1,null,null,null);n.default=c.exports}}]);