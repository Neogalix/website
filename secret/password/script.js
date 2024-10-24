let password = 'ъы2iъ1ъbыъьььыъmьъ1ьъmьыьъ3ыьpъьы1ъъx2ь1ьъ31ьыьf1ьъ2331fъыьыьъ1ьoы1ъь'
let input = document.getElementById('input')
let text2 = document.getElementById('text2')
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let endPassword = ''
for (let i=0; i < password.length; i++) {
    if (['1', '2', '3', 'ь', 'ы', 'ъ'].includes(password[i]) == false) {
        if (password[i] != 'a') {
            endPassword += alphabet[alphabet.indexOf(password[i]) - 1]
        } else {
            endPassword += 'z'
        }
    }
}
function conf() {
    if (input.value == endPassword) {
        location.href = '../vip/index.html'
    } else {
        text2.textContent = 'Пароль неверный!'
    }
}