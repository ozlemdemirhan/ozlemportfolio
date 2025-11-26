window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const characters = [
  {
    "ID": 1,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 2,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 3,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 4,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 5,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 6,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 7,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 8,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 9,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 10,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 11,
    "Glasses": true,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 12,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 13,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 14,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 15,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 16,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 17,
    "Glasses": false,
    "HairColor": "white",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 18,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 19,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 20,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 21,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 22,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 23,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 24,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 25,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 26,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 27,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 28,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 29,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 30,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  }
];

// Select a random mystery character
const index = Math.floor(Math.random() * characters.length);
const mystery = characters[index];

// Store trait values in Storyline variables
const player = GetPlayer();
player.SetVar("MysteryCharacterIndex", mystery.ID);
player.SetVar("MysteryGlasses", mystery.Glasses);
player.SetVar("MysteryHair", mystery.HairColor);
player.SetVar("MysteryGender", mystery.Gender);
player.SetVar("MysteryHat", mystery.Hat);
player.SetVar("MysterySmilingWithTeeth", mystery.SmilingWithTeeth);

/**
 * Eliminate characters who don't match a given trait value
 * @param {string} trait - Trait key (e.g., "Glasses")
 * @param {any} expectedValue - Target value to compare
 */
function filterCharacters(trait, expectedValue) {
  for (const char of characters) {
    const isMatch = char[trait] === expectedValue;
    if (!isMatch) {
      player.SetVar("isEliminated_" + char.ID, true);
    }
  }
}
}

