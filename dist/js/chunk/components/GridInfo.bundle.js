(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{57:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-wrapper"},t._l(t.memos,(function(e,r){return n("div",{key:r,staticClass:"grid"},[n("div",{staticClass:"memo"},[n("div",{staticClass:"memo-title",domProps:{textContent:t._s(e.title)}}),t._v(" "),e.content?n("markdown",{staticClass:"memo-content",attrs:{"custom-setting":["link","strong","paragraph"],content:e.content}}):t._e(),t._v(" "),e.items?t._l(e.items,(function(e,r){return n("div",{key:r,staticClass:"memo-item"},[n("div",{staticClass:"memo-item-title",domProps:{textContent:t._s(e.title)}}),t._v(" "),e.content?n("markdown",{staticClass:"memo-item-content",attrs:{"custom-setting":["link","strong","paragraph"],content:e.content}}):t._e()],1)})):t._e()],2)])})),0)};r._withStripped=!0;var o=n(29),c=n(0);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={components:{Markdown:o.a},filters:{},props:{memos:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:s({},Object(c.c)([])),watch:{},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){},methods:s(s({},Object(c.b)({})),Object(c.d)({}))},p=n(1),m=Object(p.a)(u,r,[],!1,null,"52c272ee",null);m.options.__file="components/GridInfo/main.vue";e.a=m.exports}}]);