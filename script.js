function myProjects() {
    location.href = 'main/index.html'
}
function vip() {
    location.href = 'secret/index.html'
}
let a = 0
let vipBtn = document.getElementById('vip-btn')
function clickImg() {
    a += 1
    if (a == 10) {
        vipBtn.style.display = 'block'
    }
}
