const buttonMenu = document.querySelector('.navigation__button');
const mobileMenu = document.querySelector('.mobile-menu');

buttonMenu.onclick = () => {
  mobileMenu.classList.toggle('page-header--none');
  mobileMenu.classList.toggle('page-header--active');
}
