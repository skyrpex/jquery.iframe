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
  let iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(options.template || template);
  iframeDocument.close();

  return $(iframe);
};
