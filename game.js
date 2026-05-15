// --- Character figure part IDs (each step = one wrong guess; entry can be id or [id, id]) ---
const FIGURE_PART_IDS = {
  boy: [
    "part-boy-head", "part-boy-body", "part-boy-arm-left", "part-boy-arm-right",
    "part-boy-leg-left", "part-boy-leg-right"
  ],
  girl: [
    ["part-girl-head", "part-girl-hair"], "part-girl-body", "part-girl-arm-left", "part-girl-arm-right",
    "part-girl-leg-left", "part-girl-leg-right"
  ],
  animal: [
    "part-animal-head", "part-animal-body", "part-animal-tail", "part-animal-leg-left",
    "part-animal-leg-right", "part-animal-ear"
  ],
  robot: [
    "part-robot-head", "part-robot-body", "part-robot-arm-left", "part-robot-arm-right",
    "part-robot-leg-left", "part-robot-leg-right"
  ]
};

const MAX_WRONG = 6;

// --- Category data: name, words, icon (SVG path/data for inline icon) ---
const CATEGORIES = {
  Movies: {
    words: [
      "Titanic", "Inception", "Avatar", "Jaws", "Alien", "Gladiator", "Matrix", "Casablanca",
      "Psycho", "Rocky", "Forrest Gump", "Braveheart", "Amadeus", "Chinatown", "Vertigo",
      "Blade Runner", "Apocalypse Now", "Goodfellas", "Pulp Fiction", "Fargo", "Memento",
      "Eternal Sunshine", "No Country For Old Men", "The Shining", "Alien", "Back To The Future"
    ],
    icon: "film",
    color: "#e11d48"
  },
  Celebrities: {
    words: [
      "Einstein", "Shakespeare", "Mozart", "Beethoven", "Newton", "Darwin", "Tesla", "Galileo",
      "Da Vinci", "Napoleon", "Cleopatra", "Hemingway", "Picasso", "Curie", "Hawking",
      "Jobs", "Gandhi", "Churchill", "Lincoln", "Mandela", "Monroe", "Chaplin", "Hitchcock"
    ],
    icon: "star",
    color: "#f59e0b"
  },
  Sports: {
    words: [
      "Football", "Basketball", "Tennis", "Swimming", "Boxing", "Cycling", "Hockey", "Volleyball",
      "Baseball", "Wrestling", "Golf", "Skiing", "Surfing", "Rugby", "Marathon", "Gymnastics",
      "Archery", "Fencing", "Judo", "Karate", "Cricket", "Badminton", "Sailing", "Diving"
    ],
    icon: "trophy",
    color: "#10b981"
  },
  Cities: {
    words: [
      "Istanbul", "London", "Paris", "Tokyo", "Berlin", "Rome", "Madrid", "Moscow", "Sydney",
      "Cairo", "Athens", "Vienna", "Amsterdam", "Barcelona", "Dubai", "Singapore", "Seoul",
      "Beijing", "Mumbai", "Toronto", "New York", "Los Angeles", "Chicago", "Boston",
      "Lisbon", "Prague", "Budapest", "Warsaw", "Stockholm", "Oslo", "Copenhagen", "Helsinki"
    ],
    icon: "city",
    color: "#3b82f6"
  },
  Music: {
    words: [
      "Guitar", "Piano", "Violin", "Drums", "Saxophone", "Trumpet", "Bass", "Flute", "Cello",
      "Beatles", "Queen", "Nirvana", "U2", "Coldplay", "Jazz", "Rock", "Blues", "Classical",
      "Opera", "Symphony", "Orchestra", "Concerto", "Sonata", "Melody", "Rhythm", "Harmony"
    ],
    icon: "music",
    color: "#8b5cf6"
  },
  Food: {
    words: [
      "Pizza", "Burger", "Pasta", "Sushi", "Tacos", "Curry", "Salad", "Sandwich", "Omelette",
      "Pancakes", "Waffles", "Croissant", "Donut", "Ice Cream", "Chocolate", "Cheese",
      "Avocado", "Watermelon", "Strawberry", "Mango", "Pineapple", "Broccoli", "Asparagus",
      "Lasagna", "Risotto", "Paella", "Hummus", "Falafel", "Kebab", "Dumplings", "Ramen"
    ],
    icon: "food",
    color: "#f97316"
  },
  Countries: {
    words: [
      "Turkey", "Germany", "France", "Japan", "Italy", "Spain", "Brazil", "India", "China",
      "Canada", "Australia", "Egypt", "Greece", "Russia", "Mexico", "Argentina", "Portugal",
      "Netherlands", "Sweden", "Norway", "Poland", "Ireland", "Scotland", "Belgium", "Switzerland",
      "Austria", "Thailand", "Vietnam", "Indonesia", "South Africa", "Nigeria", "Morocco"
    ],
    icon: "globe",
    color: "#06b6d4"
  },
  Animals: {
    words: [
      "Elephant", "Giraffe", "Lion", "Tiger", "Penguin", "Dolphin", "Kangaroo", "Zebra",
      "Hippopotamus", "Crocodile", "Butterfly", "Octopus", "Squirrel", "Koala", "Panda",
      "Gorilla", "Chimpanzee", "Wolf", "Fox", "Bear", "Eagle", "Owl", "Parrot", "Flamingo",
      "Turtle", "Rabbit", "Hamster", "Otter", "Seal", "Whale", "Shark", "Jellyfish"
    ],
    icon: "paw",
    color: "#84cc16"
  },
  Nature: {
    words: [
      "Mountain", "Volcano", "Forest", "Ocean", "River", "Waterfall", "Desert", "Island",
      "Canyon", "Glacier", "Rainforest", "Meadow", "Valley", "Cliff", "Lake", "Stream",
      "Hurricane", "Aurora", "Sunset", "Thunderstorm", "Blizzard", "Tornado", "Earthquake",
      "Coral Reef", "Savanna", "Tundra", "Wetland", "Cave", "Spring", "Geyser"
    ],
    icon: "leaf",
    color: "#22c55e"
  },
  Technology: {
    words: [
      "Computer", "Smartphone", "Internet", "Robot", "Software", "Algorithm", "Database",
      "Keyboard", "Monitor", "Laptop", "Tablet", "Browser", "Password", "Firewall",
      "Artificial Intelligence", "Virtual Reality", "Cryptocurrency", "Blockchain",
      "Satellite", "Drone", "Microchip", "Processor", "Memory", "Network", "Cloud",
      "Application", "Website", "Server", "Code", "Programming", "Digital", "Wireless"
    ],
    icon: "tech",
    color: "#6366f1"
  }
};

