function myProjects() {
    location.href = 'main/index.html'
}
function vip() {
    location.href = 'secret/index.html'
}
let a = 0
let vipBtn = document.getElementById('vip-btn')
function clickImg4() {
    a += 1
    if (a == 6) {
        vipBtn.style.display = 'block'
    }
}
