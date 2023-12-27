//////////////////////////////////// Snack 4 ////////////////////////////////////

const userInput = "aaabccccddyyyyyyeeff";

// Using forEach
function countRepeatingLetters(userInput) {
  let repeats = 1;
  let countedString = "";
  userInput.split("").forEach((char, i) => {
    const prevChar = userInput[i - 1];
    const nextChar = userInput[i + 1];
    if (char == prevChar) {
      repeats += 1;
      if (char != nextChar) {
        countedString += repeats;
      }
    } else {
      repeats = 1;
      countedString += char;
    }
  });
  return countedString;
}
console.log("v1:", countRepeatingLetters(userInput));

// Using Map, Filter
function mapRepeatingLetters(userInput) {
  let reps, char;
  return userInput
    .split("")
    .map((v, i, a) =>
      v != a[i - 1] ? ((reps = 1), (char = v)) : ((reps += 1), (char = reps))
    )
    .filter((v, i, a) => (!isNaN(v) && isNaN(a[i + 1])) || isNaN(v))
    .toString()
    .replaceAll(",", "");
}
console.log("v2:", mapRepeatingLetters(userInput));

// Using RegEx
function regExRepeatingLetters(userInput) {}

console.log("v3:", regExRepeatingLetters(userInput));

debugger;