// Icon SVGs (minimal paths for each category)
// Friendly, soft category icons (rounded, minimal, not scary)
const CATEGORY_ICONS = {
  film: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'><rect x='4' y='5' width='16' height='14' rx='3'/><circle cx='9' cy='12' r='1.5' fill='currentColor'/><circle cx='15' cy='12' r='1.5' fill='currentColor'/></svg>",
  star: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M12 3l2.4 4.8 5.2.8-3.8 3.6.9 5.1L12 14.5l-4.6 2.4.9-5.1L5.4 8.6l5.2-.8L12 3z'/></svg>",
  trophy: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><path d='M8 4h8v3a4 4 0 01-4 4 4 4 0 01-4-4V4z'/><path d='M6 7h12v1.5a4 4 0 01-4 4h-4a4 4 0 01-4-4V7z'/><ellipse cx='12' cy='18' rx='4' ry='2'/><path d='M12 16v-2M10 20h4'/></svg>",
  city: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='10' width='5' height='12' rx='1.5'/><rect x='14' y='6' width='5' height='16' rx='1.5'/><rect x='9.5' y='14' width='5' height='8' rx='1.5'/></svg>",
  music: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><path d='M9 18V8l8-2v10'/><circle cx='9' cy='18' r='2.5'/><circle cx='17' cy='16' r='2.5'/></svg>",
  food: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='10' r='5'/><path d='M12 15v6M10 21h4'/></svg>",
  globe: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='9'/><path d='M3 12h18M12 3a13 13 0 012 9 13 13 0 01-2 9 13 13 0 01-2-9 13 13 0 012-9z'/></svg>",
  paw: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='14' r='3.5'/><circle cx='7' cy='10' r='2'/><circle cx='17' cy='10' r='2'/><circle cx='9.5' cy='6.5' r='1.8'/><circle cx='14.5' cy='6.5' r='1.8'/></svg>",
  leaf: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><path d='M11 20c2.5-3 4-6.5 4-10a6 6 0 00-12 0c0 3.5 1.5 7 4 10z'/></svg>",
  tech: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='4' width='14' height='16' rx='3'/><path d='M9 9h6M9 13h6M9 17h4'/></svg>"
};

