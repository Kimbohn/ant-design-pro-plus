(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{YmWs:function(e,r,n){"use strict";n.r(r);var t=n("Ico4"),a=n.n(t),c=n("UWy3"),u=n.n(c),o=n("t3Un");function s(e){return p.apply(this,arguments)}function p(){return p=u()(a.a.mark(function e(r){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o["a"])("/api/".concat(r)));case 1:case"end":return e.stop()}},e)})),p.apply(this,arguments)}r["default"]={namespace:"error",state:{error:"",isloading:!1},effects:{query:a.a.mark(function e(r,n){var t,c,u;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=r.payload,c=n.call,u=n.put,e.next=4,c(s,t.code);case 4:return e.next=6,u({type:"trigger",payload:t.code});case 6:case"end":return e.stop()}},e)})},reducers:{trigger:function(e,r){return{error:r.payload}}}}}}]);