!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("Materials")},function(e,t){e.exports=require("Scene")},function(e,t){e.exports=require("Diagnostics")},function(e,t){e.exports=require("TouchGestures")},function(e,t,n){n(0),n(1),n(2),n(3);n(5).objectUI()},function(e,t,n){n(0);const o=n(1),r=n(2),i=n(3),a=n(6),u=n(7),c=n(8),s=(n(9),n(10));u.worldTransform,c.captureDevicePosition;e.exports={objectUI:function(){Promise.all([o.root.findByPath("planeTracker0/*"),o.root.findByPath("**/canvas0/rectangle_button"),o.root.findByPath("**/canvas0/rectangle0/*"),o.root.findFirst("rectangle0")]).then((function(e){r.log("Start!");const t=e[0],n=e[1][0],o=e[2];e[3];!function(e){for(let t=0;t<e.length;t++)e[t].transform.scaleX=8,e[t].transform.scaleY=8,e[t].transform.scaleZ=8,e[t].transform.z=-1,e[t].cameraVisibility.forBackCamera=!1}(t),i.onTap().subscribe((function(e){t[0].cameraVisibility.forBackCamera=!0,o.forEach((function(e){e.hidden=!0})),n.hidden=!1}));const u=t[0].transform;i.onRotate(t[0]).subscribe((function(e){const t=u.rotationY.pinLastValue();u.rotationY=e.rotation.mul(-1).add(t)})),o.forEach((function(e){e.hidden=!0})),function(e,t,n){const o=t[n].transform;for(let t=0;t<e.length;t++)i.onTap(e[t]).subscribe((function(e){0===t?o.z=a.val(o.z.pinLastValue()-.2):1===t?o.x=a.val(o.x.pinLastValue()+.2):2===t?o.x=a.val(o.x.pinLastValue()-.2):3===t?o.z=a.val(o.z.pinLastValue()+.2):o.y=4===t?a.val(o.y.pinLastValue()+.2):a.val(o.y.pinLastValue()-.2)}))}(o,t,0),i.onLongPress(n).subscribe((function(e){r.log("Long!"),o.forEach((function(e){e.hidden=!1})),n.hidden=!0}));s.setText("text0","Type your location before share"),i.onTap(n).subscribe((function(e){s.enterTextEditMode("text0")})),s.getText("text0").monitor().subscribe((function(e){r.log("You entered "+e.newValue)})),r.log("Finish!")}))}}},function(e,t){e.exports=require("Reactive")},function(e,t){e.exports=require("DeviceMotion")},function(e,t){e.exports=require("CameraInfo")},function(e,t){e.exports=require("Instruction")},function(e,t){e.exports=require("NativeUI")}]);