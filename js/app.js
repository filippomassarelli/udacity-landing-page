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

//
// --> Define Global Variables
//
const navItems = Array.from(document.getElementsByTagName("section"));
const navUl = document.querySelector("#navbar__list");

//
// --> Build the Nav
//

for (navItem of navItems) {
  let li = document.createElement("li");
  let a = document.createElement("a");

  a.classList.add("menu__link");
  a.setAttribute("href", `#${navItem.id}`);
  a.innerText = navItem.id;

  li.appendChild(a);
  navUl.appendChild(li);
}

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
  if (
    document.body.scrollTop > 470 ||
    document.documentElement.scrollTop > 470
  ) {
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
