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

