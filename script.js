window.addEventListener("resize", () => {
  if (window.innerWidth <= 70 * 16) {
    // 70rem * 16px per rem
    const webpage = document.querySelector(".webpage");
    document.body.removeChild(webpage);
  }
});