window.Script2 = function()
{
  const player = GetPlayer();
const guessID = 1; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script3 = function()
{
  const player = GetPlayer();
const guessID = 2; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script4 = function()
{
  const player = GetPlayer();
const guessID = 3; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script5 = function()
{
  const player = GetPlayer();
const guessID = 4; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script6 = function()
{
  const player = GetPlayer();
const guessID = 5; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script7 = function()
{
  const player = GetPlayer();
const guessID = 6; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script8 = function()
{
  const player = GetPlayer();
const guessID = 7; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script9 = function()
{
  const player = GetPlayer();
const guessID = 8; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script10 = function()
{
  const player = GetPlayer();
const guessID = 9; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script11 = function()
{
  const player = GetPlayer();
const guessID = 10; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script12 = function()
{
  const player = GetPlayer();
const guessID = 11; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script13 = function()
{
  const player = GetPlayer();
const guessID = 12; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script14 = function()
{
  const player = GetPlayer();
const guessID = 13; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script15 = function()
{
  const player = GetPlayer();
const guessID = 14; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script16 = function()
{
  const player = GetPlayer();
const guessID = 15; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script17 = function()
{
  const player = GetPlayer();
const guessID = 16; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script18 = function()
{
  const player = GetPlayer();
const guessID = 17; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script19 = function()
{
  const player = GetPlayer();
const guessID = 18; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script20 = function()
{
  const player = GetPlayer();
const guessID = 19; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script21 = function()
{
  const player = GetPlayer();
const guessID = 20; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script22 = function()
{
  const player = GetPlayer();
const guessID = 21; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script23 = function()
{
  const player = GetPlayer();
const guessID = 22; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script24 = function()
{
  const player = GetPlayer();
const guessID = 23; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script25 = function()
{
  const player = GetPlayer();
const guessID = 24; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script26 = function()
{
  const player = GetPlayer();
const guessID = 25; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script27 = function()
{
  const player = GetPlayer();
const guessID = 26; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script28 = function()
{
  const player = GetPlayer();
const guessID = 27; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script29 = function()
{
  const player = GetPlayer();
const guessID = 28; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script30 = function()
{
  const player = GetPlayer();
const guessID = 29; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script31 = function()
{
  const player = GetPlayer();
const guessID = 30; // Change for each character

const mysteryID = player.GetVar("MysteryCharacterIndex");
if (guessID === mysteryID) {
  player.SetVar("GuessResult", "Correct");
} else {
  player.SetVar("GuessResult", "Wrong");
}
}

window.Script32 = function()
{
  const characters = [
  {
    "ID": 1,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 2,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 3,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 4,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 5,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 6,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 7,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 8,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 9,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 10,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 11,
    "Glasses": true,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 12,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 13,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 14,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 15,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 16,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 17,
    "Glasses": false,
    "HairColor": "white",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 18,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 19,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 20,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 21,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 22,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 23,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 24,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 25,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 26,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 27,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 28,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 29,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 30,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  }
];
function eliminateByTrait(trait, value, keepMatches) {
  const player = GetPlayer();
  for (const char of characters) {
    const isMatch = char[trait] === value;
    const eliminate = keepMatches ? !isMatch : isMatch;
    if (eliminate) {
      player.SetVar("isEliminated_" + char.ID, true);
    }
  }
}

const player = GetPlayer();
const actual = player.GetVar("MysteryGlasses");
const userGuess = true;
const isCorrect = actual === userGuess;

player.SetVar("AnswerResult", isCorrect ? "Yes" : "No");

// ✅ If guess was correct, eliminate those who don’t match
// ❌ If guess was wrong, eliminate those who *do* match
eliminateByTrait("Glasses", userGuess, isCorrect);

// Count question
player.SetVar("QuestionCount", player.GetVar("QuestionCount") + 1);
}

window.Script33 = function()
{
  const characters = [
  {
    "ID": 1,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 2,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 3,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 4,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 5,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 6,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 7,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 8,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 9,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 10,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 11,
    "Glasses": true,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 12,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 13,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 14,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 15,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 16,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 17,
    "Glasses": false,
    "HairColor": "white",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 18,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 19,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 20,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 21,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 22,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 23,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 24,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 25,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 26,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 27,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 28,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 29,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 30,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  }
];
function eliminateByTrait(trait, value, keepMatches) {
  const player = GetPlayer();
  for (const char of characters) {
    const isMatch = char[trait] === value;
    const eliminate = keepMatches ? !isMatch : isMatch;
    if (eliminate) {
      player.SetVar("isEliminated_" + char.ID, true);
    }
  }
}

const player = GetPlayer();
const actual = player.GetVar("MysteryGender");
const userGuess = "female";
const isCorrect = actual === userGuess;

player.SetVar("AnswerResult", isCorrect ? "Yes" : "No");

// ✅ If guess was correct, eliminate those who don’t match
// ❌ If guess was wrong, eliminate those who *do* match
eliminateByTrait("Gender", userGuess, isCorrect);

// Count question
player.SetVar("QuestionCount", player.GetVar("QuestionCount") + 1);

}

window.Script34 = function()
{
  const characters = [
  {
    "ID": 1,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 2,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 3,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 4,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 5,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 6,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 7,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 8,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 9,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 10,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 11,
    "Glasses": true,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 12,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 13,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 14,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 15,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 16,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 17,
    "Glasses": false,
    "HairColor": "white",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 18,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 19,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 20,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 21,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 22,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 23,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 24,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 25,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 26,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 27,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 28,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 29,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 30,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  }
];
function eliminateByTrait(trait, value, keepMatches) {
  const player = GetPlayer();
  for (const char of characters) {
    const isMatch = char[trait] === value;
    const eliminate = keepMatches ? !isMatch : isMatch;
    if (eliminate) {
      player.SetVar("isEliminated_" + char.ID, true);
    }
  }
}

const player = GetPlayer();
const actual = player.GetVar("MysteryGender");
const userGuess = "male";
const isCorrect = actual === userGuess;

player.SetVar("AnswerResult", isCorrect ? "Yes" : "No");

// ✅ If guess was correct, eliminate those who don’t match
// ❌ If guess was wrong, eliminate those who *do* match
eliminateByTrait("Gender", userGuess, isCorrect);

// Count question
player.SetVar("QuestionCount", player.GetVar("QuestionCount") + 1);

}

window.Script35 = function()
{
  const characters = [
  {
    "ID": 1,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 2,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 3,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 4,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 5,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 6,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 7,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 8,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 9,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 10,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 11,
    "Glasses": true,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 12,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 13,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 14,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 15,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 16,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 17,
    "Glasses": false,
    "HairColor": "white",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 18,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 19,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 20,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 21,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 22,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 23,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 24,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 25,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 26,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 27,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 28,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 29,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 30,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  }
];
function eliminateByTrait(trait, value, keepMatches) {
  const player = GetPlayer();
  for (const char of characters) {
    const isMatch = char[trait] === value;
    const eliminate = keepMatches ? !isMatch : isMatch;
    if (eliminate) {
      player.SetVar("isEliminated_" + char.ID, true);
    }
  }
}

const player = GetPlayer();
const actual = player.GetVar("MysteryHat");
const userGuess = true;
const isCorrect = actual === userGuess;

player.SetVar("AnswerResult", isCorrect ? "Yes" : "No");

// ✅ If guess was correct, eliminate those who don’t match
// ❌ If guess was wrong, eliminate those who *do* match
eliminateByTrait("Hat", userGuess, isCorrect);

// Count question
player.SetVar("QuestionCount", player.GetVar("QuestionCount") + 1);
}

window.Script36 = function()
{
  const characters = [
  {
    "ID": 1,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 2,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 3,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 4,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 5,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 6,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 7,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 8,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 9,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 10,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 11,
    "Glasses": true,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 12,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 13,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 14,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 15,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 16,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 17,
    "Glasses": false,
    "HairColor": "white",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 18,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 19,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 20,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 21,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 22,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 23,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 24,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 25,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 26,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 27,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 28,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 29,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 30,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  }
];
function eliminateByTrait(trait, value, keepMatches) {
  const player = GetPlayer();
  for (const char of characters) {
    const isMatch = char[trait] === value;
    const eliminate = keepMatches ? !isMatch : isMatch;
    if (eliminate) {
      player.SetVar("isEliminated_" + char.ID, true);
    }
  }
}

const player = GetPlayer();
const actual = player.GetVar("MysteryHair");
const userGuess = "blonde";
const isCorrect = actual === userGuess;

player.SetVar("AnswerResult", isCorrect ? "Yes" : "No");

// ✅ If guess was correct, eliminate those who don’t match
// ❌ If guess was wrong, eliminate those who *do* match
eliminateByTrait("HairColor", userGuess, isCorrect);

// Count question
player.SetVar("QuestionCount", player.GetVar("QuestionCount") + 1);
}

window.Script37 = function()
{
  const characters = [
  {
    "ID": 1,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 2,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 3,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 4,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 5,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 6,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 7,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 8,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 9,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 10,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 11,
    "Glasses": true,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 12,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 13,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 14,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 15,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 16,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 17,
    "Glasses": false,
    "HairColor": "white",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 18,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 19,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 20,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 21,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 22,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 23,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 24,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 25,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 26,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 27,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 28,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 29,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 30,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  }
];
function eliminateByTrait(trait, value, keepMatches) {
  const player = GetPlayer();
  for (const char of characters) {
    const isMatch = char[trait] === value;
    const eliminate = keepMatches ? !isMatch : isMatch;
    if (eliminate) {
      player.SetVar("isEliminated_" + char.ID, true);
    }
  }
}

const player = GetPlayer();
const actual = player.GetVar("MysteryHair");
const userGuess = "bald";
const isCorrect = actual === userGuess;

player.SetVar("AnswerResult", isCorrect ? "Yes" : "No");

// ✅ If guess was correct, eliminate those who don’t match
// ❌ If guess was wrong, eliminate those who *do* match
eliminateByTrait("HairColor", userGuess, isCorrect);

// Count question
player.SetVar("QuestionCount", player.GetVar("QuestionCount") + 1);
}

window.Script38 = function()
{
  const characters = [
  {
    "ID": 1,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 2,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 3,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 4,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 5,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 6,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 7,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 8,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 9,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 10,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 11,
    "Glasses": true,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 12,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 13,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 14,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 15,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 16,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 17,
    "Glasses": false,
    "HairColor": "white",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 18,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 19,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 20,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 21,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 22,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 23,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 24,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 25,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 26,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 27,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 28,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 29,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 30,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  }
];
function eliminateByTrait(trait, value, keepMatches) {
  const player = GetPlayer();
  for (const char of characters) {
    const isMatch = char[trait] === value;
    const eliminate = keepMatches ? !isMatch : isMatch;
    if (eliminate) {
      player.SetVar("isEliminated_" + char.ID, true);
    }
  }
}

const player = GetPlayer();
const actual = player.GetVar("MysteryHair");
const userGuess = "white";
const isCorrect = actual === userGuess;

player.SetVar("AnswerResult", isCorrect ? "Yes" : "No");

// ✅ If guess was correct, eliminate those who don’t match
// ❌ If guess was wrong, eliminate those who *do* match
eliminateByTrait("HairColor", userGuess, isCorrect);

// Count question
player.SetVar("QuestionCount", player.GetVar("QuestionCount") + 1);
}

window.Script39 = function()
{
  const characters = [
  {
    "ID": 1,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 2,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 3,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 4,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 5,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 6,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 7,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 8,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 9,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 10,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 11,
    "Glasses": true,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 12,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 13,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 14,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 15,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 16,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 17,
    "Glasses": false,
    "HairColor": "white",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 18,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 19,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 20,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 21,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 22,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 23,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 24,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 25,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 26,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 27,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 28,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 29,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 30,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  }
];
function eliminateByTrait(trait, value, keepMatches) {
  const player = GetPlayer();
  for (const char of characters) {
    const isMatch = char[trait] === value;
    const eliminate = keepMatches ? !isMatch : isMatch;
    if (eliminate) {
      player.SetVar("isEliminated_" + char.ID, true);
    }
  }
}

const player = GetPlayer();
const actual = player.GetVar("MysterySmilingWithTeeth");
const userGuess = true;
const isCorrect = actual === userGuess;

player.SetVar("AnswerResult", isCorrect ? "Yes" : "No");

// ✅ If guess was correct, eliminate those who don’t match
// ❌ If guess was wrong, eliminate those who *do* match
eliminateByTrait("SmilingWithTeeth", userGuess, isCorrect);

// Count question
player.SetVar("QuestionCount", player.GetVar("QuestionCount") + 1);
}

window.Script40 = function()
{
  const characters = [
  {
    "ID": 1,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 2,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 3,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 4,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 5,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 6,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 7,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 8,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 9,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 10,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 11,
    "Glasses": true,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 12,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 13,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 14,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 15,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 16,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 17,
    "Glasses": false,
    "HairColor": "white",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 18,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 19,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 20,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 21,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 22,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 23,
    "Glasses": true,
    "HairColor": "black",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 24,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": true,
    "SmilingWithTeeth": false
  },
  {
    "ID": 25,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 26,
    "Glasses": true,
    "HairColor": "white",
    "Gender": "male",
    "Hat": true,
    "SmilingWithTeeth": true
  },
  {
    "ID": 27,
    "Glasses": false,
    "HairColor": "black",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  },
  {
    "ID": 28,
    "Glasses": false,
    "HairColor": "blonde",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 29,
    "Glasses": true,
    "HairColor": "bald",
    "Gender": "male",
    "Hat": false,
    "SmilingWithTeeth": false
  },
  {
    "ID": 30,
    "Glasses": false,
    "HairColor": "brown",
    "Gender": "female",
    "Hat": false,
    "SmilingWithTeeth": true
  }
];
function eliminateByTrait(trait, value, keepMatches) {
  const player = GetPlayer();
  for (const char of characters) {
    const isMatch = char[trait] === value;
    const eliminate = keepMatches ? !isMatch : isMatch;
    if (eliminate) {
      player.SetVar("isEliminated_" + char.ID, true);
    }
  }
}

const player = GetPlayer();
const actual = player.GetVar("MysteryHair");
const userGuess = "black";
const isCorrect = actual === userGuess;

player.SetVar("AnswerResult", isCorrect ? "Yes" : "No");

// ✅ If guess was correct, eliminate those who don’t match
// ❌ If guess was wrong, eliminate those who *do* match
eliminateByTrait("HairColor", userGuess, isCorrect);

// Count question
player.SetVar("QuestionCount", player.GetVar("QuestionCount") + 1);
}

window.Script41 = function()
{
  const player = GetPlayer();
for (let i = 1; i <= 30; i++) {
  player.SetVar("isEliminated_" + i, false);
}
player.SetVar("QuestionCount", 0);
player.SetVar("GuessResult", "");
}

window.Script42 = function()
{
  const player = GetPlayer();
for (let i = 1; i <= 30; i++) {
  player.SetVar("isEliminated_" + i, false);
}
player.SetVar("QuestionCount", 0);
player.SetVar("GuessResult", "");
}

};
