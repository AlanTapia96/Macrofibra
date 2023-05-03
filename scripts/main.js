window.addEventListener(
  "scroll",
  function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 120);
  },
  { passive: true }
);
