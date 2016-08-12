import $ from 'jquery'

export default (iframe, css) => {
  const document = iframe.contents()[0]
  const head = iframe.contents().find('head:first')
  $.each(css, (i, href) => {
    const link = $(document.createElement('link'))
    link.attr({
      href,
      rel: 'stylesheet'
    })
    link.appendTo(head)
  })
}
