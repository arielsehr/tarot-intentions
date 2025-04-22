// DOM Elements
const singleCardBtn = document.getElementById('single-card-btn');
const threeCardBtn = document.getElementById('three-card-btn');
const readingTitle = document.getElementById('reading-title');
const instructions = document.getElementById('instructions');
const deckContainer = document.getElementById('deck-container');
const readingArea = document.getElementById('reading-area');
const interpretation = document.getElementById('interpretation');

// Variables
let readingType = null;
let selectedCards = [];
let maxCards = 0;

// Create the deck of cards
function createDeck() {
    console.log("Creating deck...");
    
    // Clear previous cards
    deckContainer.innerHTML = '';
    
    // Shuffle the deck
    const shuffledDeck = [...tarotDeck].sort(() => Math.random() - 0.5);
    
    // Create and add deck cards
    for (let i = 0; i < 22; i++) {
        const card = shuffledDeck[i];
        
        // Create card element
        const deckCard = document.createElement('div');
        deckCard.className = 'deck-card';
        deckCard.textContent = '✦';
        
        // Add click handler with proper card data closure
        deckCard.addEventListener('click', function() {
            if (selectedCards.length < maxCards && !this.classList.contains('selected')) {
                selectCard(this, card);
            }
        });
        
        // Add to container
        deckContainer.appendChild(deckCard);
    }
    
    console.log("Deck created with " + deckContainer.children.length + " cards");
}

// Select a card from the deck
function selectCard(deckCardElement, cardData) {
    console.log("Card selected:", cardData.name);
    
    // Mark card as selected in the deck
    deckCardElement.classList.add('selected');
    
    // Add to selected cards
    selectedCards.push(cardData);
    
    // Display the selected cards in the reading area
    displaySelectedCards();
    
    // Display the card's interpretation text below the cards if we've reached the max cards
    if (selectedCards.length === maxCards) {
        displayCardInterpretation();
    }
}

// Display selected cards in the reading area
function displaySelectedCards() {
    console.log("Displaying " + selectedCards.length + " cards in reading area");
    
    // Clear the reading area first
    readingArea.innerHTML = '';
    
    if (readingType === 'single') {
        // Single card reading
        if (selectedCards.length > 0) {
            const cardElement = createCardElement(selectedCards[0]);
            readingArea.appendChild(cardElement);
        }
    } else {
        // Three card reading
        const positions = ['Past', 'Present', 'Future'];
        
        selectedCards.forEach((card, index) => {
            if (index < positions.length) {
                const positionDiv = document.createElement('div');
                positionDiv.className = 'card-position';
                
                const positionLabel = document.createElement('div');
                positionLabel.className = 'position-label';
                positionLabel.textContent = positions[index];
                positionDiv.appendChild(positionLabel);
                
                const cardElement = createCardElement(card);
                positionDiv.appendChild(cardElement);
                
                readingArea.appendChild(positionDiv);
            }
        });
    }
}

// Display the card interpretation below the cards
function displayCardInterpretation() {
    // Clear any existing interpretation
    if (interpretation) {
        interpretation.innerHTML = '';
        
        // Create a spacer for breathing room
        const spacer = document.createElement('div');
        spacer.style.height = '40px';
        interpretation.appendChild(spacer);
        
        // Create interpretation header
        const header = document.createElement('h3');
        header.textContent = 'Card Meaning';
        interpretation.appendChild(header);
        
        if (readingType === 'single') {
            // Single card interpretation
            const card = selectedCards[0];
            displaySingleCardInfo(card);
        } else {
            // Three card interpretation
            displayThreeCardInfo();
        }
    }
}

// Display information for a single card
function displaySingleCardInfo(card) {
    const interpretationDiv = document.createElement('div');
    interpretationDiv.className = 'card-interpretation';
    
    const cardName = document.createElement('h4');
    cardName.textContent = card.name;
    interpretationDiv.appendChild(cardName);
    
    const cardMeaning = document.createElement('p');
    cardMeaning.textContent = card.meaning;
    interpretationDiv.appendChild(cardMeaning);
    
    const keywordsList = document.createElement('p');
    keywordsList.innerHTML = `<strong>Keywords:</strong> ${card.keywords.join(', ')}`;
    interpretationDiv.appendChild(keywordsList);
    
    interpretation.appendChild(interpretationDiv);
}

// Display information for three cards
function displayThreeCardInfo() {
    const positions = ['Past', 'Present', 'Future'];
    
    const interpretationDiv = document.createElement('div');
    interpretationDiv.className = 'spread-interpretation';
    
    // Create a description for the spread
    const spreadDescription = document.createElement('p');
    spreadDescription.innerHTML = `<em>This three-card spread represents influences from your past, your current situation, and potential future developments.</em>`;
    interpretationDiv.appendChild(spreadDescription);
    
    // Add information for each card
    selectedCards.forEach((card, index) => {
        const cardSection = document.createElement('div');
        cardSection.className = 'interpretation-section';
        cardSection.style.marginTop = '20px';
        
        const positionTitle = document.createElement('h4');
        positionTitle.textContent = `${positions[index]}: ${card.name}`;
        cardSection.appendChild(positionTitle);
        
        const cardMeaning = document.createElement('p');
        cardMeaning.textContent = card.meaning;
        cardSection.appendChild(cardMeaning);
        
        const keywordsList = document.createElement('p');
        keywordsList.innerHTML = `<strong>Keywords:</strong> ${card.keywords.join(', ')}`;
        cardSection.appendChild(keywordsList);
        
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

    // Check if image exists in card object
    if (card.image) {
        const img = document.createElement('img');
        img.src = `./img/${card.image}`;
        img.alt = `${card.name} tarot card`;

        // If image fails to load, fallback to symbol
        img.onerror = () => {
            cardImage.textContent = card.symbol;
        };

        cardImage.appendChild(img);
    } else {
        cardImage.textContent = card.symbol;
    }

    const cardMeaning = document.createElement('div');
    cardMeaning.className = 'card-meaning';
    cardMeaning.textContent = card.meaning;

    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardMeaning);

    return cardElement;
}


// Set the reading type
function setReadingType(type) {
    console.log("Setting reading type to: " + type);
    readingType = type;
    selectedCards = [];
    
    // Update UI
    if (type === 'single') {
        singleCardBtn.classList.add('active');
        threeCardBtn.classList.remove('active');
        readingTitle.textContent = 'Daily Card Reading';
        maxCards = 1;
    } else {
        singleCardBtn.classList.remove('active');
        threeCardBtn.classList.add('active');
        readingTitle.textContent = 'Past • Present • Future Reading';
        maxCards = 3;
    }
    
    // Clear previous readings
    readingArea.innerHTML = '';
    
    // Clear interpretation area if it exists
    if (interpretation) {
        interpretation.innerHTML = '';
    }
    
    // Reset any previously selected cards
    const allCards = document.querySelectorAll('.deck-card');
    allCards.forEach(card => {
        card.classList.remove('selected');
    });
    
    // Create deck
    createDeck();
}

// Initialize the app
function init() {
    console.log("Initializing app...");
    
    // Add event listeners
    singleCardBtn.addEventListener('click', () => setReadingType('single'));
    threeCardBtn.addEventListener('click', () => setReadingType('three'));
    
    // Default to single card reading on load
    setReadingType('single');

    
}

// Ensure we wait for DOM to be ready
document.addEventListener('DOMContentLoaded', init);