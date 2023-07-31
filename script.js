const humbergerMenu= document.querySelector('#humberger');
const closingMenu= document.querySelector('.closing');
const menuContainer= document.querySelector('#mobile-menu')
const mobileList= document.querySelector('#hum-list');
function openMenu(){
    menuContainer.classList.remove('hidden');
}
humbergerMenu.addEventListener('click',openMenu);
function closeMenu(){
menuContainer.classList.remove('hidden');    
}
closingMenu.addEventListener('click',closeMenu);
mobileList.addEventListener('click',closeMenu);
