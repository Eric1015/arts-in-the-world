!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=3)}([function(n,t){n.exports=require("Scene")},function(n,t){n.exports=require("Diagnostics")},function(n,t){n.exports=require("TouchGestures")},function(n,t,e){e(0),e(1),e(4);e(5).switchAnimation()},function(n,t,e){const o=e(0),r=(e(1),e(2));n.exports={home:function(){Promise.all([o.root.findFirst("start_button"),o.root.findFirst("home_text"),o.root.findFirst("command"),o.root.findFirst("Argon")]).then((function(n){const t=n[0],e=n[1],o=n[2],i=n[3];r.onTap(t).subscribe((function(n){t.hidden=!0,e.hidden=!0,o.hidden=!1,i.hidden=!1})),i.transform.x=0,i.transform.y=0,i.transform.z=-.5}))}}},function(n,t,e){const o=e(0),r=(e(1),e(2)),i=e(6),u=e(7);e(8),e(9);n.exports={command:function(){Promise.all([o.root.findFirst("Argon"),o.root.findByPath("**/canvas0/command/*")]).then((function(n){const t=n[0],e=n[1];!function(n,t){const e=t.transform;for(let t=0;t<n.length;t++)r.onTap(n[t]).subscribe((function(n){0===t?e.x=i.val(e.x.pinLastValue()+.1):1===t?e.x=i.val(e.x.pinLastValue()-.1):e.z=i.val(e.z.pinLastValue()-.1)}))}(e,t),function(n,t){for(let e=0;e<n.length;e++){const o=t.transform;r.onLongPress(n[e]).subscribe((function(n){if(0===e){const t=u.setInterval((function(){o.x=i.val(o.x.pinLastValue()+.03)}),50);n.state.monitor().subscribe((function(n){"ENDED"===n.newValue&&u.clearInterval(t)}))}else if(1===e){const t=u.setInterval((function(){o.x=i.val(o.x.pinLastValue()-.03)}),50);n.state.monitor().subscribe((function(n){"ENDED"===n.newValue&&u.clearInterval(t)}))}else{const t=u.setInterval((function(){o.z=i.val(o.z.pinLastValue()-.03)}),50);n.state.monitor().subscribe((function(n){"ENDED"===n.newValue&&u.clearInterval(t)}))}}))}}(e,t)}))},switchAnimation:function(){}}},function(n,t){n.exports=require("Reactive")},function(n,t){n.exports=require("Time")},function(n,t){n.exports=require("Animation")},function(n,t){n.exports=require("Audio")}]);