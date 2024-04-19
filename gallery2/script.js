let photos = [
    '../img/carousel1.webp',
    '../img/carousel2.webp',
    '../img/carousel3.webp',
    '../img/carousel4.webp',
]
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0
    const slides = document.querySelectorAll('.gallery-carousel .photos img')
    const totalSlides = slides.length
    document.querySelector('.prev').addEventListener('click', function() {
        changeSlides(-1)
    })
    document.querySelector('.next').addEventListener('click', function() {
        changeSlides(1)
    })
    let changeSlides = function(direction) {
        slides[currentSlide].style.display = 'none'
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides
        slides[currentSlide].style.display = 'block'
    }
})