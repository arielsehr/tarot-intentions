// DOM Elements
const singleCardBtn = document.getElementById('single-card-btn');
const threeCardBtn = document.getElementById('three-card-btn');
const deckContainer = document.getElementById('deck-container');
const readingArea = document.getElementById('reading-area');
const interpretation = document.getElementById('interpretation');
const readingContainer = document.querySelector('.reading-container'); // Added this line



// Variables
let readingType = null;
let selectedCards = [];
let maxCards = 0;

// Create and display the deck of cards
function createDeck() {
    deckContainer.innerHTML = '';
    const shuffledDeck = [...tarotDeck].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < 22; i++) {
        const card = shuffledDeck[i];
        const deckCard = document.createElement('div');
        deckCard.className = 'deck-card';
        deckCard.textContent = '✦';
        
        deckCard.addEventListener('click', function() {
            if (selectedCards.length < maxCards && !this.classList.contains('selected')) {
                this.classList.add('selected');
                selectedCards.push(card);
                displaySelectedCards();
                
                if (selectedCards.length === maxCards) {
                    displayCardInterpretation();
                }
            }
        });
        
        deckContainer.appendChild(deckCard);
    }
}

// Display selected cards in the reading area
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
}

// Display the card interpretation
function displayCardInterpretation() {
    if (!interpretation) return;
    
    interpretation.innerHTML = '';
    
    // Add spacing and header
    interpretation.innerHTML = `
        <div style="height: 40px"></div>
        <h3>Card Meaning</h3>
    `;
    
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
        <h4>${card.name}</h4>
        <p>${card.meaning}</p>
        <p><strong>Keywords:</strong> ${card.keywords.join(', ')}</p>
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
            <p>${card.meaning}</p>
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
        <div class="card-meaning">${card.meaning}</div>
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
    
    // Clear previous readings
    readingArea.innerHTML = '';
    if (interpretation) interpretation.innerHTML = '';
    
    // Reset any previously selected cards
    document.querySelectorAll('.deck-card').forEach(card => card.classList.remove('selected'));
    
    // Create deck and show containers
    createDeck();
    deckContainer.style.display = 'flex';
    readingArea.style.display = 'block';
    if (interpretation) interpretation.style.display = 'block';

    // Now show the entire reading container and its contents
    if (readingContainer) readingContainer.style.display = 'block';
    deckContainer.style.display = 'flex';
    readingArea.style.display = 'flex';
    if (interpretation) interpretation.style.display = 'block';
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