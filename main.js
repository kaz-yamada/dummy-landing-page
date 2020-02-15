"use strict";

var isScrolling = false;
var isFixed = false;

var navabar = document.getElementById("navbar");

window.onscroll = function() {
  stickyNavbar();
};

function stickyNavbar() {
  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
