"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (_ref) {
  var iframe = _ref.iframe,
      attribute = _ref.attribute,
      el = _ref.el,
      interval = _ref.interval;

  var lastHeight = null;
  setInterval(function () {
    var height = el.outerHeight(true);
    if (lastHeight === null || lastHeight !== height) {
      iframe.css(attribute, height + "px");
      lastHeight = height;
    }
  }, interval);
};

module.exports = exports["default"];