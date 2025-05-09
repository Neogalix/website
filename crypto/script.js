let f = document.getElementById("f")
let s = document.getElementById("s")
let btn = document.getElementById("btn")

let a = 100

btn.addEventListener("click", function () {
    f.style.height = f.offsetHeight - 1 + "px"
    s.style.height = s.offsetHeight + 1 + "px"
})