import $ from 'jquery'

export default (iframe, css) => {
    const document = iframe.contents()[0]
    const head = iframe.contents().find('head:first')
    $.each(css, (i, href) => {
        $(document.createElement('link')).attr({
            href,
            rel: 'stylesheet',
        })
        .appendTo(head)
    })
}
