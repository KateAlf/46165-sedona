var menu = document.querySelector(".hamburger");
var close = document.querySelector(".active");
var nav = document.querySelector(".top-nav");

menu.addEventListener("click", function (event) {
  event.preventDefault();
  nav.classList.add("top-nav-show");
  menu.classList.add("active");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (nav.classList.contains("top-nav-show")) {
      nav.classList.remove("top-nav-show");
      menu.classList.remove("active");
    }
  }
});