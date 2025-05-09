let displayMain = document.getElementById('display_main')
let display1 = document.getElementById('display1')
let display2 = document.getElementById('display2')
let display3 = document.getElementById('display3')
let notes = document.getElementById('notes')
let notesVis = 0
let notesButton = document.getElementById('notes_button')
function press(x) {
    displayMain.value += x
}
function calc() {
    displayMain.value = eval(displayMain.value)
}
function clear_main() {
    displayMain.value = ''
}
function clear1() {
    display1.value = ''
}
function clear2() {
    display2.value = ''
}
function clear3() {
    display3.value = ''
}
function notes_visibility() {
    if (notesVis == 0) {
        notes.style.display = 'block'
        notesVis = 1
        notesButton.textContent = 'Заметки: Вкл'
    } else {
        notes.style.display = 'none'
        notesVis = 0
        notesButton.textContent = 'Заметки: Выкл'
    }
}