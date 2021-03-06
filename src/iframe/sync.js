export default ({ iframe, attribute, el, interval }) => {
  let lastHeight = null
  setInterval(() => {
    const height = el.outerHeight(true)
    if (lastHeight === null || lastHeight !== height) {
      iframe.css(attribute, `${height}px`)
      lastHeight = height
    }
  }, interval)
}
