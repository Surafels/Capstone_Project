const hamburgerMenu= document.querySelector('#hamburger');
const closingMenu= document.querySelector('#closing-icon');
const menuContainer= document.querySelector('#mobile-menu');
const mobileList= document.querySelector('#hum-list');

function openMenu(){
    console.log('hello world',menuContainer);
    menuContainer.classList.remove('hidden');
    
}
function closeMenu(){
menuContainer.classList.add('hidden');    
}

/*hamburgerMenu.addEventListener('click',openMenu); */
closingMenu.addEventListener('click',closeMenu);
mobileList.addEventListener('click',closeMenu);

const speakers=[
    {
    id:1,
    speakerName:'Yochai Benkler',
    jobTitle:'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    imageUrl:'asset/benkler.jpeg',
    description:'Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    },
    {
        id:2,
        speakerName:'Yochai Benkler',
    jobTitle:'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    imageUrl:'asset/benkler.jpeg',
    description:'Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    },
    {
        id:3,
    speakerName:'Yochai Benkler',
    jobTitle:'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    imageUrl:'asset/benkler.jpeg',
    description:'Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    },
    {
        id:4,
    speakerName:'Yochai Benkler',
    jobTitle:'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    imageUrl:'asset/benkler.jpeg',
    description:'Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    }
];
speakers.forEach((speaker) => {
    const speakerSection=document.querySelector('#featured-section');
    const speakerDiv = document.createElement('div');
    speakerDiv.className = 'ff-speakers';
    speakerDiv.innerHTML=`
    
    <div>
    <img src='${speaker.imageUrl}' class='s-image'  alt='speaker image'>
    </div>
    <div class='speaker-info'>
    <h1 class='s-name'>${speaker.speakerName}</h1>
    <p class='s-job'>${speaker.jobTitle}</p>
    <hr class='separ'>
    <p class='s-description'>${speaker.description}</p
    </div>
    
    `
    speakerSection.appendChild(speakerDiv)

});

