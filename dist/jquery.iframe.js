!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?exports["jquery.iframe"]=t(require("jquery")):e["jquery.iframe"]=t(e.jQuery)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(1),u=r(a),i=n(3),o=r(i),d=n(4),l=r(d),f=n(2),c=r(f);u["default"].iframe=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];t=u["default"].extend(!0,{insertMethod:"appendTo",css:[],sync:{attribute:"height",interval:10}},t);var n=(0,o["default"])(e,t);return(0,c["default"])(n,t.css),(0,l["default"])({iframe:n,el:n.contents().find("html"),attribute:t.sync.attribute,interval:t.sync.interval}),n},u["default"].fn.iframify=function(e){return e=u["default"].extend(!0,{wrapChildren:!1},e),e.wrapChildren&&(e.insertMethod=e.wrapChildren?"appendTo":"insertBefore"),this.map(function(){var t=e.wrapChildren?(0,u["default"])(this).children().detach():(0,u["default"])(this).detach(),n=u["default"].iframe(this,e);return n.contents().find("body").append(t),n})}},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=r(a);t["default"]=function(e,t){var n=e.contents()[0],r=e.contents().find("head:first");u["default"].each(t,function(e,t){var a=(0,u["default"])(n.createElement("link"));a.attr({href:t,rel:"stylesheet"}),a.appendTo(r)})},e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=r(a),i=n(5),o=r(i);t["default"]=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=document.createElement("iframe"),r=(0,u["default"])(n).attr({src:"about:blank",allowtransparency:!0,frameborder:0,scrolling:"no"});r[t.insertMethod](e);var a=n.contentWindow.document;return a.open(),a.write(t.template||o["default"]),a.close(),r},e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=e.iframe,n=e.attribute,r=e.el,a=e.interval,u=null;setInterval(function(){var e=r.outerHeight(!0);null!==u&&u===e||(t.css(n,e+"px"),u=e)},a)},e.exports=t["default"]},function(e,t){e.exports='<!DOCTYPE html> <html> <head> <meta charset=utf-8> <meta http-equiv=X-UA-Compatible content="IE=edge"> <meta name=viewport content="width=device-width,initial-scale=1"> </head> <body> </body> </html>'}])});
//# sourceMappingURL=jquery.iframe.js.map