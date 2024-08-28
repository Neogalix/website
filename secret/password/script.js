let input = document.getElementById('input')
let text2 = document.getElementById('text2')
function conf() {
    if (input.value == '1488') {
        location.href = '../vip/index.html'
    } else {
        text2.textContent = 'Пароль неверный!'
    }
}