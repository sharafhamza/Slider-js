let slides = document.querySelectorAll(".slide");
let slidesArray = Array.from(slides);
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let prevnext = () => {
  let prev;
  let next;
  let activeSlide = document.querySelector(".slide.active");
  let currentIndex = slidesArray.indexOf(activeSlide);
  if (currentIndex == 0) {
    prev = slidesArray[slides.length - 1];
  } else {
    prev = slidesArray[currentIndex - 1];
  }
  if (currentIndex == slidesArray.length - 1) {
    next = slidesArray[0];
  } else {
    next = slidesArray[currentIndex + 1];
  }

  return [prev, next];
};
let position = () => {
  let activeSlide = document.querySelector(".slide.active");
  let currentIndex = slidesArray.indexOf(activeSlide);
  let [prev, next] = prevnext();
  slidesArray.map((slide, index) => {
    if (currentIndex == index) {
      slide.style.transform = "translateX(0)";
    } else if (slide == prev) {
      slide.style.transform = "translateX(-100%)";
    } else if (slide == next) {
      slide.style.transform = "translateX(100%)";
    }
    slide.addEventListener("transitionend", () => {
      slide.classList.remove("smooth");
    });
  });
};
right.addEventListener("click", () => {
  let activeSlide = document.querySelector(".slide.active");
  let [next] = prevnext();
  activeSlide.classList.add("smooth");
  next.classList.add("smooth");
  activeSlide.classList.remove("active");
  activeSlide.style.transform = "translateX(-100%)";
  next.classList.add("active");
  next.style.transform = "translateX(0)";
  position();
});
left.addEventListener("click", () => {
  let activeSlide = document.querySelector(".slide.active");
  let [prev] = prevnext();
  activeSlide.classList.add("smooth");
  prev.classList.add("smooth");
  activeSlide.classList.remove("active");
  activeSlide.style.transform = "translateX(100%)";
  prev.classList.add("active");
  prev.style.transform = "translateX(0)";
  position();
});
