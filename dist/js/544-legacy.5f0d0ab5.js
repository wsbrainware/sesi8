"use strict";(self["webpackChunksesi8"]=self["webpackChunksesi8"]||[]).push([[544],{2642:(e,s,t)=>{t.r(s),t.d(s,{startFocusVisible:()=>c});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o="ion-focused",n="ion-focusable",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=e=>{let s=[],t=!0;const c=e?e.shadowRoot:document,i=e||document.body,d=e=>{s.forEach((e=>e.classList.remove(o))),e.forEach((e=>e.classList.add(o))),s=e},a=()=>{t=!1,d([])},u=e=>{t=r.includes(e.key),t||d([])},v=e=>{if(t&&void 0!==e.composedPath){const s=e.composedPath().filter((e=>!!e.classList&&e.classList.contains(n)));d(s)}},E=()=>{c.activeElement===i&&d([])};c.addEventListener("keydown",u),c.addEventListener("focusin",v),c.addEventListener("focusout",E),c.addEventListener("touchstart",a),c.addEventListener("mousedown",a);const L=()=>{c.removeEventListener("keydown",u),c.removeEventListener("focusin",v),c.removeEventListener("focusout",E),c.removeEventListener("touchstart",a),c.removeEventListener("mousedown",a)};return{destroy:L,setFocus:d}}}}]);
//# sourceMappingURL=544-legacy.5f0d0ab5.js.map