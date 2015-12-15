"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var iframe = _ref.iframe;
  var attribute = _ref.attribute;
  var el = _ref.el;
  var interval = _ref.interval;

  var lastHeight = null;
  setInterval(function () {
    var height = el.outerHeight(true);
    if (lastHeight === null || lastHeight !== height) {
      iframe.css(attribute, height + "px");
      lastHeight = height;
    }
  }, interval);
};