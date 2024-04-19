let text = document.querySelector('#text')
const colors = document.querySelectorAll('.color')
for (const color of colors) {
  color.addEventListener('click', function() {
    text.style.color = color.value
  })
}
let format = [0, 0, 0]
let btnBold = document.querySelector('#bold')
let btnItalic = document.querySelector('#italic')
let btnUnderline = document.querySelector('#underline')
btnBold.addEventListener('click', function() {
  if (format[0] == 0) {
    format[0] = 1
    text.style.fontWeight = 'bold'
  } else {
    format[0] = 0
    text.style.fontWeight = 'normal'
  }
})
btnItalic.addEventListener('click', function() {
  if (format[1] == 0) {
    format[1] = 1
    text.style.fontStyle = 'italic'
  } else {
    format[1] = 0
    text.style.fontStyle = 'normal'
  }
})
btnUnderline.addEventListener('click', function() {
  if (format[2] == 0) {
    format[2] = 1
    text.style.textDecoration = 'underline'
  } else {
    format[2] = 0
    text.style.textDecoration = 'none'
  }
})