'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (iframe, css) {
  var document = iframe.contents()[0];
  var head = iframe.contents().find('head:first');
  _jquery2.default.each(css, function (i, href) {
    (0, _jquery2.default)(document.createElement('link')).attr({
      href: href,
      rel: 'stylesheet'
    }).appendTo(head);
  });
};