"use strict";

const carousel = document.querySelector(".carousel");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const dragStart = function (event) {
  isDragStart = true;
  prevPageX = event.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragStop = function (event) {
  isDragStart = false;
};

const dragging = function (event) {
  if (!isDragStart) return;
  event.preventDefault();
  let positionDiff = event.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  console.log(event.pageX);
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("mousemove", dragging);

carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("touchend", dragStop);
carousel.addEventListener("touchcancel", dragStop);
carousel.addEventListener("touchmove", dragging);

// DISPLAY / HIDE MENU
const menuBtn = document.querySelectorAll(".menu");
const navigationMenu = document.querySelector("nav");

menuBtn.forEach((menu) => {
  menu.addEventListener("click", function () {
    navigationMenu.classList.toggle("display-hide");
  });
});

// MOVE TO TOP BUTTON

const moveTopBtn = document.querySelector(".right-content");

moveTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
