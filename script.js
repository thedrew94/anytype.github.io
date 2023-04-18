"use strict";

const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper");
const firstImg = carousel.querySelectorAll("img")[0];
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragStop = () => {
  isDragStart = false;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  console.log(e.pageX);
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mousemove", dragging);
