// const scrollableDiv = document.querySelector('.img_wrapper')

// scrollableDiv.addEventListener('mousemove', (event) => {
//   // Calculate the movement distance
//   const movementX = event.movementX
//   //   console.log(movementX)

//   // Adjust the scroll position based on the movement
//   scrollableDiv.scrollLeft += movementX
// })
// scrollableDiv.addEventListener('mouseleave', (event) => {
//   scrollableDiv.scrollLeft = 0
// })

const scrollableDiv = document.getElementById('scrollableDiv')
const innerContent = document.getElementById('innerContent')

let isDragging = false
let startX = 0
let scrollLeft = 0

scrollableDiv.addEventListener('mousedown', (event) => {
  isDragging = true
  startX = event.pageX - scrollableDiv.offsetLeft
  //   console.log(startX)
  scrollLeft = scrollableDiv.scrollLeft
  //   console.log(scrollLeft)

  // Prevent text selection during dragging
  event.preventDefault()
})

scrollableDiv.addEventListener('mousemove', (event) => {
  if (!isDragging) return

  const x = event.pageX - scrollableDiv.offsetLeft
  const walk = (x - startX) * 1 // Adjust the scroll speed
  scrollableDiv.scrollLeft = scrollLeft - walk
  scrollableDiv.style.cursor = 'pointer'
})

scrollableDiv.addEventListener('mouseup', () => {
  isDragging = false
})

scrollableDiv.addEventListener('mouseleave', () => {
  isDragging = false
})

scrollableDiv.addEventListener('touchstart', (event) => {
  isDragging = true
})

scrollableDiv.addEventListener('touchmove', (event) => {
  if (isDragging) {
    const touch = event.touches[0]
    const newX = touch.clientX - movableDiv.offsetWidth / 2
    scrollableDiv.scrollLeft = newX
  }
})

scrollableDiv.addEventListener('touchend', (event) => {
  isDragging = false
})
