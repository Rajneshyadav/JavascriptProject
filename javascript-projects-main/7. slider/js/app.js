const slides = document.querySelectorAll(".slide");
var counter = 0;
// console.log(slides)
slides.forEach(function (slide, index) {
  slide.style.top = `${index * 100}%`;
  console.log(slide);
});

const goPrev = () => {
  counter--;
  slideImage();
};

const goNext = () => {
  counter++;
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateY(-${counter * 100}%)`;
  });
};

window.addEventListener("keyup", function name(event) {
  console.log(event.key);
  if (event.key == "ArrowDown") {
    counter++;
    slideImage();
  }
  if (event.key == "ArrowUp") {
    counter--;
    slideImage();
  }
});
 