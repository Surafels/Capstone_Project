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


const speakers=[
    {
    id:1,
    speakerName:'Yochai Benkler',
    jobTitle:'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    image:'',
    description:'speaker-e">Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    },
    {
        id:2,
        speakerName:'Yochai Benkler',
    jobTitle:'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    image:'',
    description:'speaker-e">Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    },
    {
        id:3,
    speakerName:'Yochai Benkler',
    jobTitle:'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    image:'',
    description:'speaker-e">Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    },
    {
        id:4,
    speakerName:'Yochai Benkler',
    jobTitle:'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    image:'',
    description:'speaker-e">Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    }
];
