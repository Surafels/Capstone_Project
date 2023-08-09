const hamburgerMenu = document.querySelector('#hamburger');
const closingMenu = document.querySelector('#closing-icon');
const menuContainer = document.querySelector('#mobile-menu');
const mobileList = document.querySelector('#hum-list');

function openMenu() {
  menuContainer.classList.remove('hidden');
}
function closeMenu() {
  menuContainer.classList.add('hidden');
}

hamburgerMenu.addEventListener('click', openMenu);
closingMenu.addEventListener('click', closeMenu);
mobileList.addEventListener('click', closeMenu);

