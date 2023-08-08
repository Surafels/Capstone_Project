
const speakers = [
    {
      id: 1,
      speakerName: 'Yochai Benkler',
      jobTitle: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
      imageUrl: 'asset/speaker-1-pic.png',
      description: 'Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    },
    {
      id: 2,
      speakerName: 'Yochai Benkler',
      jobTitle: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
      imageUrl: 'asset/speaker-2-pic.png',
      description: 'Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    },
    {
      id: 3,
      speakerName: 'Yochai Benkler',
      jobTitle: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
      imageUrl: 'asset/speaker-3-pic.png',
      description: 'Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    },
    {
      id: 4,
      speakerName: 'Yochai Benkler',
      jobTitle: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
      imageUrl: 'asset/speaker-4-pic.png',
      description: 'Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    },
    {
      id: 5,
      speakerName: 'Yochai Benkler',
      jobTitle: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
      imageUrl: 'asset/speaker-5-pic.png',
      description: 'Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    },
    {
      id: 6,
      speakerName: 'Yochai Benkler',
      jobTitle: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
      imageUrl: 'asset/speaker-6-pic.png',
      description: 'Benkler studies commons-based peer production, and published his seminal book,The Wealth of Networks in 2006',
    },
  ];


  const speakerSection = document.querySelector('#featured-section');
  let displayAll = false; 
  
  function displaySpeakers() {
    speakerSection.innerHTML = ''; 
  
    const speakersToDisplay = displayAll ? speakers : speakers.slice(0, 2);
  
    speakersToDisplay.forEach((speaker) => {
      const speakerDiv = createSpeakerElement(speaker);
      speakerSection.appendChild(speakerDiv);
    });
  
   
    const readMoreLink = document.createElement('a');
    readMoreLink.href = '#';
    readMoreLink.className = 'more';
    readMoreLink.textContent = displayAll ? 'Less' : 'More';
    readMoreLink.addEventListener('click', function (e) {
      e.preventDefault();
      displayAll = !displayAll;
      displaySpeakers(); 
    });
  
    speakerSection.appendChild(readMoreLink);
  }
  
  displaySpeakers(); 
  
  function createSpeakerElement(speaker) {
    const speakerDiv = document.createElement('div');
    speakerDiv.className = 'ff-speakers';
    speakerDiv.innerHTML = `
      <div class='speaker-img'>
        <img src='${speaker.imageUrl}' class='s-image' alt='speaker image'>
      </div>
      <div class='speaker-info'>
        <h1 class='s-name'>${speaker.speakerName}</h1>
        <p class='s-job'>${speaker.jobTitle}</p>
        <hr class='separ'>
        <p class='s-description'>${speaker.description}</p>
      </div>
    `;
  
    return speakerDiv;
  }