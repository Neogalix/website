let input = document.getElementById('input')
let text2 = document.getElementById('text2')
function conf() {
    if (input.value == 'Бебра') {
        location.href = 'secret_main/index.html'
    } else {
        text2.textContent = 'Пароль неверный!'
    }
}