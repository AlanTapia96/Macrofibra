window.addEventListener(
  "scroll",
  function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 120);
  },
  { passive: true }
  
  );
  
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });