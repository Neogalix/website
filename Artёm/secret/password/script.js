let password = 'фтчdяясiсъмбюцйьsуавиjрсчтфtчфзччылсыuвтйъяюсnьугимиbчлсвмзвачъtчлдьчя'
let input = document.getElementById('input')
let text2 = document.getElementById('text2')
let engAlphabet = 'abcdefghijklmnopqrstuvwxyz'
let rusAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
let endPassword = ''
for (let i=0; i < password.length; i++) {
    if (rusAlphabet.includes(password[i]) == false) {
        if (password[i] != 'a') {
            endPassword += engAlphabet[engAlphabet.indexOf(password[i]) - 1]
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