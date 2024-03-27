// script.js
// JavaScript function to toggle menu visibility
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  
  // Event listener to trigger the toggleMenu function
  var btn = document.querySelector('.btn');
  btn.addEventListener('click', toggleMenu);
  