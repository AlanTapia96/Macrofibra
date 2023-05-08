window.addEventListener(
  "scroll",
  function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 120);
  },
  { passive: true }
);

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".saltarina").classList.remove("opacity-0");
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
