/*const hamburgerMenu = document.querySelector('.my-hamburger');
const menuContainer = document.querySelector('.me-container');

hamburgerMenu.addEventListener('click', () => {
    menuContainer.classList.toggle('menuOpen');
}) */

const toggleMenu = () => {
    document.querySelector('.me-container').classList.toggle('active');
  }
  
  document.querySelector('.my-hamburger').addEventListener('click', toggleMenu);
  