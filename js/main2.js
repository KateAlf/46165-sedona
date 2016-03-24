var menu = document.querySelector(".hamburger");
var nav = document.querySelector(".top-nav");

menu.addEventListener("click", function (event) {
  event.preventDefault();
  nav.classList.add("top-nav-show");
});

//menu.addEventListener("click", function (event) {
//  event.preventDefault();
//  menu.classList.remove("hamburger");
//});