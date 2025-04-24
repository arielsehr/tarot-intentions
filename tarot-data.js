// Tarot card data (Major Arcana)
const tarotDeck = [
    {
        name: "The Fool",
        symbol: "0",
        keywords: ["beginnings", "innocence", "adventure", "potential"],
        meaning: "New beginnings, spontaneity, faith, apparent folly, risk-taking, freedom. The Fool represents taking a leap of faith and embarking on a new journey.",
        image: "fool.jpg"
    },
    {
        name: "The Magician",
        symbol: "I",
        keywords: ["manifestation", "power", "action", "creativity"],
        meaning: "Manifestation, resourcefulness, power, inspired action. The Magician represents your ability to utilize all elements at your disposal to create your reality.",
        image: "magician.jpg"
    },
    {
        name: "High Priestess",
        symbol: "II",
        keywords: ["intuition", "unconscious", "inner voice", "divine feminine"],
        meaning: "Intuition, sacred knowledge, divine feminine, the subconscious mind. The High Priestess represents a connection to your inner voice and hidden truths.",
        image: "priestess.jpg"
    },
    {
        name: "The Empress",
        symbol: "III",
        keywords: ["abundance", "nurturing", "fertility", "femininity"],
        meaning: "Femininity, beauty, nature, abundance, nurturing. The Empress represents creation, growth, and the nurturing of ideas or relationships.",
        image: "empress.jpg"
    },
    {
        name: "The Emperor",
        symbol: "IV",
        keywords: ["authority", "structure", "control", "leadership"],
        meaning: "Authority, structure, control, fatherhood, leadership. The Emperor represents establishment of order, stability, and foundations.",
        image: "emperor.jpg"
    },
    {
        name: "The Hierophant",
        symbol: "V",
        keywords: ["tradition", "conformity", "morality", "beliefs"],
        meaning: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions. The Hierophant represents connection to spiritual guidance and established systems.",
        image: "hierophant.jpg"
    },
    {
        name: "The Lovers",
        symbol: "VI",
        keywords: ["love", "harmony", "relationships", "choices"],
        meaning: "Love, harmony, relationships, values alignment, choices. The Lovers represents important decisions and alignment with your values.",
        image: "lovers.jpg"
    },
    {
        name: "The Chariot",
        symbol: "VII",
        keywords: ["control", "willpower", "success", "determination"],
        meaning: "Control, willpower, victory, determination, success. The Chariot represents overcoming obstacles through focus and confidence.",
        image: "chariot.jpg"
    },
    {
        name: "Strength",
        symbol: "VIII",
        keywords: ["courage", "patience", "compassion", "persuasion"],
        meaning: "Courage, persuasion, influence, compassion, inner strength. Strength represents emotional control and gentle power.",
        image: "strength.jpg"
    },
    {
        name: "The Hermit",
        symbol: "IX",
        keywords: ["soul-searching", "introspection", "solitude", "guidance"],
        meaning: "Introspection, solitude, inner guidance, contemplation. The Hermit represents withdrawal to seek truth and self-knowledge.",
        image: "hermit.jpg"
    },
    {
        name: "Wheel of Fortune",
        symbol: "X",
        keywords: ["change", "cycles", "fate", "turning point"],
        meaning: "Change, cycles, fate, pivotal moments, destiny. The Wheel of Fortune represents life's unpredictable nature and turning points.",
        image: "wheel.jpg"
    },
    {
        name: "Justice",
        symbol: "XI",
        keywords: ["fairness", "truth", "law", "consequence"],
        meaning: "Fairness, truth, cause and effect, law, balance. Justice represents the consequences of your actions and universal equilibrium.",
        image: "justice.jpg"
    },
    {
        name: "The Hanged Man",
        symbol: "XII",
        keywords: ["surrender", "new perspective", "letting go", "sacrifice"],
        meaning: "Surrender, letting go, new perspectives, suspension. The Hanged Man represents viewing life from a different angle and the wisdom of surrender.",
        image: "hanged.jpg"
    },
    {
        name: "Death",
        symbol: "XIII",
        keywords: ["endings", "change", "transformation", "transition"],
        meaning: "Endings, change, transformation, transition. Death represents the end of one phase and the beginning of another.",
        image: "death.jpg"
    },
    {
        name: "Temperance",
        symbol: "XIV",
        keywords: ["balance", "moderation", "patience", "purpose"],
        meaning: "Balance, moderation, patience, harmony, purpose. Temperance represents finding middle ground and combining opposites.",
        image: "temperance.jpg"
    },
    {
        name: "The Devil",
        symbol: "XV",
        keywords: ["shadow self", "attachment", "addiction", "restriction"],
        meaning: "Shadow self, attachment, addiction, illusion, restriction. The Devil represents feelings of entrapment and unhealthy patterns.",
        image: "devil.jpg"
    },
    {
        name: "The Tower",
        symbol: "XVI",
        keywords: ["sudden change", "revelation", "chaos", "awakening"],
        meaning: "Sudden change, revelation, awakening, chaos, upheaval. The Tower represents dramatic disruption that leads to growth.",
        image: "tower.jpg"
    },
    {
        name: "The Star",
        symbol: "XVII",
        keywords: ["hope", "faith", "renewal", "inspiration"],
        meaning: "Hope, faith, inspiration, serenity, renewal. The Star represents guidance and optimism after difficulty.",
        image: "star.jpg"
    },
    {
        name: "The Moon",
        symbol: "XVIII",
        keywords: ["illusion", "fear", "subconscious", "intuition"],
        meaning: "Illusion, intuition, uncertainty, subconscious, dreams. The Moon represents the unknown depths of your psyche.",
        image: "moon.jpg"
    },
    {
        name: "The Sun",
        symbol: "XIX",
        keywords: ["joy", "success", "positivity", "vitality"],
        meaning: "Joy, success, celebration, positivity, vitality. The Sun represents enlightenment and the warmth of achievement.",
        image: "sun.jpg"
    },
    {
        name: "Judgment",
        symbol: "XX",
        keywords: ["rebirth", "inner calling", "absolution", "awakening"],
        meaning: "Rebirth, inner calling, reckoning, awakening, absolution. Judgment represents self-evaluation and spiritual awakening.",
        image: "judgement.jpg"
    },
    {
        name: "The World",
        symbol: "XXI",
        keywords: ["completion", "achievement", "fulfillment", "wholeness"],
        meaning: "Completion, achievement, fulfillment, wholeness, harmony. The World represents the successful conclusion of a cycle.",
        image: "world.jpg"
    }
];

