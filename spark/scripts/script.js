!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),n(2),n(3),n(4);n(5).objectUI()},function(t,e){t.exports=require("Materials")},function(t,e){t.exports=require("Scene")},function(t,e){t.exports=require("Diagnostics")},function(t,e){t.exports=require("TouchGestures")},function(t,e,n){n(1);const r=n(2),o=n(3),a=n(4);t.exports={objectUI:function(){Promise.all([r.root.findByPath("planeTracker0/*"),r.root.findByPath("planeTracker0/*/plane")]).then((function(t){o.log("Start!");const e=t[0],n=t[1];!function(t){for(let e=0;e<t.length;e++)t[e].transform.scaleX=8,t[e].transform.scaleY=8,t[e].transform.scaleZ=8,t[e].transform.z=-1,t[e].cameraVisibility.forBackCamera=!1}(e),function(t){for(let e=0;e<t.length;e++)t[e].transform.scaleX=.6,t[e].transform.scaleY=.6}(n),a.onTap().subscribe((function(t){e[0].cameraVisibility.forBackCamera=!0}));for(let t=0;t<n.length;t++){const e=n[t].transform;a.onPan(n[t]).subscribe((function(t){const n=r.unprojectToFocalPlane(t.location);e.x=n.x,e.y=n.y}))}for(let t=0;t<n.length;t++)a.onRotate(n[t]).subscribe((function(e){const r=n[t].transform,o=r.rotationY.pinLastValue();r.rotationY=e.rotation.mul(-1).add(o)}));o.log("Finish!")}))}}}]);