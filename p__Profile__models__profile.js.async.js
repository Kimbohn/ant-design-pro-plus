(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{LY9D:function(e,a,n){"use strict";n.r(a);var t=n("mK77"),r=n.n(t),c=n("Ico4"),s=n.n(c),o=n("dCQc");a["default"]={namespace:"profile",state:{basicGoods:[],advancedOperation1:[],advancedOperation2:[],advancedOperation3:[]},effects:{fetchBasic:s.a.mark(function e(a,n){var t,r,c,p;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.payload,r=n.call,c=n.put,e.next=4,r(o["j"],t);case 4:return p=e.sent,e.next=7,c({type:"show",payload:p});case 7:case"end":return e.stop()}},e)}),fetchAdvanced:s.a.mark(function e(a,n){var t,r,c;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.call,r=n.put,e.next=3,t(o["i"]);case 3:return c=e.sent,e.next=6,r({type:"show",payload:c});case 6:case"end":return e.stop()}},e)})},reducers:{show:function(e,a){var n=a.payload;return r()({},e,n)}}}}}]);