// DOM Elements
const singleCardBtn = document.getElementById('single-card-btn');
const threeCardBtn = document.getElementById('three-card-btn');
const deckContainer = document.getElementById('deck-container');
const readingArea = document.getElementById('reading-area');
const interpretation = document.getElementById('interpretation');
const readingContainer = document.querySelector('.reading-container');

// Variables
let readingType = null;
let selectedCards = [];
let maxCards = 0;

// Create and display the deck of cards
function createDeck() {
    deckContainer.innerHTML = '';
    const shuffledDeck = [...tarotDeck].sort(() => Math.random() - 0.5);
    
    const totalCards = 22;
    const fanAngle = 160; // Total angle of the fan in degrees
    const radius = 350; // Distance from center point
    
    for (let i = 0; i < totalCards; i++) {
      const card = shuffledDeck[i];
      const deckCard = document.createElement('div');
      deckCard.className = 'deck-card';
      deckCard.textContent = '✦';
      
      // Calculate the position in the fan
      const angle = (fanAngle / (totalCards - 1)) * i - (fanAngle / 2);
      const radian = angle * Math.PI / 180;
      
      // Position using trigonometry
      const left = 50 + (radius * Math.sin(radian) / 10);
      const bottom = 0 - (radius * Math.cos(radian) / 10);
      
      // Apply transformations
      deckCard.style.left = `${left}%`;
      deckCard.style.bottom = `${bottom}px`;
      deckCard.style.transform = `rotate(${angle}deg)`;
      deckCard.style.opacity = '0';
      deckCard.style.transition = 'opacity 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease';
      
      deckCard.addEventListener('click', function() {
        if (selectedCards.length < maxCards && !this.classList.contains('selected')) {
          this.classList.add('selected');
          selectedCards.push(card);
          displaySelectedCards();
        }
      });
      
      deckContainer.appendChild(deckCard);
      
      // Stagger the fade-in of each card
      setTimeout(() => {
        deckCard.style.opacity = '1';
      }, 50 + (i * 30));
    }
  }

function displaySelectedCards() {
    readingArea.innerHTML = '';
    
    if (readingType === 'single' && selectedCards.length > 0) {
        readingArea.appendChild(createCardElement(selectedCards[0]));
    } else {
        const positions = ['Past', 'Present', 'Future'];
        
        selectedCards.forEach((card, index) => {
            if (index < positions.length) {
                const positionDiv = document.createElement('div');
                positionDiv.className = 'card-position';
                
                const positionLabel = document.createElement('div');
                positionLabel.className = 'position-label';
                positionLabel.textContent = positions[index];
                positionDiv.appendChild(positionLabel);
                
                positionDiv.appendChild(createCardElement(card));
                readingArea.appendChild(positionDiv);
            }
        });
    }
    
    // When all cards are selected
    if (selectedCards.length === maxCards) {
        // Prepare interpretation content first
        if (interpretation) {
            // Prepare interpretation content but don't display yet
            displayCardInterpretation();
            interpretation.style.display = 'none';
        }
        
        // Fade out the deck
        deckContainer.style.opacity = '1';
        deckContainer.style.transition = 'opacity 0.8s ease-out';
        
        // Show interpretation after deck fades out
        setTimeout(() => {

            if (interpretation) {
                interpretation.style.display = 'block';
                interpretation.style.opacity = '0';
                interpretation.style.transition = 'opacity 0.8s ease-out';
                
                // Small delay to trigger the fade-in effect
                setTimeout(() => {
                    interpretation.style.opacity = '1';
                }, 50);
            }
        }, 800);
    } else if (interpretation) {
        interpretation.style.display = 'none';
        interpretation.innerHTML = '';
    }
}

// Display the card interpretation
function displayCardInterpretation() {
   if (!interpretation) return;
   
   interpretation.innerHTML = '';
   
   if (readingType === 'single') {
       displaySingleCardInfo(selectedCards[0]);
   } else {
       displayThreeCardInfo();
   }
}

// Display information for a single card
function displaySingleCardInfo(card) {
   const interpretationDiv = document.createElement('div');
   interpretationDiv.className = 'card-interpretation';
   interpretationDiv.innerHTML = `
       <h3>${card.name}</h3>
       <p>${card.meaning}</p>
       <strong>Your intention for today: </strong>
       <p>
       ${card.mantra}
       </p>

       <p>${card.keywords.join(', ')}</p>
   `;
   
   interpretation.appendChild(interpretationDiv);
}

