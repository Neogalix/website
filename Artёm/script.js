function myProjects() {
    location.href = 'projects/main/index.html'
}
function vip() {
    location.href = 'secret/password page/index.html'
}
let a = 0
let vipBtn = document.getElementById('vip-btn')
let images = document.getElementsByClassName('previp-img')
function clickImg() {
    a += 1
    if (a >= 10) {
        vipBtn.style.display = 'block'
    }
    if (a >= 1488) {
        for (const img of images) {
            img.src = 'img/svaston.png'
        }
    }
}
