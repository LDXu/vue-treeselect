export function onLeftClick(mouseDownHandler) {
  return function onMouseDown(evt, ...args) {
    if (evt.type === 'touchstart' || evt.button === 0) {
      mouseDownHandler.call(this, evt, ...args)
    }
  }
}
