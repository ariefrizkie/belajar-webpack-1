(()=>{"use strict";var e,r={198:(e,r,t)=>{var o=t(486),n=t.n(o);const a=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.every((e=>"number"==typeof e&&!isNaN(e)))};var l,s,i;t(508),l=new class{constructor(){this.error=document.querySelector("#error")}tampilkanErrorPenjumlahan=(e,r)=>{const t=e.reduce(((e,t,o)=>a(r[o])?e+"":e+`${t} itu bukan angka! `),"Silahkan masukkan angka yang benar: ");this.error.classList.remove("d-none"),this.error.innerText=t};sembunyikanError=()=>this.error.classList.add("d-none")},s=new class{constructor(){this.operand1=document.querySelector("#operand1"),this.operand2=document.querySelector("#operand2"),this.tombolTambah=document.querySelector("#tombol-tambah"),this.hasil=document.querySelector("#hasil")}getInput(){return[this.operand1.value,this.operand2.value]}setResult(e,r){this.hasil.innerText=e+r}onClick(e){this.tombolTambah.addEventListener("click",e)}},i=new class{constructor(){this.tombolJokes=document.querySelector("#jokes-receh"),this.modalBody=document.querySelector(".modal-body")}setModal(e){this.modalBody.innerHTML=e}onClick(e){this.tombolJokes.addEventListener("click",e)}},l.sembunyikanError(),s.onClick((()=>{l.sembunyikanError();const e=s.getInput(),r=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.map((e=>parseInt(e)))}(...e);if(a(...r)){const[e,t]=r;s.setResult(e,t)}else s.setResult(""),l.tampilkanErrorPenjumlahan(e,r)})),i.onClick((()=>{fetch("https://candaan-api.vercel.app/api/text/random").then((e=>e.json())).then((e=>{i.setModal(e.data)}))})),console.log(n().toUpper("hello from index.js"))},508:(e,r,t)=>{t.r(r),t(138),t(662)}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return r[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=r,e=[],o.O=(r,t,n,a)=>{if(!t){var l=1/0;for(u=0;u<e.length;u++){for(var[t,n,a]=e[u],s=!0,i=0;i<t.length;i++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](t[i])))?t.splice(i--,1):(s=!1,a<l&&(l=a));if(s){e.splice(u--,1);var c=n();void 0!==c&&(r=c)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,n,a]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var n,a,[l,s,i]=t,c=0;if(l.some((r=>0!==e[r]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(i)var u=i(o)}for(r&&r(t);c<l.length;c++)a=l[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},t=self.webpackChunkbelajar_webpack_code=self.webpackChunkbelajar_webpack_code||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=o.O(void 0,[811],(()=>o(198)));n=o.O(n)})();