function getRandomWord(categoryKey) {
  const cat = CATEGORIES[categoryKey];
  if (!cat || !cat.words || cat.words.length === 0) return null;
  return cat.words[Math.floor(Math.random() * cat.words.length)];
}

function getPartIds(character) {
  return FIGURE_PART_IDS[character] || FIGURE_PART_IDS.boy;
}

// --- State ---
let selectedCharacter = "boy";
let currentWord = "";
let revealed = [];
let wrongCount = 0;
let guessedLetters = new Set();
let gameOver = false;

// --- DOM refs ---
let characterSection;
let categorySection;
let gameSection;
let wordDisplayEl;
let messageEl;
let letterGridEl;
let playAgainBtn;
let changeCharacterBtn;
let categoryGridEl;
let gameCategoryEl;

function getElements() {
  characterSection = document.getElementById("character-section");
  categorySection = document.getElementById("category-section");
  gameSection = document.getElementById("game-section");
  wordDisplayEl = document.getElementById("word-display");
  messageEl = document.getElementById("message");
  letterGridEl = document.getElementById("letter-grid");
  playAgainBtn = document.getElementById("play-again-btn");
  changeCharacterBtn = document.getElementById("change-character-btn");
  categoryGridEl = document.getElementById("category-grid");
  gameCategoryEl = document.getElementById("game-category");
}

function hideFigurePart(character, index) {
  const parts = getPartIds(character);
  if (index < 0 || index >= parts.length) return;
  const part = parts[index];
  const ids = Array.isArray(part) ? part : [part];
  ids.forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden-part");
  });
}

function showAllFigureParts(character) {
  const parts = getPartIds(character);
  parts.forEach(function (part) {
    const ids = Array.isArray(part) ? part : [part];
    ids.forEach(function (id) {
      const el = document.getElementById(id);
      if (el) el.classList.remove("hidden-part");
    });
  });
}

function setActiveFigure(character) {
  document.querySelectorAll(".figure-character").forEach(function (el) {
    el.classList.add("hidden");
  });
  const container = document.getElementById("figure-" + character);
  if (container) container.classList.remove("hidden");
}

// --- Display ---
function renderWord() {
  const chars = currentWord.toUpperCase().split("");
  wordDisplayEl.innerHTML = chars
    .map(function (ch) {
      if (ch === " ") return '<span class="space">&nbsp;</span>';
      if (revealed.includes(ch)) return "<span>" + ch + "</span>";
      return '<span class="blank">_</span>';
    })
    .join(" ");
}

function buildLetterGrid() {
  letterGridEl.innerHTML = "";
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(function (letter) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "letter-btn";
    btn.textContent = letter;
    btn.dataset.letter = letter;
    btn.addEventListener("click", function () { guessLetter(letter); });
    letterGridEl.appendChild(btn);
  });
}

function setLetterButtonState(letter, state) {
  var btn = letterGridEl.querySelector('[data-letter="' + letter + '"]');
  if (!btn) return;
  btn.disabled = true;
  btn.classList.remove("correct", "wrong");
  if (state === "correct") btn.classList.add("correct");
  if (state === "wrong") btn.classList.add("wrong");
}

