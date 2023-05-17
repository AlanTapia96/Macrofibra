// window.addEventListener(
//   "scroll",
//   function () {
//     const header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 120);
//   },
//   { passive: true }
// );

// document.addEventListener( 'DOMContentLoaded', function () {

// } );

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".saltarina").classList.remove("opacity-0");

  const splide = new Splide(".splide", {
    // Optional parameters
    // start: 1,
    // perPage: 3,
    // perMove: 1,
    // gap: 20,
    // padding: "5rem",
    // type: "loop",
    // drag: "free",
    // snap: true,
    // interval: 200,
    // arrows: true,
    // pagination: true,
    // rewind: true,
    // rewindByDrag: true,
    // lazyLoad: true,
    type: "loop",
    padding: "5rem",
    gap: 20,

    // Responsive breakpoint
    breakpoints: {
      768: {
        perPage: 1,
        snap: true,
      },
    },
  });

  splide.mount();
});

AOS.init({
  startEvent: "load",
  // duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: true,
});

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("transition-style", "in:wipe:down");
    }
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("transition-style", "in:circle:hesitate");
    }
  });
});

observer1.observe(document.querySelector("#que-es .image"));
observer2.observe(document.querySelector(".whatsapp"));

// const findOverflows = () => {
//   const documentWidth = document.documentElement.offsetWidth;

//   document.querySelectorAll("*").forEach((element) => {
//     const box = element.getBoundingClientRect();

//     if (box.left < 0 || box.right > documentWidth) {
//       console.log(element);
//       element.style.border = "1px solid red";
//     }
//   });
// };

// // Execute findOverflows to find overflows on the page.
// findOverflows();
