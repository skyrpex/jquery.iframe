import $ from 'jquery';
import createIframe from './iframe';
import sync from './iframe/sync';
import css from './iframe/css';

$.iframe = function(el, options = {}) {
  // Default options
  options = $.extend(true, {
    insertMethod: 'appendTo',
    css: [],
    sync: {
      attribute: 'height',
      interval: 10,
    },
  }, options);

  // Create iframe
  let iframe = createIframe(el, options);

  // Add CSS links
  css(iframe, options.css);

  // Sync height
  sync({
    iframe,
    el: iframe.contents().find('html'),
    attribute: options.sync.attribute,
    interval: options.sync.interval,
  });

  return iframe;
};

$.fn.iframify = function(options) {
  options = $.extend({}, options, { insertMethod: 'insertBefore' });
  return this.map(function() {
    let iframe = $.iframe(this, options);
    iframe.contents().find('body').append(this);
    return iframe;
  });
};
