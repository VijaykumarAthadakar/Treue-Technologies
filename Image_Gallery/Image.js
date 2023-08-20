const images = document.querySelectorAll('.image');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const closeBtn = document.querySelector('.close-btn');
let currentImageIndex = 0;

function showLightbox(index) {
    lightboxImg.src = images[index].querySelector('img').src;
    lightboxCaption.textContent = images[index].querySelector('.caption').textContent;
    lightbox.style.display = 'flex';
    currentImageIndex = index;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showLightbox(currentImageIndex);
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showLightbox(currentImageIndex);
}

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        showLightbox(index);
    });
});

nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);
closeBtn.addEventListener('click', closeLightbox);
