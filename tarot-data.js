// Tarot card data (Major Arcana)
const tarotDeck = [
    {
        name: "The Fool",
        symbol: "0",
        keywords: ["beginnings", "innocence", "adventure", "potential"],
        meaning: "New beginnings, spontaneity, faith, apparent folly, risk-taking, freedom. The Fool represents taking a leap of faith and embarking on a new journey."
    },
    {
        name: "The Magician",
        symbol: "I",
        keywords: ["manifestation", "power", "action", "creativity"],
        meaning: "Manifestation, resourcefulness, power, inspired action. The Magician represents your ability to utilize all elements at your disposal to create your reality."
    },
    {
        name: "High Priestess",
        symbol: "II",
        keywords: ["intuition", "unconscious", "inner voice", "divine feminine"],
        meaning: "Intuition, sacred knowledge, divine feminine, the subconscious mind. The High Priestess represents a connection to your inner voice and hidden truths."
    },
    {
        name: "The Empress",
        symbol: "III",
        keywords: ["abundance", "nurturing", "fertility", "femininity"],
        meaning: "Femininity, beauty, nature, abundance, nurturing. The Empress represents creation, growth, and the nurturing of ideas or relationships."
    },
    {
        name: "The Emperor",
        symbol: "IV",
        keywords: ["authority", "structure", "control", "leadership"],
        meaning: "Authority, structure, control, fatherhood, leadership. The Emperor represents establishment of order, stability, and foundations."
    },
    {
        name: "The Hierophant",
        symbol: "V",
        keywords: ["tradition", "conformity", "morality", "beliefs"],
        meaning: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions. The Hierophant represents connection to spiritual guidance and established systems."
    },
    {
        name: "The Lovers",
        symbol: "VI",
        keywords: ["love", "harmony", "relationships", "choices"],
        meaning: "Love, harmony, relationships, values alignment, choices. The Lovers represents important decisions and alignment with your values."
    },
    {
        name: "The Chariot",
        symbol: "VII",
        keywords: ["control", "willpower", "success", "determination"],
        meaning: "Control, willpower, victory, determination, success. The Chariot represents overcoming obstacles through focus and confidence."
    },
    {
        name: "Strength",
        symbol: "VIII",
        keywords: ["courage", "patience", "compassion", "persuasion"],
        meaning: "Courage, persuasion, influence, compassion, inner strength. Strength represents emotional control and gentle power."
    },
    {
        name: "The Hermit",
        symbol: "IX",
        keywords: ["soul-searching", "introspection", "solitude", "guidance"],
        meaning: "Introspection, solitude, inner guidance, contemplation. The Hermit represents withdrawal to seek truth and self-knowledge."
    },
    {
        name: "Wheel of Fortune",
        symbol: "X",
        keywords: ["change", "cycles", "fate", "turning point"],
        meaning: "Change, cycles, fate, pivotal moments, destiny. The Wheel of Fortune represents life's unpredictable nature and turning points."
    },
    {
        name: "Justice",
        symbol: "XI",
        keywords: ["fairness", "truth", "law", "consequence"],
        meaning: "Fairness, truth, cause and effect, law, balance. Justice represents the consequences of your actions and universal equilibrium."
    },
    {
        name: "The Hanged Man",
        symbol: "XII",
        keywords: ["surrender", "new perspective", "letting go", "sacrifice"],
        meaning: "Surrender, letting go, new perspectives, suspension. The Hanged Man represents viewing life from a different angle and the wisdom of surrender."
    },
    {
        name: "Death",
        symbol: "XIII",
        keywords: ["endings", "change", "transformation", "transition"],
        meaning: "Endings, change, transformation, transition. Death represents the end of one phase and the beginning of another."
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