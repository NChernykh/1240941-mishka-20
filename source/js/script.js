//burger-menu

var mainNav = document.querySelector(".main-nav");
var navToggle = document.querySelector(".nav-toggle");

mainNav.classList.remove("main-nav--nojs");
mainNav.classList.remove("main-nav--opened");
mainNav.classList.add("main-nav--closed");

navToggle.addEventListener("click", function() {
  mainNav.classList.toggle("main-nav--closed");
  mainNav.classList.toggle("main-nav--opened");
});

//Модальное окно

var links = document.querySelectorAll(".js-modal");
var modal = document.querySelector(".cart");
var overlay = document.querySelector(".modal-overlay");
var close = modal.querySelector(".modal__close");

for(let link of links) {
  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal__show");
    overlay.style.display = "block";
  })
};

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal__show");
  overlay.style.display = "";
});

window.addEventListener("keydown" , function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      overlay.style.display = "";
    }
  }
});