// Display information for three cards
function displayThreeCardInfo() {
   const positions = ['Past', 'Present', 'Future'];
   const interpretationDiv = document.createElement('div');
   interpretationDiv.className = 'spread-interpretation';
   
   // Add spread description
   interpretationDiv.innerHTML = `
       <p><em>This three-card spread represents influences from your past, your current situation, and potential future developments.</em></p>
   `;
   
   // Add info for each card
   selectedCards.forEach((card, index) => {
       const cardSection = document.createElement('div');
       cardSection.className = 'interpretation-section';
       cardSection.style.marginTop = '20px';
       cardSection.innerHTML = `
           <h4>${positions[index]}: ${card.name}</h4>
       <strong>Your intention for today: </strong>
       <p>
       ${card.mantra}
       </p>
           <p><strong>Keywords:</strong> ${card.keywords.join(', ')}</p>
       `;
       
       interpretationDiv.appendChild(cardSection);
   });
   
   interpretation.appendChild(interpretationDiv);
}

// Create a card element
function createCardElement(card) {
   const cardElement = document.createElement('div');
   cardElement.className = 'card';

   const cardImage = document.createElement('div');
   cardImage.className = 'card-image';

   if (card.image) {
       const img = document.createElement('img');
       img.src = `./img/${card.image}`;
       img.alt = `${card.name} tarot card`;
       img.onerror = () => { cardImage.textContent = card.symbol; };
       cardImage.appendChild(img);
   } else {
       cardImage.textContent = card.symbol;
   }

   cardElement.innerHTML = `
       <div class="card-image">${cardImage.innerHTML || card.symbol}</div>
       <div class="card-meaning">
       ${card.keywords.join(', ')}
       </div>
   `;

   return cardElement;
}

// Set the reading type
function setReadingType(type) {
    readingType = type;
    selectedCards = [];
    
    // Update UI
    singleCardBtn.classList.toggle('active', type === 'single');
    threeCardBtn.classList.toggle('active', type === 'three');
    maxCards = type === 'single' ? 1 : 3;
    
    // Reset deck styling but start with opacity 0
    deckContainer.style.opacity = '0';
    deckContainer.style.transition = 'opacity 0.8s ease-out';
    deckContainer.style.display = 'flex';
    
    // Clear previous readings
    readingArea.innerHTML = '';
    readingArea.style.display = 'grid';
    
    if (interpretation) {
        interpretation.innerHTML = '';
        interpretation.style.display = 'none';
        interpretation.style.opacity = '1';
        interpretation.style.transition = 'opacity 0.8s ease-out';
    }
    
    // Reset any previously selected cards
    document.querySelectorAll('.deck-card').forEach(card => card.classList.remove('selected'));
    
    // Create new deck
    createDeck();
    
    // Show reading container
    if (readingContainer) readingContainer.style.display = 'block';
    
    // Fade in the deck after a brief delay
    setTimeout(() => {
        deckContainer.style.opacity = '1';
    }, 50);
}

// Initialize the app
function init() {
 // Hide all reading-related elements initially
 if (readingContainer) readingContainer.style.display = 'none';
 [deckContainer, readingArea, interpretation].forEach(el => {
   if (el) el.style.display = 'none';
 });
 
 // Add event listeners
 singleCardBtn.addEventListener('click', () => setReadingType('single'));
 threeCardBtn.addEventListener('click', () => setReadingType('three'));
}

// Start the app
document.addEventListener('DOMContentLoaded', init);

// JavaScript to handle the header transformation with scrolling text banner
document.addEventListener('DOMContentLoaded', function() {
   // Set today's date in the header
   const dateElement = document.getElementById('tarot-date');
   if (dateElement) {
     const today = new Date();
     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     let dateString = today.toLocaleDateString(undefined, options);
     dateElement.textContent = dateString; 
   }
   
   // Get the header element
   const header = document.querySelector('.title-area');
   const bubble = document.querySelector('.bubble');
   
   // Create the scrolling text content from header content
   if (header) {
     const h1Text = header.querySelector('h1')?.textContent || 'Tarot Intentions';
     const dateText = dateElement?.textContent || '';
     
     // Set the scrolling text
     const scrollText = `${h1Text} ☽ ${dateText} ✦ Draw a card for daily guidance. ✤ `;
     header.setAttribute('data-scroll-text', scrollText);
   
     
     // Function to handle scroll events
     function handleScroll() {
       // Add the fixed class when scrolled down more than the header height
       if (window.scrollY > 190) {
         header.classList.add('fixed');
         header.style.zIndex = '100';
         document.body.classList.add('fixed-header');
         // Apply padding to body equal to the fixed header height 
         document.body.style.paddingTop = "250px";
         bubble.style.opacity = "0";
         bubble.style.visibility = "hidden";
         bubble.textContent = "Have a great day babe!"
       } else {
         header.classList.remove('fixed');
         header.style.zIndex = '8';
         document.body.classList.remove('fixed-header');
         // Remove the padding when header is not fixed
         document.body.style.paddingTop = "0px";
         bubble.style.opacity = "1";
         bubble.style.visibility = "visible";
       }
     }
     
     // Listen for scroll events
     window.addEventListener('scroll', handleScroll);
     
     // Initial check in case the page is loaded scrolled down
     handleScroll();
   }
 });