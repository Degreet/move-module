function setMove(params={}) {
  const el = params.moveEl
  const trigger = params.trigger || el

  if (el) {
    const width = (trigger || el).offsetWidth / 2
    const height = (trigger || el).offsetHeight / 2

    trigger.onmousedown = function() {
      el.style.userSelect = "none"
      onmousemove = e => {
        const x = e.pageX - width
        const y = e.pageY - height
        el.style.transform = `translate(${x}px, ${y}px)`
      }

      onmouseup = () => {
        onmousemove = null
        el.style.userSelect = "unset"
      }
    }
  }
}