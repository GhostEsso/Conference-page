const toggleMenu = () => {
  document.querySelector('.me-container').classList.toggle('active');
};

document.querySelector('.my-hamburger').addEventListener('click', toggleMenu);
