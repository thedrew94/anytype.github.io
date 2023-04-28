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

closeBtn.addEventListener("click", () => {
  modalWindow.classList.toggle("opened-style");
  modalWindow.classList.toggle("closed-style");
});

playBtn.addEventListener("click", () => {
  modalWindow.classList.toggle("closed-style");
  modalWindow.classList.toggle("opened-style");
});

var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player("player", {
    height: "720",
    width: "2120",
    videoId: "kCLmXPSI5_w",
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  });
}

window.onYouTubePlayerAPIReady = onYouTubePlayerAPIReady;

// ////////////////////////////////////////////
// REDIRECTING USER TO DOWNLOAD APP CODE

const downloadBtn = document.querySelectorAll(
  ".aside-left_download-btn, .aside-left_download-btnMain"
);

downloadBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      window.open(
        "https://apps.apple.com/jp/app/anytype-%E6%97%A5%E6%9C%AC%E8%AA%9E%E6%96%87%E5%AD%97%E5%85%A5%E5%8A%9B-%E7%9D%80%E3%81%9B%E6%9B%BF%E3%81%88%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89/id1078897849",
        "_blank"
      );
    } else {
      window.location.href = "itms-apps://itunes.apple.com/app/id1078897849";
    }
  });
});

// ////////////////////////////////////////////
// SCROLL INTO VIEW FOR MENU VOICES

const menuVoices = document.querySelectorAll(".menu-voice");

menuVoices.forEach((menuVoice) => {
  menuVoice.addEventListener("click", () => {
    const targetId = menuVoice.getAttribute("id");
    console.log(targetId);
    const targetElement = document.getElementById(`target${targetId}`);
    console.log(targetElement);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// ////////////////////////////////////////////

