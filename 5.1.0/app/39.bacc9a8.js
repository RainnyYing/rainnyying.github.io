(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{422:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return d}));var a=e(6),o=e(4),c=e(1);async function d(t){const n=t.target;n.disabled=!0;const e=n.textContent;n.innerHTML=`<i class="fas fa-spinner fa-spin"></i> ${Object(c.a)("admin.downloading")}`;const{code:d,message:i}=await Object(a.c)("/admin/update/download");n.textContent=e,n.disabled=!1,await Object(o.a)({mode:"alert",text:i}),0===d&&(location.href="/")}const i=document.querySelector("#update");null==i||i.addEventListener("click",d)}}]);