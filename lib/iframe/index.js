'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Create iframe
  var iframe = document.createElement('iframe');
  var $iframe = (0, _jquery2['default'])(iframe).attr({
    src: 'about:blank',
    allowtransparency: true,
    frameborder: 0,
    scrolling: 'no'
  });
  $iframe[options.insertMethod](el);

  // Initialize document
  var iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(options.template || _template2['default']);
  iframeDocument.close();

  return $iframe;
};

module.exports = exports['default'];