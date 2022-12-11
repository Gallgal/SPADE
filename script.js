/* Constants */
const mouse = {
  x: 0,
  y: 0,
  smoothX: 0,
  smoothY: 0
}

const cursorPoint = document.querySelector('.cursor__point')
const cursorLight = document.querySelector('.cursor__light')
const light = document.querySelector('#point-light')
const turbulence = document.querySelector('#turbulence')
let noise = 0

/* Get mouse coordinates */
function onMouseMove (e) {
  mouse.x = e.pageX
  mouse.y = e.pageY
}
window.addEventListener('mousemove', onMouseMove)

/* Animate */
function tick () {
  // Move light
  light.setAttribute('x', mouse.smoothX)
  light.setAttribute('y', mouse.smoothY)
  
  // Noise
  noise += 0.5
  turbulence.setAttribute('seed', Math.round(noise))
  
  // Move cursor
  cursorPoint.style.transform = 'translate3d(' + mouse.x + 'px, ' + mouse.y + 'px, 0)'
  cursorLight.style.transform = 'translate3d(' + mouse.smoothX + 'px, ' + mouse.smoothY + 'px, 0)'
  
  // Smooth mouse
  mouse.smoothX += (mouse.x - mouse.smoothX) * 0.1
  mouse.smoothY += (mouse.y - mouse.smoothY) * 0.1
  
  requestAnimationFrame(tick)
}
tick()

document.onmousedown = function leftClick(){window.location = './here/index.html';};