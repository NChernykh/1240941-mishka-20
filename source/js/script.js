//burger-menu

var mainNav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.nav-toggle');

mainNav.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');
});
