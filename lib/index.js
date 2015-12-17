'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _iframe = require('./iframe');

var _iframe2 = _interopRequireDefault(_iframe);

var _sync = require('./iframe/sync');

var _sync2 = _interopRequireDefault(_sync);

var _css = require('./iframe/css');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.iframe = function (el) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  // Default options
  options = _jquery2.default.extend(true, {
    insertMethod: 'appendTo',
    css: [],
    sync: {
      attribute: 'height',
      interval: 10
    }
  }, options);

  // Create iframe
  var iframe = (0, _iframe2.default)(el, options);

  // Add CSS links
  (0, _css2.default)(iframe, options.css);

  // Sync height
  (0, _sync2.default)({
    iframe: iframe,
    el: iframe.contents().find('html'),
    attribute: options.sync.attribute,
    interval: options.sync.interval
  });

  return iframe;
};

_jquery2.default.fn.iframify = function (options) {
  options = _jquery2.default.extend(true, {
    wrapChildren: false
  }, options);

  if (options.wrapChildren) {
    options.insertMethod = options.wrapChildren ? 'appendTo' : 'insertBefore';
  }

  return this.map(function () {
    var contents = options.wrapChildren ? (0, _jquery2.default)(this).children().detach() : (0, _jquery2.default)(this).detach();
    var iframe = _jquery2.default.iframe(this, options);
    iframe.contents().find('body').append(contents);
    return iframe;
  });
};