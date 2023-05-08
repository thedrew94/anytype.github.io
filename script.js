"use strict";

// IMG SLIDER
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ////////////////////////////////////////////
// DISPLAY / HIDE MENU
const menuBtn = document.querySelectorAll(".menu");
const navigationMenu = document.querySelector("nav");

menuBtn.forEach((menu) => {
  menu.addEventListener("click", function () {
    navigationMenu.classList.toggle("display-hide");
  });
});

// ////////////////////////////////////////////
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

// ////////////////////////////////////////////
// VIDEO PLAYER & MODAL WINDOW

const modalWindow = document.querySelector(".modal-window");
const closeBtn = document.querySelector(".close-btn");
const playBtn = document.querySelector(".play-button");
const bodyElement = document.querySelector("body");
const iframe = document.querySelector("#video-player");

closeBtn.addEventListener("click", () => {
  modalWindow.classList.toggle("opened-style");
  modalWindow.classList.toggle("closed-style");
  bodyElement.classList.toggle("overflowClass");
  iframe.src = ""; // set the src attribute to an empty string to stop the video
});

playBtn.addEventListener("click", () => {
  modalWindow.classList.toggle("closed-style");
  modalWindow.classList.toggle("opened-style");
  bodyElement.classList.toggle("overflowClass");
  iframe.src = "https://www.youtube.com/embed/kCLmXPSI5_w?autoplay=1";
});

modalWindow.addEventListener("click", (event) => {
  if (event.target === modalWindow) {
    modalWindow.classList.toggle("opened-style");
    modalWindow.classList.toggle("closed-style");
    bodyElement.classList.toggle("overflowClass");
    iframe.src = "";
  }
});

// ////////////////////////////////////////////
// REDIRECTING USER TO DOWNLOAD APP CODE

const downloadBtn = document.querySelectorAll(
  ".aside-left_download-btn, .aside-left_download-btnMain"
);

downloadBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      // If user is on pc open the App Store link
      window.open(
        "https://apps.apple.com/jp/app/anytype-%E6%97%A5%E6%9C%AC%E8%AA%9E%E6%96%87%E5%AD%97%E5%85%A5%E5%8A%9B-%E7%9D%80%E3%81%9B%E6%9B%BF%E3%81%88%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89/id1078897849",
        "_blank"
      );
    } else {
      // If user is on Android device open Google Play Store link
      if (/Android/i.test(navigator.userAgent)) {
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.omega.anytype";
      }
      // If user is on iOS open App Store link
      else {
        window.location.href = "itms-apps://itunes.apple.com/app/id1078897849";
      }
    }
  });
});

// ////////////////////////////////////////////
// SCROLL INTO VIEW FOR MENU VOICES

const menuVoices = document.querySelectorAll(".menu-voice");

menuVoices.forEach((menuVoice) => {
  menuVoice.addEventListener("click", () => {
    const targetId = menuVoice.getAttribute("id");
    const targetElement = document.getElementById(`target${targetId}`);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// SCROLL INTO VIEW FOR KEYBOARD SETTINGS
const keyboardLink = document.querySelectorAll(".keyboard-link");
const greenPage = document.querySelector(".green-page-element");

keyboardLink.forEach((keyboard) => {
  keyboard.addEventListener("click", () => {
    greenPage.scrollIntoView({
      behavior: "smooth",
    });
    modalWindow.classList.toggle("closed-style");
    modalWindow.classList.toggle("opened-style");
    bodyElement.classList.toggle("overflowClass");
    iframe.src = "https://www.youtube.com/embed/kCLmXPSI5_w?autoplay=1";
  });
});

// ////////////////////////////////////////////
