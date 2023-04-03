const images = document.querySelectorAll('.carousel img');
let index = 0;

function showImage(index) {
  images.forEach(image => image.classList.remove('active'));
  images[index].classList.add('active');
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

document.addEventListener('DOMContentLoaded', function() {
  showImage(index);
  setInterval(nextImage, 8000);

});
