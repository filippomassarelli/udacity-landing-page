/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navItems = Array.from(document.getElementsByTagName("section"));
const navUl = document.querySelector("#navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (navItem of navItems) {
  console.log(navItem);

  let li = document.createElement("li");
  let a = document.createElement("a");

  a.classList.add("menu__link");
  a.setAttribute("href", `#${navItem.id}`);
  a.innerText = navItem.id;

  li.appendChild(a);
  navUl.appendChild(li);
}

// // Add class 'active' to section when near top of viewport
// window.addEventListener("scroll", testFunction);

// function testFunction() {
//   const allSections = document.querySelectorAll("section");
//   for (i = 0; i < allSections.length; i++) {
//     if (!isInViewport(allSections[i])) {
//       allSections[i].classList.remove("active");
//     } else {
//       allSections[i].classList.add("active");
//     }
//   }
// }

// function isInViewport(elem) {
//   // function to define the sections' position in viewport
//   let bounding = elem.getBoundingClientRect();
//   return (
//     bounding.top + 300 >= 0 &&
//     bounding.left >= 0 &&
//     bounding.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) + 300 &&
//     bounding.right <=
//       (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Scroll to anchor ID using scrollTO event
// document.querySelectorAll("a").forEach((a) => {
//   a.addEventListener("click", function (event) {
//     event.preventDefault();

//     document.getElementById(a.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// ----------------------
// ----------------------

//
// --> Highlight active section in body and in navbar on Scroll
//

const navbarLinks = document.querySelectorAll("li a");

window.addEventListener("scroll", (event) => {
  let fromTop = window.scrollY + 1;

  navbarLinks.forEach((link) => {
    let section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active-link");
      section.classList.add("your-active-class");
    } else {
      link.classList.remove("active-link");
      section.classList.remove("your-active-class");
    }
  });
});

//
// --> Scroll to anchor ID with ScrollTo
//

document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", function (prvt) {
    prvt.preventDefault();
    // console.log("ScrollTo worked");
    document.getElementById(a.innerText).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//
// --> Scroll To Top button
//

const topButton = document.getElementById("topButton");

//when user scrolls 20px down from top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

//Go to top on click
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
