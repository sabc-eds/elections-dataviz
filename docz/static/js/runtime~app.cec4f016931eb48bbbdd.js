!function(e){function r(r){for(var t,o,c=r[0],i=r[1],a=r[2],s=r[3]||[],d=0,u=[];d<c.length;d++)o=c[d],A[o]&&u.push(A[o][0]),A[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(C&&C(r),s.forEach(function(e){if(void 0===A[e]){A[e]=null;var r=document.createElement("link");r.crossOrigin="anonymous",M.nc&&r.setAttribute("nonce",M.nc),r.rel="prefetch",r.as="script",r.href=q(e),document.head.appendChild(r)}});u.length;)u.shift()();return I.push.apply(I,a||[]),n()}function n(){for(var e,r=0;r<I.length;r++){for(var n=I[r],t=!0,o=1;o<n.length;o++){var c=n[o];0!==A[c]&&(t=!1)}t&&(I.splice(r--,1),e=M(M.s=n[0]))}return e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,r){if(!_[e]||!O[e])return;for(var n in O[e]=!1,r)Object.prototype.hasOwnProperty.call(r,n)&&(m[n]=r[n]);0===--g&&0===b&&P()}(e,r),t&&t(e,r)};var o,c=!0,i="cec4f016931eb48bbbdd",a=1e4,s={},d=[],u=[];function l(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"===typeof e)r._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"===typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},check:j,apply:k,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var r=p.indexOf(e);r>=0&&p.splice(r,1)},data:s[e]};return o=void 0,r}var p=[],f="idle";function h(e){f=e;for(var r=0;r<p.length;r++)p[r].call(null,e)}var v,m,y,g=0,b=0,w={},O={},_={};function E(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return c=e,h("check"),(r=a,r=r||1e4,new Promise(function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,o=M.p+""+i+".hot-update.json";t.open("GET",o,!0),t.timeout=r,t.send(null)}catch(c){return n(c)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+o+" failed."));else{try{var r=JSON.parse(t.responseText)}catch(c){return void n(c)}e(r)}}})).then(function(e){if(!e)return h("idle"),null;O={},w={},_=e.c,y=e.h,h("prepare");var r=new Promise(function(e,r){v={resolve:e,reject:r}});for(var n in m={},A)D(n);return"prepare"===f&&0===b&&0===g&&P(),r});var r}function D(e){_[e]?(O[e]=!0,g++,function(e){var r=document.createElement("script");r.charset="utf-8",r.src=M.p+""+e+"."+i+".hot-update.js",r.crossOrigin="anonymous",document.head.appendChild(r)}(e)):w[e]=!0}function P(){h("ready");var e=v;if(v=null,e)if(c)Promise.resolve().then(function(){return k(c)}).then(function(r){e.resolve(r)},function(r){e.reject(r)});else{var r=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&r.push(E(n));e.resolve(r)}}function k(r){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,t,o,c,a;function u(e){for(var r=[e],n={},t=r.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,a=o.chain;if((c=x[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<c.parents.length;s++){var d=c.parents[s],u=x[d];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([d]),moduleId:i,parentId:d};-1===r.indexOf(d)&&(u.hot._acceptedDependencies[i]?(n[d]||(n[d]=[]),l(n[d],[i])):(delete n[d],r.push(d),t.push({chain:a.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function l(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}r=r||{};var p={},v=[],g={},b=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var w in m)if(Object.prototype.hasOwnProperty.call(m,w)){var O;a=E(w);var j=!1,D=!1,P=!1,k="";switch((O=m[w]?u(a):{type:"disposed",moduleId:w}).chain&&(k="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":r.onDeclined&&r.onDeclined(O),r.ignoreDeclined||(j=new Error("Aborted because of self decline: "+O.moduleId+k));break;case"declined":r.onDeclined&&r.onDeclined(O),r.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+k));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(O),r.ignoreUnaccepted||(j=new Error("Aborted because "+a+" is not accepted"+k));break;case"accepted":r.onAccepted&&r.onAccepted(O),D=!0;break;case"disposed":r.onDisposed&&r.onDisposed(O),P=!0;break;default:throw new Error("Unexception type "+O.type)}if(j)return h("abort"),Promise.reject(j);if(D)for(a in g[a]=m[a],l(v,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,a)&&(p[a]||(p[a]=[]),l(p[a],O.outdatedDependencies[a]));P&&(l(v,[O.moduleId]),g[a]=b)}var H,I=[];for(t=0;t<v.length;t++)a=v[t],x[a]&&x[a].hot._selfAccepted&&I.push({module:a,errorHandler:x[a].hot._selfAccepted});h("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete A[e]}(e)});for(var q,S,T=v.slice();T.length>0;)if(a=T.pop(),c=x[a]){var U={},C=c.hot._disposeHandlers;for(o=0;o<C.length;o++)(n=C[o])(U);for(s[a]=U,c.hot.active=!1,delete x[a],delete p[a],o=0;o<c.children.length;o++){var N=x[c.children[o]];N&&((H=N.parents.indexOf(a))>=0&&N.parents.splice(H,1))}}for(a in p)if(Object.prototype.hasOwnProperty.call(p,a)&&(c=x[a]))for(S=p[a],o=0;o<S.length;o++)q=S[o],(H=c.children.indexOf(q))>=0&&c.children.splice(H,1);for(a in h("apply"),i=y,g)Object.prototype.hasOwnProperty.call(g,a)&&(e[a]=g[a]);var L=null;for(a in p)if(Object.prototype.hasOwnProperty.call(p,a)&&(c=x[a])){S=p[a];var R=[];for(t=0;t<S.length;t++)if(q=S[t],n=c.hot._acceptedDependencies[q]){if(-1!==R.indexOf(n))continue;R.push(n)}for(t=0;t<R.length;t++){n=R[t];try{n(S)}catch(J){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:a,dependencyId:S[t],error:J}),r.ignoreErrored||L||(L=J)}}}for(t=0;t<I.length;t++){var B=I[t];a=B.module,d=[a];try{M(a)}catch(J){if("function"===typeof B.errorHandler)try{B.errorHandler(J)}catch(z){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:a,error:z,originalError:J}),r.ignoreErrored||L||(L=z),L||(L=J)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:a,error:J}),r.ignoreErrored||L||(L=J)}}return L?(h("fail"),Promise.reject(L)):(h("idle"),new Promise(function(e){e(v)}))}var x={},H={3:0},A={3:0},I=[];function q(e){return M.p+"static/js/"+({1:"src-components-quickresults~src-components-race-for-seats~src-components-race-for-votes~src-componen~3364f670",4:"src-components-quickresults",5:"src-components-race-for-seats",6:"src-components-race-for-votes",7:"src-components-spoilt",8:"src-components-turnout",9:"src-index"}[e]||e)+"."+{1:"23be66d6",4:"236aec6f",5:"991e4f09",6:"37c0f438",7:"95770178",8:"9ef73b52",9:"c5cc0a1b",10:"1ae06753"}[e]+".js"}function M(r){if(x[r])return x[r].exports;var n=x[r]={i:r,l:!1,exports:{},hot:l(r),parents:(u=d,d=[],u),children:[]};return e[r].call(n.exports,n,n.exports,function(e){var r=x[e];if(!r)return M;var n=function(n){return r.hot.active?(x[n]?-1===x[n].parents.indexOf(e)&&x[n].parents.push(e):(d=[e],o=n),-1===r.children.indexOf(n)&&r.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),d=[]),M(n)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(r){M[e]=r}}};for(var c in M)Object.prototype.hasOwnProperty.call(M,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(n,c,t(c));return n.e=function(e){return"ready"===f&&h("prepare"),b++,M.e(e).then(r,function(e){throw r(),e});function r(){b--,"prepare"===f&&(w[e]||D(e),0===b&&0===g&&P())}},n.t=function(e,r){return 1&r&&(e=n(e)),M.t(e,-2&r)},n}(r)),n.l=!0,n.exports}M.e=function(e){var r=[];H[e]?r.push(H[e]):0!==H[e]&&{1:1}[e]&&r.push(H[e]=new Promise(function(r,n){for(var t="static/css/"+({1:"src-components-quickresults~src-components-race-for-seats~src-components-race-for-votes~src-componen~3364f670",4:"src-components-quickresults",5:"src-components-race-for-seats",6:"src-components-race-for-votes",7:"src-components-spoilt",8:"src-components-turnout",9:"src-index"}[e]||e)+"."+i+".css",o=M.p+t,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var s=(u=c[a]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===t||s===o))return r()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){var u;if((s=(u=d[a]).getAttribute("data-href"))===t||s===o)return r()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=r,l.onerror=function(r){var t=r&&r.target&&r.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");c.request=t,delete H[e],l.parentNode.removeChild(l),n(c)},l.href=o,document.getElementsByTagName("head")[0].appendChild(l)}).then(function(){H[e]=0}));var n=A[e];if(0!==n)if(n)r.push(n[2]);else{var t=new Promise(function(r,t){n=A[e]=[r,t]});r.push(n[2]=t);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,M.nc&&c.setAttribute("nonce",M.nc),c.src=q(e),0!==c.src.indexOf(window.location.origin+"/")&&(c.crossOrigin="anonymous"),o=function(r){c.onerror=c.onload=null,clearTimeout(a);var n=A[e];if(0!==n){if(n){var t=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src,i=new Error("Loading chunk "+e+" failed.\n("+t+": "+o+")");i.type=t,i.request=o,n[1](i)}A[e]=void 0}};var a=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(r)},M.m=e,M.c=x,M.d=function(e,r,n){M.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},M.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,r){if(1&r&&(e=M(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(M.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)M.d(n,t,function(r){return e[r]}.bind(null,t));return n},M.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(r,"a",r),r},M.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},M.p="/elections-dataviz/docz/",M.oe=function(e){throw console.error(e),e},M.h=function(){return i};var S=window.webpackJsonp=window.webpackJsonp||[],T=S.push.bind(S);S.push=r,S=S.slice();for(var U=0;U<S.length;U++)r(S[U]);var C=T;n()}([]);
//# sourceMappingURL=runtime~app.cec4f016931eb48bbbdd.js.map