const carouselImages = document.getElementById("containerImages");
const slides = Array.from(carouselImages.children);
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Having same with for all slides
const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

// Arranging slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (carouselImages, currentSlide, targetSlide) => {
  carouselImages.style.transform =
    "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// When click left, move slides to left
prevBtn.addEventListener("click", (e) => {
  const currentSlide = carouselImages.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(carouselImages, currentSlide, prevSlide);
});

// When click right, move slides to right
nextBtn.addEventListener("click", (e) => {
  const currentSlide = carouselImages.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(carouselImages, currentSlide, nextSlide);
});