// Daily intentions for each card
const cardIntentions = {
    "The Fool": [
        "I embrace new beginnings with an open heart and mind",
        "I trust my journey even when I can't see the path ahead",
        "I approach today with fresh perspective and childlike wonder",
        "I release fear and take a leap of faith toward what calls me"
    ],
    "The Magician": [
        "I channel my skills and resources to manifest my goals",
        "I connect my inspiration to practical action today",
        "I recognize the power I have to create positive change",
        "I bring my unique gifts forward with confidence and purpose"
    ],
    "High Priestess": [
        "I honor my intuition and inner wisdom today",
        "I listen to the quiet voice within before making decisions",
        "I trust what cannot be seen or logically explained",
        "I make space for silence and receptivity in my day"
    ],
    "The Empress": [
        "I nurture my creative projects and relationships with care",
        "I connect with natural abundance and express gratitude",
        "I bring beauty and compassion to everything I touch today",
        "I allow ideas to grow organically without forcing outcomes"
    ],
    "The Emperor": [
        "I create helpful structure and boundaries in my life today",
        "I take leadership on matters that need clear direction",
        "I build solid foundations for future growth",
        "I bring order to areas of chaos with calm authority"
    ],
    "The Hierophant": [
        "I honor wisdom from tradition and respected sources",
        "I seek guidance from mentors when facing uncertainty",
        "I establish meaningful rituals that bring continuity to my day",
        "I recognize the value in conventional approaches"
    ],
    "The Lovers": [
        "I make choices aligned with my deepest values today",
        "I bring harmony to my relationships through open communication",
        "I balance different aspects of myself for greater wholeness",
        "I recognize when love is the appropriate response to a situation"
    ],
    "The Chariot": [
        "I maintain focus and determination despite obstacles",
        "I harness opposing forces within myself toward a single goal",
        "I move forward with confidence and clear direction",
        "I celebrate progress made through discipline and effort"
    ],
    "Strength": [
        "I approach challenges with gentle persistence rather than force",
        "I master my reactions and respond with emotional intelligence",
        "I practice compassionate firmness where necessary",
        "I recognize courage in vulnerability and authentic expression"
    ],
    "The Hermit": [
        "I make time for solitude and inner reflection today",
        "I seek wisdom through quiet contemplation before action",
        "I trust my inner light to guide me through uncertainty",
        "I embrace alone time as an opportunity for growth"
    ],
    "Wheel of Fortune": [
        "I embrace change as an opportunity for growth",
        "I adapt fluidly to life's natural cycles and rhythms",
        "I recognize perfect timing when I see it today",
        "I release attachment to outcomes beyond my control"
    ],
    "Justice": [
        "I make decisions based on fairness and truth today",
        "I take responsibility for the consequences of my actions",
        "I seek balance in all my interactions and exchanges",
        "I approach situations with clarity and impartiality"
    ],
    "The Hanged Man": [
        "I view challenges from a different perspective today",
        "I practice productive surrender instead of pointless struggle",
        "I release what must be let go for greater good",
        "I find wisdom in pausing before proceeding"
    ],
    "Death": [
        "I release what no longer serves my highest good",
        "I embrace necessary endings to make space for new beginnings",
        "I transform limiting patterns into opportunities for growth",
        "I welcome the natural cycles of completion in my life"
    ],
    "Temperance": [
        "I find the middle path between extremes today",
        "I practice patience with processes that need time to unfold",
        "I combine different elements of my life into a harmonious whole",
        "I maintain calm moderation in thought, word and action"
    ],
    "The Devil": [
        "I bring awareness to patterns that limit my freedom",
        "I question attachments that may not be serving my wellbeing",
        "I recognize where I have more choice than I've been exercising",
        "I face my shadows with courage and compassion"
    ],
    "The Tower": [
        "I remain open to sudden insights that change my perspective",
        "I allow necessary disruption to clear space for authentic growth",
        "I release false structures built on shaky foundations",
        "I trust that breakdowns often lead to breakthroughs"
    ],
    "The Star": [
        "I renew my hope and faith in positive possibilities",
        "I trust in the guidance available to me from many sources",
        "I recognize the healing taking place in my life right now",
        "I share my authentic light without hesitation"
    ],
    "The Moon": [
        "I navigate uncertainty with courage and intuitive awareness",
        "I pay attention to dreams and subtle messages from my subconscious",
        "I acknowledge fears without being controlled by them",
        "I trust the process of moving through confusion toward clarity"
    ],
    "The Sun": [
        "I celebrate achievements and express joy authentically",
        "I bring warmth and positive energy to my interactions",
        "I appreciate simple pleasures and moments of happiness",
        "I allow my true self to shine without diminishment"
    ],
    "Judgment": [
        "I heed the call toward my next level of development",
        "I honestly evaluate my actions and choices without harsh judgment",
        "I practice forgiveness toward myself and others",
        "I welcome opportunities for renewal and fresh starts"
    ],
    "The World": [
        "I acknowledge how far I've come and celebrate completion",
        "I integrate all aspects of my experience into a meaningful whole",
        "I recognize my connection to the larger community and world",
        "I prepare for new cycles with gratitude for what has been accomplished"
    ]
};

// Position interpretations for three-card spreads
const positionMeanings = {
    "Foundation": "This card represents your starting point today - the energy or mindset that forms the basis of your day.",
    "Focus": "This card suggests where to direct your attention and energy for greatest benefit today.",
    "Action": "This card indicates the most beneficial way to approach challenges and opportunities that arise today."
};