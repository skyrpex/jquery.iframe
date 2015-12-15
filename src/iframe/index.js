import $ from 'jquery';
import template from './template.html';

export default (el, options = {}) => {
  // Create iframe
  let iframe = document.createElement('iframe');
  let $iframe = $(iframe)
    .attr({
      allowtransparency: true,
      frameborder: 0,
      scrolling: 'no',
    });
  $iframe[options.insertMethod](el);

  // Initialize document
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(options.template || template);
  iframe.contentWindow.document.close();

  return $(iframe);
};
