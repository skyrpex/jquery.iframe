import $ from 'jquery'
import template from './template.html'

export default (el, options = {}) => {
    // Create iframe
    const iframe = document.createElement('iframe')
    const $iframe = $(iframe).attr({
        src: 'about:blank',
        allowtransparency: true,
        frameborder: 0,
        scrolling: 'no',
    })
    $iframe[options.insertMethod](el)

    // Initialize document
    const iframeDocument = iframe.contentWindow.document
    iframeDocument.open()
    iframeDocument.write(options.template || template)
    iframeDocument.close()

    return $(iframe)
}
