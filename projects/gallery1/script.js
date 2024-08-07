let photos = [
    '../../img/carousel1.webp',
    '../../img/carousel2.webp',
    '../../img/carousel3.webp',
    '../../img/carousel4.webp',
]
let thumbnails = document.querySelectorAll('.gallery__preview-photo')
let fullPhoto = document.querySelector('.full-photo')
let addThumbnailClickHandler = function(thumbnail, photo) {
    thumbnail.addEventListener('click', function() {
        fullPhoto.src = photo
    })
}
for (let i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i], photos[i])
}