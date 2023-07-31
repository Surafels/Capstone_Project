const humbergerMenu= document.querySelector('#humberger');
const closing= document.querySelector('#closing-icon');
const menuContainer= document.querySelector('#mobile-menu')
const mobileList= document.querySelector('#hum-list');
function openMenu(){
    menuContainer.classList.remove('hidden');
}
humbergerMenu.addEventListener('click',openMenu);
function closeMenu(){
menuContainer.classList.remove('hidden');    
}
closeMenu.addEventListener('click',closeMenu);
mobileList.addEventListener('click',closeMenu);
