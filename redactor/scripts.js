let text = document.getElementById('text')
const colors = document.querySelectorAll('.color')
for (const color of colors) {
  color.addEventListener('click', function() {
    text.style.color = color.value
  })
}
let format = [0, 0, 0]
let btnBold = document.getElementById('bold')
let btnItalic = document.getElementById('italic')
let btnUnderline = document.getElementById('underline')
let input = document.getElementById('input')
btnBold.addEventListener('click', function() {
  if (format[0] == 0) {
    format[0] = 1
    btnBold.style.backgroundColor = '#A2A2D0'
  } else {
    format[0] = 0
    btnBold.style.backgroundColor = 'buttonface'
  }
})
btnItalic.addEventListener('click', function() {
  if (format[1] == 0) {
    format[1] = 1
    btnItalic.style.backgroundColor = '#A2A2D0'
  } else {
    format[1] = 0
    btnItalic.style.backgroundColor = 'buttonface'
  }
})
btnUnderline.addEventListener('click', function() {
  if (format[2] == 0) {
    format[2] = 1
    btnUnderline.style.backgroundColor = '#A2A2D0'
  } else {
    format[2] = 0
    btnUnderline.style.backgroundColor = 'buttonface'
  }
})
function confirm() {
  if (format[0] == 1) {
    text.style.fontWeight = 'bold'
  }
  if (format[0] == 0) {
    text.style.fontWeight = 'normal'
  }
  if (format[1] == 1) {
    text.style.fontStyle = 'italic'
  }
  if (format[1] == 0){
    text.style.fontStyle = 'normal'
  }
  if (format[2] == 1) {
    text.style.textDecoration = 'underline'
  }
  if (format[2] == 0){
    text.style.textDecoration = 'none'
  }
  text.style.fontSize = input.value + 'px'
}
function reset() {
  format = [0, 0, 0]
  text.style.fontWeight = 'normal'
  text.style.fontStyle = 'normal'
  text.style.textDecoration = 'none'
  text.style.fontSize = '20px'
  text.style.color = '#000'
}
function clearText() {
  text.value = ''
}