(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96c787be"],{"408a":function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),c=r("577e"),a=r("5899"),o="["+a+"]",u=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),s=function(t){return function(e){var r=c(n(e));return 1&t&&(r=r.replace(u,"")),2&t&&(r=r.replace(i,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,r){var n=r("1626"),c=r("861d"),a=r("d2bb");t.exports=function(t,e,r){var o,u;return a&&n(o=e.constructor)&&o!==r&&c(u=o.prototype)&&u!==r.prototype&&a(t,u),t}},7685:function(t,e,r){},a9e3:function(t,e,r){"use strict";var n=r("83ab"),c=r("da84"),a=r("94ca"),o=r("6eeb"),u=r("1a2d"),i=r("7156"),s=r("d9b5"),f=r("c04e"),b=r("d039"),d=r("241c").f,p=r("06cf").f,l=r("9bf2").f,v=r("408a"),N=r("58a8").trim,h="Number",g=c[h],I=g.prototype,O=function(t){var e=f(t,"number");return"bigint"===typeof e?e:y(e)},y=function(t){var e,r,n,c,a,o,u,i,b=f(t,"number");if(s(b))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof b&&b.length>2)if(b=N(b),e=b.charCodeAt(0),43===e||45===e){if(r=b.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(b.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+b}for(a=b.slice(2),o=a.length,u=0;u<o;u++)if(i=a.charCodeAt(u),i<48||i>c)return NaN;return parseInt(a,n)}return+b};if(a(h,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var j,E=function(t){var e=arguments.length<1?0:g(O(t)),r=this;return r instanceof E&&b((function(){v(r)}))?i(Object(e),r,E):e},S=n?d(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),m=0;S.length>m;m++)u(g,j=S[m])&&!u(E,j)&&l(E,j,p(g,j));E.prototype=I,I.constructor=E,o(c,h,E)}},ba8f:function(t,e,r){"use strict";r("7685")},ea97:function(t,e,r){t.exports=r.p+"img/icon-study.267a0ddf.svg"},eb09:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),c=r("ea97"),a=r.n(c),o=function(t){return Object(n["i"])("data-v-ea2f00e4"),t=t(),Object(n["h"])(),t},u={class:"card"},i=o((function(){return Object(n["c"])("div",{class:"container-logo"},[Object(n["c"])("img",{src:a.a,alt:""})],-1)})),s={class:"container-info"},f={class:"work-left"},b=o((function(){return Object(n["c"])("h1",null,"Study",-1)})),d={class:"work-right"},p={class:"frecuency"};function l(t,e,r,c,a,o){return Object(n["g"])(),Object(n["b"])("div",u,[i,Object(n["c"])("div",s,[Object(n["c"])("div",f,[b,Object(n["c"])("h2",null,Object(n["k"])(r.currentStudy)+"hrs",1)]),Object(n["c"])("div",d,[Object(n["c"])("h3",p,"Last "+Object(n["k"])(r.lastFrecuency)+" - "+Object(n["k"])(r.previousStudy)+"hrs",1)])])])}r("a9e3");var v={props:{currentStudy:Number,previousStudy:Number,lastFrecuency:String}},N=(r("ba8f"),r("6b0d")),h=r.n(N);const g=h()(v,[["render",l],["__scopeId","data-v-ea2f00e4"]]);e["default"]=g}}]);
//# sourceMappingURL=chunk-96c787be.2224a83f.js.map