function resetLetterButtons() {
  letterGridEl.querySelectorAll(".letter-btn").forEach(function (btn) {
    btn.disabled = false;
    btn.classList.remove("correct", "wrong");
  });
}

function setMessage(text, type) {
  messageEl.textContent = text;
  messageEl.className = "message" + (type ? " " + type : "");
}

function buildCategoryGrid() {
  categoryGridEl.innerHTML = "";
  Object.keys(CATEGORIES).forEach(function (key) {
    var cat = CATEGORIES[key];
    var card = document.createElement("button");
    card.type = "button";
    card.className = "category-card";
    card.dataset.category = key;
    card.style.setProperty("--cat-color", cat.color || "#64748b");
    var iconWrap = document.createElement("span");
    iconWrap.className = "category-card-icon";
    iconWrap.innerHTML = CATEGORY_ICONS[cat.icon] || "";
    var label = document.createElement("span");
    label.className = "category-card-label";
    label.textContent = key;
    card.appendChild(iconWrap);
    card.appendChild(label);
    card.addEventListener("click", function () { startGame(key); });
    categoryGridEl.appendChild(card);
  });
}

// --- Game logic ---
function startGame(categoryKey) {
  var word = getRandomWord(categoryKey);
  if (!word) {
    setMessage("No words in this category.");
    return;
  }

  currentWord = word.toUpperCase();
  revealed = [];
  wrongCount = 0;
  guessedLetters = new Set();
  gameOver = false;

  categorySection.classList.add("hidden");
  gameSection.classList.remove("hidden");
  playAgainBtn.classList.add("hidden");
  changeCharacterBtn.classList.add("hidden");

  if (gameCategoryEl) gameCategoryEl.textContent = "Category: " + categoryKey;

  setActiveFigure(selectedCharacter);
  showAllFigureParts(selectedCharacter);
  renderWord();
  resetLetterButtons();
  setMessage("Guess a letter.");
}

function checkWin() {
  var target = currentWord.replace(/\s/g, "");
  var revealedSet = new Set(revealed);
  for (var i = 0; i < target.length; i++) {
    if (!revealedSet.has(target[i])) return false;
  }
  return true;
}

function guessLetter(letter) {
  if (gameOver) return;
  letter = letter.toUpperCase();
  if (guessedLetters.has(letter)) return;
  guessedLetters.add(letter);

  if (currentWord.includes(letter)) {
    revealed.push(letter);
    setLetterButtonState(letter, "correct");
    renderWord();
    if (checkWin()) {
      gameOver = true;
      setMessage("You win!", "win");
      playAgainBtn.classList.remove("hidden");
      changeCharacterBtn.classList.remove("hidden");
    }
  } else {
    setLetterButtonState(letter, "wrong");
    hideFigurePart(selectedCharacter, wrongCount);
    wrongCount++;
    if (wrongCount >= MAX_WRONG) {
      gameOver = true;
      setMessage("You lose! The word was: " + currentWord, "lose");
      playAgainBtn.classList.remove("hidden");
      changeCharacterBtn.classList.remove("hidden");
    } else {
      setMessage("Wrong. Guess again.");
    }
  }
}

function playAgain() {
  gameSection.classList.add("hidden");
  categorySection.classList.remove("hidden");
  setMessage("");
}

function changeCharacter() {
  gameSection.classList.add("hidden");
  categorySection.classList.add("hidden");
  characterSection.classList.remove("hidden");
  setMessage("");
}

// --- Init ---
function init() {
  getElements();

  document.querySelectorAll(".character-card").forEach(function (btn) {
    btn.addEventListener("click", function () {
      selectedCharacter = btn.dataset.character || "boy";
      characterSection.classList.add("hidden");
      categorySection.classList.remove("hidden");
    });
  });

  playAgainBtn.addEventListener("click", playAgain);
  changeCharacterBtn.addEventListener("click", changeCharacter);

  buildCategoryGrid();
  buildLetterGrid();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
