// Strings
// .split
let message = "Hello, OneCoders!";
let words = message.split(", ");
console.log(words);
// .includes
let sentence = "The quick brown fox jumps over the lazy dog";
let containsWord = sentence.includes("fox");
console.log(containsWord);
// .length
let sampleStr = "Welcome, John!";
let strLength = sampleStr.length;
console.log(strLength);

// MATH
// max
let maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);
// min
let minNumber = Math.min(10, 5, 20);
console.log(minNumber);
// random
let randomValue = Math.random();
console.log(randomValue);
// a random number between 0 (inclusive) and 1 (exclusive)
// floor
let floorNum = Math.floor(3.7);
console.log(floorNum);
// ceil
let ceilNum = Math.ceil(3.2);
console.log(ceilNum);
// round
let roundedVal = Math.round(3.2);
console.log(roundedVal);

// get random integer
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const randomInt = getRandomInt(1, 10);
  console.log(randomInt);

  // Other built-in methods
// toFixed()
const fixedNumber = (3.14157234924).toFixed(2);
console.log(fixedNumber);
// Date()
const currentDate = new Date("03-14-2020");
console.log(currentDate);