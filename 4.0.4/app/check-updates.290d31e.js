!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=43)}({43:function(n,e,t){"use strict";function r(n,e,t,r,o,i,c){try{var a=n[i](c),u=a.value}catch(n){return void t(n)}a.done?e(u):Promise.resolve(u).then(r,o)}function o(n){return function(){var e=this,t=arguments;return new Promise(function(o,i){var c=n.apply(e,t);function a(n){r(c,o,i,a,u,"next",n)}function u(n){r(c,o,i,a,u,"throw",n)}a(void 0)})}}t.r(e),t.d(e,"checkForUpdates",function(){return c}),t.d(e,"checkForPluginUpdates",function(){return u});const i={credentials:"same-origin",headers:new Headers({Accept:"application/json"})};function c(){return a.apply(this,arguments)}function a(){return(a=o(function*(){const n=yield fetch("".concat(blessing.base_url,"/admin/update/check"),i);if(n.ok){const e=yield n.json(),t=document.querySelector('[href="'.concat(blessing.base_url,'/admin/update"]'));e.available&&t&&(t.innerHTML+='\n        <span class="pull-right-container">\n          <span class="label label-primary pull-right">1</span>\n        </span>')}})).apply(this,arguments)}function u(){return l.apply(this,arguments)}function l(){return(l=o(function*(){const n=yield fetch("".concat(blessing.base_url,"/admin/plugins/market/check"),i);if(n.ok){const e=yield n.json(),t=document.querySelector('[href="'.concat(blessing.base_url,'/admin/plugins/market"]'));e.available&&t&&(t.innerHTML+='\n        <span class="pull-right-container">\n          <span class="label label-success pull-right">'.concat(e.plugins.length,"</span>\n        </span>"))}})).apply(this,arguments)}c(),u()}});