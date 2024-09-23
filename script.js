// * menu
let menuLinks = document.querySelectorAll("header ul li a");
const menu = document.getElementById("toggle-menu");
const menuList = document.getElementById("menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  menuList.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuList.contains(e.target)) {
    menu.classList.remove("fa-times");
    menuList.classList.remove("active");
  }
});
menuLinks.forEach((a) => {
  a.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      menuLinks.forEach((a) => {
        a.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    }
  });
});
// // * toggle menu

//   let search = document.querySelector("header .form i");

menuLinks.forEach((a) => {
  a.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      menuLinks.forEach((a) => {
        a.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    }
  });
});
// make the stats data progress reach the number when i scroll to the stats section

let stats = document.querySelectorAll(".stats .container .box .number");
let animated = false;

function animateStats() {
  stats.forEach((stat) => {
    stat.innerHTML = "0";
    let goal = stat.getAttribute("data-goal");
    let count = setInterval(() => {
      stat.innerHTML++;
      if (stat.innerHTML == goal) {
        clearInterval(count);
      }
    }, 1000 / goal);
  });
}

window.addEventListener("scroll", () => {
  let statsSection = document.querySelector(".stats");
  let rect = statsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0 && !animated) {
    animateStats();
    animated = true;
  }
});

// let stats = document.querySelectorAll(".stats .container .box .number");
// stats.forEach((stat) => {
//   stat.innerHTML = "0";
//   let goal = stat.getAttribute("data-goal");
//   let count = setInterval(() => {
//     stat.innerHTML++;
//     if (stat.innerHTML == goal) {
//       clearInterval(count);
//     }
//   }, 1000 / goal);
// });

// window.onscroll = () => {
//   header.classList.toggle("shadow", window.scrollY > 0);
// }

const sr = ScrollReveal({
  distance: "60px",
  duration: 1400,
  reset: false,
});
sr.reveal("header", { delay: 200, origin: "top" });
sr.reveal(".landing-text", { delay: 200, origin: "left" });
sr.reveal(".main-heading", { delay: 200, origin: "top" });
sr.reveal(".srv-box", { delay: 200, origin: "right" });
sr.reveal(".srv-box.even", { delay: 200, origin: "left" });
sr.reveal(".design .image", { delay: 200, origin: "bottom" });
sr.reveal(".design .text", { delay: 200, origin: "right" });
sr.reveal(".portfolio .box", { delay: 200, origin: "left" });
sr.reveal(".portfolio .box.even", { delay: 200, origin: "right" });
sr.reveal(".about img", { delay: 200, origin: "bottom" });
sr.reveal(".testimonials", { delay: 200, origin: "left" });
sr.reveal(".our-skills .skills", { delay: 200, origin: "right" });
sr.reveal(".plan,.contact-text,.contact-link", {
  delay: 200,
  origin: "bottom",
});
sr.reveal(".contact form", { delay: 200, origin: "left" });
sr.reveal(".contact .info", { delay: 200, origin: "right" });
sr.reveal(".subscribe form", { delay: 200, origin: "center", distance: "0px" });
sr.reveal(".subscribe p", { delay: 200, origin: "center", distance: "0px" });
sr.reveal("footer img", { delay: 200, origin: "top" });
sr.reveal("footer .text", { delay: 600, origin: "top" });
sr.reveal("footer .social-icons", { delay: 700, origin: "top" });
