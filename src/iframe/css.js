import $ from 'jquery';

export default (iframe, css) => {
  let document = iframe.contents()[0];
  let head = iframe.contents().find('head:first');
  $.each(css, (i, href) => {
    $(document.createElement('link'))
      .attr({
        href,
        rel: 'stylesheet',
      })
      .appendTo(head);
  });
};
