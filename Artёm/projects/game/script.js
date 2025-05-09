let rows = 38
let columns = 80
let parentDiv = document.getElementById('parent')
let squares = document.getElementsByClassName('square')
let cond2 = []
let p = 0

for (const square of squares) {
    square.style.backgroundColor = 'white'
    square.addEventListener('click', function () {
        if (square.style.backgroundColor == 'white') {
            square.style.backgroundColor = 'black'
        } else {
            square.style.backgroundColor = 'white'
        }
    })
}

function step() {
    let cond1 = []
    for (const square of squares) {
        if (square.style.backgroundColor == 'white') {
            cond1.push(0)
        } else {
            cond1.push(1)
        }
    }
    let s = []
    for (let i=0; i<cond1.length; i++) {
        let s1 = i-columns-1
        let s2 = i-columns
        let s3 = i-columns+1
        let s4 = i-1
        let s5 = i+1
        let s6 = i+columns-1
        let s7 = i+columns
        let s8 = i+columns+1
        let square = cond1[i]
        if (i==0) {
            s = [s5, s7, s8]
        } else if (i==columns-1) {
            s = [s4, s6, s7]
        } else if (i==columns*(rows-1)) {
            s = [s2, s3, s5]
        } else if (i==columns*rows-1) {
            s = [s1, s2, s4]
        } else if (i>0 && i<columns-1) {
            s = [s4, s5, s6, s7, s8]
        } else if (i>=columns && i%columns==0 && i<columns*(rows-1)) {
            s = [s2, s3, s5, s7, s8]
        } else if (i>columns && (i+1)%columns==0 && i<columns*rows-1) {
            s = [s1, s2, s4, s6, s7]
        } else if (i>columns*(rows-1) && i<columns*rows-1) {
            s = [s1, s2, s3, s4, s5]
        } else {
            s = [s1, s2, s3, s4, s5, s6, s7, s8]
        }
        let counter = 0
        for (const sq of s) {
            if (cond1[sq] == 1) {
                counter++
            }
        }
        if (counter == 3) {
            cond2.push(1)
        } else if (counter == 2 && square == 1) {
            cond2.push(1)
        } else {
            cond2.push(0)
        }
    }
    for (let i=0; i<cond2.length; i++) {
        if (cond2[i] == 0) {
            squares[i].style.backgroundColor = 'white'
        } else {
            squares[i].style.backgroundColor = 'black'
        }
    }
    cond1 = cond2
    cond2 = []
}

function start() {
    if (p != 1) {
        interval = setInterval(step, 100)
        p = 1
    }
}
function stop() {
    if (p == 1) {
        clearInterval(interval)
        p = 0
    }
}