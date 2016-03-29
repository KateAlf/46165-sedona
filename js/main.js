var menu = document.querySelector(".hamburger");
var close = document.querySelector(".active");
var nav = document.querySelector(".top-nav");

menu.addEventListener("click", function (event) {
  event.preventDefault();
  nav.classList.toggle("top-nav-show");
  menu.classList.toggle("active");
});