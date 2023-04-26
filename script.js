"use strict";

const carousel = document.querySelector(".carousel");
const firstImg = document.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");
const firstImgWidth = firstImg.clientWidth + 370;

let isDragStart = false;
let prevPageX;
let prevScrollLeft;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
  console.log(carousel.scrollLeft);
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
    showHideIcons();
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = (e) => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mouseup", dragStop);

carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

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

const square = document.querySelector(".square");

square.addEventListener("click", function () {
  this.classList.toggle("active");
  navigationMenu.classList.toggle("display-hide");
});
