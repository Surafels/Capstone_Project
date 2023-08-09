
const speakers = [
    {
      id: 1,
      speakerName: 'Daneil haile',
      jobTitle: 'Associate Professor of Economics, at MIC',
      imageUrl: 'asset/speaker-1-pic.png',
      description: 'Research Area: Development Economics, Demographic Economics.',
    },
    {
      id: 2,
      speakerName: 'Selam Noah',
      jobTitle: 'Professor of Political Economy in H.S',
      imageUrl: 'asset/speaker-2-pic.png',
      description: 'Research Area:African Political Economy.',
    },
    {
      id: 3,
      speakerName: 'Marta Fisseha',
      jobTitle: ' Professor of Sociology, Bahirdar University',
      imageUrl: 'asset/speaker-3-pic.png',
      description: 'Research Area:Family and Relationships',
    },
    {
      id: 4,
      speakerName: 'Natnael Yohannes',
      jobTitle: 'Berkman Professor of Enterpreneurial Legal Studies at Addis Ababa University',
      imageUrl: 'asset/speaker-4-pic.png',
      description: 'Research Area:Ranking of Investments and Their Performances',
    },
    {
      id: 5,
      speakerName: 'Mena Bernabas',
      jobTitle: 'Professor of economics at MIC',
      imageUrl: 'asset/speaker-5-pic.png',
      description: 'Research Area:Macroeconomics',
    },
    {
      id: 6,
      speakerName: 'Yared Tomas',
      jobTitle: 'Professor of economics at MIC',
      imageUrl: 'asset/speaker-6-pic.png',
      description: 'Research Area:Macroeconomics',
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
      <div>
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