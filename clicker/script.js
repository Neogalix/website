let clicksBlock = document.getElementById('clicks-block')
let smth1Block = document.getElementById('smth1')
let clicks = 0
let smth1 = 0

function pushed() {
    clicks += 1
    clicksBlock.textContent = clicks
    if (clicks == 10) {
        clicks -= 10
        smth1 += 1
        smth1Block.textContent = smth1
    }
}