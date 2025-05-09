let body = document.getElementsByTagName('body')
let elements = document.getElementsByClassName('element')
let buttons = document.getElementsByTagName('button')
let robloxIcon = document.getElementById('roblox-icon')
let imgsInElements = document.getElementsByClassName('img-in-element')
let infoCard = document.getElementById('info-card')
let cards = document.getElementsByClassName('card')
let galleryImgs = document.getElementsByClassName('gallery-img')
let qImgs = document.getElementsByClassName('q')
let quoteImg = document.getElementById('quote-img')
let theme = 'dark'
let themeBodyBackgroundColor, themeColor, themeElementBorderColor, themeElementBackgroundColor, themeElementBackgroundColorHover, themeImgColor = ''

function change() {
    // Проверка темы, определение цветов
    if (theme == 'dark') {
        theme = 'light'
        themeBodyBackgroundColor = 'white'
        themeColor = 'black'
        themeElementBorderColor = 'black'
        themeElementBackgroundColor = '#eaeaea'
        themeElementBackgroundColorHover = '#ddd'
        themeImgColor = 'dark'
    } else {
        theme = 'dark'
        themeBodyBackgroundColor = 'black'
        themeColor = 'white'
        themeElementBorderColor = 'white'
        themeElementBackgroundColor = '#0f0f0f'
        themeElementBackgroundColorHover = '#1a1a1a'
        themeImgColor = 'light'
    }
    // Установка цвета фона странички
    body[0].style.backgroundColor = themeBodyBackgroundColor
    // Установка цвета текста на страничке
    body[0].style.color = themeColor
    // Установка цветов для всех "элементов"
    for (const element of elements) {
        element.style.borderColor = themeElementBorderColor
        element.style.backgroundColor = themeElementBackgroundColor
    }
    // Установка цветов для всех кнопок
    for (const button of buttons) {
        button.style.color = themeColor
        button.addEventListener('mouseenter', function() {
            button.style.backgroundColor = themeElementBackgroundColorHover
        })
        button.addEventListener('mouseleave', function() {
            button.style.backgroundColor = themeElementBackgroundColor
        })
    }
    // Установка правильного цвета для robloxIcon
    if (robloxIcon != null) {
        robloxIcon.src = `img/icons/roblox icon ${themeImgColor}.png`
    }
    // Установка borderColor для всех кликабельных картинок на главной странице
    for (const imgInElement of imgsInElements) {
        imgInElement.style.borderColor = themeElementBorderColor
    }
    // Установка цветов для infoCard
    if (infoCard != null) {
        infoCard.style.borderColor = themeElementBorderColor
        infoCard.style.backgroundColor = themeElementBackgroundColor
        infoCard.addEventListener('mouseenter', function() {
            infoCard.style.backgroundColor = themeElementBackgroundColorHover
        })
        infoCard.addEventListener('mouseleave', function() {
            infoCard.style.backgroundColor = themeElementBackgroundColor
        })
    }
    // Установка цветов для всех карточек на странице с проектами
    for (const card of cards) {
        card.style.borderColor = themeElementBorderColor
        card.style.backgroundColor = themeElementBackgroundColor
        card.addEventListener('mouseenter', function() {
            card.style.backgroundColor = themeElementBackgroundColorHover
        })
        card.addEventListener('mouseleave', function() {
            card.style.backgroundColor = themeElementBackgroundColor
        })
    }
    // Установка правильного цвета для всех galleryImgs
    for (const galleryImg of galleryImgs) {
        galleryImg.src = `../../img/projects/gallery ${themeImgColor}.png`
    }
    // Установка правильного цвета для всех qImgs
    for (const qImg of qImgs) {
        qImg.src = `../../img/projects/question ${themeImgColor}.png`
    }
    // Установка правильного цвета для quoteImg
    if (quoteImg != null) {
        quoteImg.src = `../../img/projects/quote ${themeImgColor}.png`
    }
}