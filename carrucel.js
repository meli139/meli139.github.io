const galleryCarousel = document.querySelector('.gallery-carousel');
let currentIndex = 0;

function moveNext() {
  const imageWidth = galleryCarousel.querySelector('img').offsetWidth;
  currentIndex++;
  if (currentIndex >= galleryCarousel.children.length) {
    currentIndex = 0;
  }
  galleryCarousel.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
}

setInterval(moveNext, 2000); // Mueve automáticamente cada 2 segundos
