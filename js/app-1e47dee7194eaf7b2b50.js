!function(e){function t(t){for(var r,l,i=t[0],c=t[1],s=t[2],u=0,f=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(d&&d(t);f.length;)f.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(r=!1)}r&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},o={0:0},n=[];function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=c;n.push([53,1]),a()}([,,,,,function(e,t,a){"use strict";(function(e){var r;a.d(t,"c",(function(){return l})),a.d(t,"f",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return d})),a.d(t,"g",(function(){return u})),a.d(t,"b",(function(){return f})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,n,l="loading",i="set_favorites_home",c="delete_favorites_home",s="login_request",d="logout_request",u="signup_request",f="get_video_source";(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(l,"LOADING","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/types/index.js"),o.register(i,"SET_FAVORITE","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/types/index.js"),o.register(c,"DELETE_FAVORITE","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/types/index.js"),o.register(s,"LOGIN_REQUEST","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/types/index.js"),o.register(d,"LOGOUT_REQUEST","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/types/index.js"),o.register(u,"SIGNUP_REQUEST","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/types/index.js"),o.register(f,"GET_VIDEO_SOURCE","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/types/index.js")),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,a(2)(e))},,,,,,function(e,t,a){"use strict";(function(e){a.d(t,"e",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return d})),a.d(t,"f",(function(){return u})),a.d(t,"b",(function(){return f}));var r,o=a(5);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var n,l,i=function(e){return{type:o.f,payload:e}},c=function(e){return{type:o.a,payload:e}},s=function(e){return{type:o.d,payload:e}},d=function(e){return{type:o.e,payload:e}},u=function(e){return{type:o.g,payload:e}},f=function(e){return{type:o.b,payload:e}};(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(n.register(i,"setFavorite","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/actions/index.js"),n.register(c,"deleteFavorite","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/actions/index.js"),n.register(s,"loginRequest","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/actions/index.js"),n.register(d,"logoutRequest","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/actions/index.js"),n.register(u,"signUpRequest","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/actions/index.js"),n.register(f,"getVideoSource","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/actions/index.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,a(2)(e))},,function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),l=a(3),i=a(6),c=a(36),s=a.n(c),d=a(37),u=a(11),f=a(39),m=a(40);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b,p,v=function(e){var t=e.user,a=e.isLogin,r=e.isSignUp,o=Object.keys(t).length>0,i=s()("header",{isLogin:a,isSignUp:r});return n.a.createElement("header",{className:i},n.a.createElement(l.b,{to:"/"},n.a.createElement("img",{className:"header__img",src:f.a,alt:"Logo Platzi Video"})),n.a.createElement("div",{className:"header__menu"},n.a.createElement("div",{className:"header__menu--profile"},o?n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{className:"header__menu--gravatar",src:Object(d.a)(t.email),alt:t.email}),n.a.createElement("p",null,t.name)):n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:m.a,alt:"user Icon"}),n.a.createElement("p",null,"Menu"))),n.a.createElement("ul",null,o?n.a.createElement("li",null,n.a.createElement(l.b,{to:"/"},"Ver Pefil")):null,o?n.a.createElement("li",null,n.a.createElement(l.b,{to:"/login",onClick:function(){e.logoutRequest({})}},"Cerrar Sesión")):n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement(l.b,{to:"/login"},"Iniciar Sesión")),n.a.createElement("li",null,n.a.createElement(l.b,{to:"/signUp"},"Registrarse"))))))},g=function(e){return{user:e.user}},y={logoutRequest:u.d},h=Object(i.b)(g,y)(v);t.a=h,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(v,"Header","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Header.jsx"),b.register(g,"mapStateToProps","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Header.jsx"),b.register(y,"mapDispatchToProps","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Header.jsx"),b.register(h,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Header.jsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a(2)(e))},,,,,function(e,t,a){"use strict";t.a=a.p+"assets/ff863393eb21b36ba9d1e13ccf6333ab.png"},function(e,t,a){"use strict";t.a=a.p+"assets/64b2784cb8101096e1aafd7d7d722efd.png"},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),l=a(3);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,s=function(){return n.a.createElement("section",{className:"not-found"},n.a.createElement("p",{className:"not-found__number"},"404"),n.a.createElement("p",{className:"not-found__text"},"La página que estas buscando no existe."),n.a.createElement(l.b,{to:"/"},n.a.createElement("button",{type:"button",className:"not-found__button"},"Volver al inicio")))},d=s;t.a=d,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(s,"NotFound","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/NotFound.jsx"),i.register(d,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/NotFound.jsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,a(2)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(e){var t=e.children,a=e.title;return n.a.createElement("div",{className:"categories"},n.a.createElement("h2",{className:"categories__title"},a),t)},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"Categories","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Categories.jsx"),l.register(s,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Categories.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a(2)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(e){var t=e.children;return n.a.createElement("section",{className:"carousel"},n.a.createElement("div",{className:"carousel__container"},t))},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"Carousel","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Carousel.jsx"),l.register(s,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Carousel.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a(2)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),l=a(3),i=a(6),c=a(10),s=a.n(c),d=a(11),u=a(43),f=a(44),m=a(45);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b=function(e){var t=e.id,a=e.cover,r=e.title,o=e.year,i=e.contentRating,c=e.duration,s=e.isList;return n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"carousel-item__img",src:a,alt:r}),n.a.createElement("div",{className:"carousel-item__details"},n.a.createElement("div",{className:"carousel-item__detail--icon"},n.a.createElement(l.b,{to:"/player/".concat(t)},n.a.createElement("img",{src:u.a,alt:"Play"})),s?n.a.createElement("img",{src:m.a,alt:"Delete",onClick:function(){return a=t,void e.deleteFavorite(a);var a}}):n.a.createElement("img",{src:f.a,alt:"Plus",onClick:function(){e.setFavorite({id:t,cover:a,title:r,year:o,contentRating:i,duration:c})}})),n.a.createElement("h2",{className:"carousel-item__details--title"},r),n.a.createElement("p",{className:"carousel-item__details--subtitle"},"".concat(o," ").concat(i," ").concat(c))))};b.propTypes={cover:s.a.string,title:s.a.string,year:s.a.number,contentRating:s.a.string,duration:s.a.number};var p,v,g=function(e){return{myList:e.myList}},y={setFavorite:d.e,deleteFavorite:d.a},h=Object(i.b)(g,y)(b);t.a=h,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(b,"CarouselItem","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/CarouselItem.jsx"),p.register(g,"mapStateToProps","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/CarouselItem.jsx"),p.register(y,"mapDispatchToProps","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/CarouselItem.jsx"),p.register(h,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/CarouselItem.jsx")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}).call(this,a(2)(e))},,function(e,t,a){},,,,,,,,function(e,t,a){"use strict";(function(e){var r,o=a(5);function n(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,u,f=function(e,t){switch(t.type){case o.f:return 0!==e.myList.filter((function(e){return e.id===t.payload.id})).length?e:c({},e,{myList:[].concat(n(e.myList),[t.payload])});case o.a:return c({},e,{myList:e.myList.filter((function(e){return e.id!==t.payload}))});case o.d:case o.e:case o.g:return c({},e,{user:t.payload});case o.b:return c({},e,{playing:e.trends.find((function(e){return e.id===Number(t.payload)}))||e.originals.find((function(e){return e.id===Number(t.payload)}))||[]});case o.c:return c({},e,{loading:!0});default:return e}};t.a=f,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(f,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/reducers/index.js"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,a(2)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),l=a(3),i=a(4),c=a(35),s=a(46),d=a(47),u=a(20),f=a(48),m=a(51);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b,p,v=function(){return n.a.createElement(l.a,null,n.a.createElement(m.a,null,n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:c.a}),n.a.createElement(i.a,{exact:!0,path:"/login",component:s.a}),n.a.createElement(i.a,{exact:!0,path:"/signup",component:d.a}),n.a.createElement(i.a,{exact:!0,path:"/player/:id",component:f.a}),n.a.createElement(i.a,{component:u.a}))))},g=v;t.a=g,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(v,"App","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/routes/App.js"),b.register(g,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/routes/App.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a(2)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),l=a(6),i=a(13),c=a(42),s=a(21),d=a(22),u=a(23);a(25);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,b,p=function(e){var t=e.myList,a=e.trends,r=e.originals;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null),n.a.createElement(c.a,null),t.length>0&&n.a.createElement(s.a,{title:"Mi Lista"},n.a.createElement(d.a,null,t.map((function(e){return n.a.createElement(u.a,f({key:e.id},e,{isList:!0}))})))),n.a.createElement(s.a,{title:"Tendencias"},n.a.createElement(d.a,null,a.map((function(e){return n.a.createElement(u.a,f({key:e.id},e))})))),n.a.createElement(s.a,{title:"Originales"},n.a.createElement(d.a,null,r.map((function(e){return n.a.createElement(u.a,f({key:e.id},e))})))))},v=function(e){return{myList:e.myList,trends:e.trends,originals:e.originals}},g=Object(l.b)(v,null)(p);t.a=g,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(p,"Home","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/Home.jsx"),m.register(v,"mapStateToProps","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/Home.jsx"),m.register(g,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/Home.jsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,a(2)(e))},,function(e,t,a){"use strict";(function(e){var r,o=a(38),n=a.n(o);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(e){var t=e.trim().toLowerCase(),a=n()(t,{encoding:"binary"});return"".concat("https://gravatar.com/avatar/").concat(a)},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"gravatar","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/utils/gravatar.js"),l.register(s,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/utils/gravatar.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a(2)(e))},,function(e,t,a){"use strict";t.a=a.p+"assets/7104263cc7ae188d7e1275934c32a378.png"},function(e,t,a){"use strict";t.a=a.p+"assets/5a89d07e023cabc9bd46b8ef3e33b9c3.png"},,function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(){return n.a.createElement("section",{className:"main"},n.a.createElement("h2",{className:"main__title"},"¿Qué quieres ver hoy?"),n.a.createElement("input",{className:"input",type:"text",placeholder:"Buscar..."}))},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"Search","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Search.jsx"),l.register(s,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Search.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a(2)(e))},function(e,t,a){"use strict";t.a=a.p+"assets/a341eae0b94807bb5a1663fee6d6e1f2.png"},function(e,t,a){"use strict";t.a=a.p+"assets/82e73f0c9de0d9e64a4f7eb6917fe799.png"},function(e,t,a){"use strict";t.a=a.p+"assets/2647be97c56367cf538de3ff598ee022.png"},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),l=a(6),i=a(3),c=a(11),s=a(13),d=a(18),u=a(19);a(25);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,o=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){o=!0,n=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=function(e){var t=b(Object(o.useState)({email:""}),2),a=t[0],r=t[1],l=function(e){r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,m({},e.target.name,e.target.value)))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{isLogin:!0}),n.a.createElement("section",{className:"login"},n.a.createElement("section",{className:"login__container"},n.a.createElement("h2",null,"Inicia Sesión"),n.a.createElement("form",{className:"login__container--form",onSubmit:function(t){t.preventDefault(),e.loginRequest(a),e.history.push("/")}},n.a.createElement("input",{name:"email","aria-label":"Correo",type:"email",id:"email",className:"input--login",placeholder:"Correo",onChange:l}),n.a.createElement("input",{name:"password","aria-label":"Contraseña",type:"password",id:"password",className:"input--login",placeholder:"Contraseña",onChange:l}),n.a.createElement("button",{className:"button",type:"submit"},"Iniciar Sesión"),n.a.createElement("div",{className:"login__container--remember-me"},n.a.createElement("label",{htmlFor:"cbox1"},n.a.createElement("input",{type:"checkbox",id:"cbox1",value:"checkbox"}),"Recuérdame"),n.a.createElement("a",{href:"/"},"Olvidé mi contraseña"))),n.a.createElement("section",{className:"login__container--social-media"},n.a.createElement("div",{className:"google"},n.a.createElement("img",{className:"google__img",src:d.a,alt:"Google"}),n.a.createElement("p",null,n.a.createElement("a",{href:"/"},"Inicia sesión con Google"))),n.a.createElement("div",{className:"twitter"},n.a.createElement("img",{className:"twitter__img",src:u.a,alt:"Twitter"}),n.a.createElement("p",null,n.a.createElement("a",{href:"/"},"Inicia sesión con Twitter")))),n.a.createElement("p",{className:"login__container--register"},"¿No tienes ninguna cuenta?",n.a.createElement("br",null),n.a.createElement(i.b,{to:"/signup"},"Regístrate!")))))};v(g,"useState{[form, setValues]({\r\n    email: '',\r\n  })}");var y,h,L={loginRequest:c.c},E=Object(l.b)(null,L)(g);t.a=E,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(g,"Login","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/Login.jsx"),y.register(L,"mapDispacthToProps","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/Login.jsx"),y.register(E,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/Login.jsx")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}).call(this,a(2)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),l=a(3),i=a(6),c=a(11),s=a(13),d=a(18),u=a(19);a(25);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,o=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){o=!0,n=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=function(e){var t=b(Object(o.useState)({email:"",name:"",password:""}),2),a=t[0],r=t[1],i=function(e){r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,m({},e.target.name,e.target.value)))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{isSignUp:!0}),n.a.createElement("section",{className:"register"},n.a.createElement("section",{className:"register__container"},n.a.createElement("h2",null,"Regístrate"),n.a.createElement("form",{className:"register__container--form",onSubmit:function(t){t.preventDefault(),e.signUpRequest(a),e.history.push("/")}},n.a.createElement("input",{name:"name","aria-label":"Nombre",type:"text",id:"name",className:"input--signup",placeholder:"Nombre",onChange:i}),n.a.createElement("input",{name:"email","aria-label":"Correo",type:"email",id:"email",className:"input--signup",placeholder:"Correo",onChange:i}),n.a.createElement("input",{name:"password","aria-label":"Contraseña",type:"password",id:"password",className:"input--signup",placeholder:"Contraseña",onChange:i}),n.a.createElement("input",{"aria-label":"Confirmar contraseña",type:"password",name:"password",id:"confirm-password",className:"input--signup",placeholder:"Confirmar contraseña",onChange:i}),n.a.createElement("button",{type:"submit",className:"button"},"Registrarme")),n.a.createElement("section",{className:"register__container--social-media"},n.a.createElement("div",{className:"google"},n.a.createElement("img",{className:"google__img",src:d.a,alt:"Google"}),n.a.createElement("p",null,n.a.createElement("a",{href:"/"},"Registro con Google "))),n.a.createElement("div",{className:"twitter"},n.a.createElement("img",{className:"twitter__img",src:u.a,alt:"Twitter"}),n.a.createElement("p",null,n.a.createElement("a",{href:"/"},"Registro con Twitter")))),n.a.createElement("p",{className:"register__container--login"},"¿Ya tienes una cuenta?",n.a.createElement("br",null),n.a.createElement(l.b,{to:"/login"},"Inicia sesión")))))};v(g,"useState{[form, setValues]({\r\n    email: '',\r\n    name: '',\r\n    password: '',\r\n  })}");var y,h,L={signUpRequest:c.f},E=Object(i.b)(null,L)(g);t.a=E,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(g,"Signup","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/Signup.jsx"),y.register(L,"mapDispacthToProps","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/Signup.jsx"),y.register(E,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/Signup.jsx")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}).call(this,a(2)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),l=a(6),i=a(20),c=a(11),s=a(49);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,o=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){o=!0,n=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=function(e){var t=e.match,a=e.playing,r=e.getVideoSource,l=e.history,c=t.params.id,u=d(Object(o.useState)(!0),2),f=u[0],m=u[1],b=Object.keys(a).length>0;return Object(o.useEffect)((function(){r(c),m(!1)}),[]),f?n.a.createElement(s.a,null):b?n.a.createElement("div",{className:"Player"},n.a.createElement("video",{controls:!0,autoPlay:!0},n.a.createElement("source",{src:a.source,type:"video/mp4"})),n.a.createElement("div",{className:"Player-back"},n.a.createElement("button",{type:"button",onClick:function(){return l.goBack()}},"Regresar"))):n.a.createElement(i.a,null)};f(m,"useState{[loading, setLoading](true)}\nuseEffect{}");var b,p,v=function(e){return{playing:e.playing}},g={getVideoSource:c.b},y=Object(l.b)(v,g)(m);t.a=y,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(m,"Player","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/Player.jsx"),b.register(v,"mapStateToProps","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/Player.jsx"),b.register(g,"mapDispatchToProps","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/Player.jsx"),b.register(y,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/containers/Player.jsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a(2)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),l=a(50);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function i(){return n.a.createElement("div",{className:"PageLoading"},n.a.createElement(l.a,null))}var c,s,d=i;t.a=d,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(i,"PageLoading","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/PageLoading.jsx"),c.register(d,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/PageLoading.jsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,a(2)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(e){return n.a.createElement("div",{className:"lds-facebook"},n.a.createElement("div",null," "),n.a.createElement("div",null," "),n.a.createElement("div",null," "))},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"Loader","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Loader.jsx"),l.register(s,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Loader.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a(2)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),l=a(52);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,s=function(e){var t=e.children;return n.a.createElement("div",{className:"App"},t,n.a.createElement(l.a,null))},d=s;t.a=d,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(s,"Layout","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Layout.jsx"),i.register(d,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Layout.jsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,a(2)(e))},function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),l=a(3);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,s=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement(l.b,{to:"/"},"Términos de uso"),n.a.createElement(l.b,{to:"/"},"Declaración de privacidad"),n.a.createElement(l.b,{to:"/"},"Centro de ayuda"))},d=s;t.a=d,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(s,"Footer","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Footer.jsx"),i.register(d,"default","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/components/Footer.jsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,a(2)(e))},function(e,t,a){e.exports=a(54)},function(e,t,a){"use strict";a.r(t),function(e){var t,r=a(0),o=a.n(r),n=a(16),l=a.n(n),i=a(6),c=a(15),s=a(4),d=a(8),u=a(33),f=a(34);(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,b,p=Object(d.a)(),v=window.__PRELOADED_STATE__,g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.b,y=Object(c.c)(u.a,v,g());delete window.__PRELOADED_STATE__,l.a.hydrate(o.a.createElement(i.a,{store:y},o.a.createElement(s.b,{history:p},o.a.createElement(f.a,null))),document.getElementById("app")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(p,"history","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/index.js"),m.register(v,"preloadedState","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/index.js"),m.register(g,"composeEnhancers","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/index.js"),m.register(y,"store","/home/travis/build/Diegoalesco95/Platzi-video/src/frontend/index.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}.call(this,a(2)(e))}]);