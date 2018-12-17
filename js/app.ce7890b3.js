(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)s=o[u],i[s]&&m.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},i={app:0},r=[];function o(t){return l.p+"js/"+({about:"about",contact:"contact",portfolio:"portfolio"}[t]||t)+"."+{about:"cd321db5",contact:"c2938dfe",portfolio:"140c9652"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1,contact:1,portfolio:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise(function(e,a){for(var n="css/"+({about:"about",contact:"contact",portfolio:"portfolio"}[t]||t)+"."+{about:"56ba48eb",contact:"d840c61b",portfolio:"4c7f12d6"}[t]+".css",i=l.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return e()}var m=document.getElementsByTagName("style");for(o=0;o<m.length;o++){c=m[o],u=c.getAttribute("data-href");if(u===n||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.request=n,delete s[t],p.parentNode.removeChild(p),a(r)},p.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(p)}).then(function(){s[t]=0}));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=r);var c,u=document.getElementsByTagName("head")[0],m=document.createElement("script");m.charset="utf-8",m.timeout=120,l.nc&&m.setAttribute("nonce",l.nc),m.src=o(t),c=function(e){m.onerror=m.onload=null,clearTimeout(p);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");r.type=n,r.request=s,a[1](r)}i[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:m})},12e4);m.onerror=m.onload=c,u.appendChild(m)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var m=0;m<c.length;m++)e(c[m]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-transparent"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Hunter Trammell")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/portfolio"}},[t._v("Portfolio")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact")])],1)])])]),a("transition",{attrs:{name:t.transitionName,mode:"out-in"},on:{beforeLeave:t.beforeLeave,enter:t.enter}},[a("router-view")],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],r=(a("28a5"),"fade"),o={name:"App",data:function(){return{prevHeight:0,transitionName:r}},created:function(){var t=this;this.$router.beforeEach(function(e,a,n){var s=e.meta.transitionName||a.meta.transitionName;if("slide"===s){var i=e.path.split("/").length,o=a.path.split("/").length;s=i<o?"slide-right":"slide-left"}t.transitionName=s||r,n()})},methods:{beforeLeave:function(t){this.prevHeight=getComputedStyle(t).height}}},l=o,c=(a("034f"),a("2877")),u=Object(c["a"])(l,s,i,!1,null,null,null);u.options.__file="App.vue";var m=u.exports,p=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"intro container-fluid",attrs:{id:"intro"}},[a("div",{staticClass:"row summary animated mx-2"},[a("div",{staticClass:"col-lg col-sm-12"},[a("h2",{staticClass:"title-text"},[t._v("Full-Stack Web Developer")]),a("h6",{staticClass:"title-text pb-4"},[t._v("expert problem solver and imaginative designer")]),t._m(0),a("h4",{staticClass:"title-text pt-4 crop-cont-sm"},[a("router-link",{staticClass:"btn btn-projects",attrs:{to:"/about"}},[t._v("Get To Know Me")])],1)]),a("div",{staticClass:"col-lg col-sm-12 crop-cont-sm"},[a("h2",{staticClass:"title-text"},[t._v("Passionate About Coding")]),t._m(1),t._m(2),a("h5",{staticClass:"title-text caption animated pt-4 pb-4"},[t._v("Javascript")]),a("h4",{staticClass:"title-text pt-4"},[a("router-link",{staticClass:"btn btn-projects",attrs:{to:"/portfolio"}},[t._v("Explore Projects")])],1)]),a("div",{staticClass:"col-lg col-sm-12 crop-cont-sm"},[a("h2",{staticClass:"title-text"},[t._v("Send Me A Message")]),a("h6",{staticClass:"title-text pb-4"},[t._v("i'm always open to chat")]),t._m(3),a("h4",{staticClass:"title-text pt-4"},[a("router-link",{staticClass:"btn btn-projects",attrs:{to:"/contact"}},[t._v("Say Hello")])],1)])]),a("img",{attrs:{src:"",alt:""}})])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("img",{staticClass:"profilePic",attrs:{src:"assets/images/hunterPic.png",alt:"Hunter Trammell"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticClass:"title-text pb-4"},[t._v("the largest "),a("i",[t._v("'room'")]),t._v(" in the world is the "),a("i",[t._v("'room'")]),t._v(" for improvement")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fullStack pt-4 pb-4"},[a("img",{staticClass:"img-left img-1 img-responsive animated",attrs:{src:"assets/images/icons/html.png",alt:"html","data-img":"HTML"}}),a("img",{staticClass:"img-inner img-2 img-responsive animated",attrs:{src:"assets/images/icons/firebase.png",alt:"css","data-img":"Firebase"}}),a("img",{staticClass:"img-inner img-3 img-responsive animated",attrs:{src:"assets/images/icons/nodejs.png",alt:"firebase","data-img":"Node.js"}}),a("img",{staticClass:"img-inner img-4 img-responsive animated",attrs:{src:"assets/images/icons/JSON.png",alt:"node.js","data-img":"JSON"}}),a("img",{staticClass:"img-inner img-5 img-responsive animated",attrs:{src:"assets/images/icons/git.png",alt:"git","data-img":"Git"}}),a("img",{staticClass:"img-inner img-6 img-responsive animated",attrs:{src:"assets/images/icons/css.png",alt:"JSON","data-img":"CSS"}}),a("img",{staticClass:"img-right img-7 img-responsive animated",attrs:{src:"assets/images/icons/javascript.png",alt:"javascript","data-img":"Javascript"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("img",{staticClass:"profilePic",attrs:{width:"180",src:"assets/images/mail.png",alt:"Hunter Trammell"}})])}];$(document).ready(function(){var t=1,e=0;function a(){8==t&&(t=1,e=0,$(".img-7").removeClass("bounce").removeClass("fadeIn"));var a=$(".caption");a.removeClass("fadeIn");var n=$(".img-"+t).data("img"),s=$(".img-"+e);s.removeClass("bounce");var i=$(".img-"+t);i.addClass("bounce"),a.text(n),t++,e++,a.addClass("fadeIn")}setInterval(a,3e3)});var f={name:"home"},g=f,h=(a("cccb"),Object(c["a"])(g,v,d,!1,null,null,null));h.options.__file="Home.vue";var b=h.exports;n["a"].use(p["a"]);var C=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:b,meta:{transitionName:"slide"}},{path:"/about",name:"about",meta:{transitionName:"slide"},component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/portfolio",name:"portfolio",meta:{transitionName:"slide"},component:function(){return a.e("portfolio").then(a.bind(null,"c9e5"))}},{path:"/contact",name:"contact",meta:{transitionName:"slide"},component:function(){return a.e("contact").then(a.bind(null,"b8fa"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:C,render:function(t){return t(m)}}).$mount("#app")},"64a9":function(t,e,a){},cccb:function(t,e,a){"use strict";var n=a("d563"),s=a.n(n);s.a},d563:function(t,e,a){}});
//# sourceMappingURL=app.ce7890b3.js.map