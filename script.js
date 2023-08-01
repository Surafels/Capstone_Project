const humbergerMenu= document.querySelector('#humberger');
const closingMenu= document.querySelector('.closing');
const menuContainer= document.querySelector('#mobile-menu')
const mobileList= document.querySelector('#hum-list');
function openMenu(){
    menuContainer.classList.add('hidden');
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
    imageS:'',
    description:'speaker-e">Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    }
];
speakers.forEach((speaker) => {
    constspeakerSection=document.querySelector('#featured-section');
    const speakerDiv = document.createElement('div');
    speakerDiv.className = 'ff-speakers';
    speakerDiv.innerHTML=`
    <div>
    <img src'${speakers.imageS}' class='s-image'  alt='speaker image'>
    </div>
    <div class='speaker-info'>
    <h1 class='s-name'>${speaker.speakerName}</h1>
    <p class='s-job'>${speaker.jobTitle}</p>
    <p class='s-description'>${speaker.description}</p
    </div>
    `
    speakerSection.appendChild(speakerDiv)

});

