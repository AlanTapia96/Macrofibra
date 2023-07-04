const viewportObserver = new IntersectionObserver((entries, observer) => {
  if (entries[0].isIntersecting) {
    let typed = new Typed("#element", {
      strings: [
        "REEMPLAZA A LA MALLA METALICA DE REPARTICIÓN EN PISOS DE HORMIGÓN.",
      ],
      typeSpeed: 30,
      loop: false,
    });

    observer.unobserve(entries[0].target);
  }
});

viewportObserver.observe(document.querySelector("#test"));

window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 30);
  });

  document.addEventListener("DOMContentLoaded", function () {});

  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("href");
      const section = document.querySelector(sectionId);
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const offset = 100; // Distancia antes de la sección donde detener el desplazamiento

      if (section) {
        console.log(section.offsetTop);
        console.log(navbarHeight);
        const topOffset = section.offsetTop - navbarHeight + offset;
        window.scroll({
          top: topOffset,
          behavior: "smooth",
        });
      }
    });
  });

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
