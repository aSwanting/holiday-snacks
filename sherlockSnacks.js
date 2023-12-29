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
    .join("");
}
console.log("v2:", mapRepeatingLetters(userInput));

// Using RegEx
function regExRepeatingLetters(str) {
  let newStr = "";
  for (char in str) {
    if (str[char] != str[char - 1]) {
      const re = new RegExp(str[char], "g");
      const match = str.match(re);
      newStr += str[char] + (match.length > 1 ? match.length : "");
    }
  }
  return newStr;
}

console.log("v3:", regExRepeatingLetters(userInput));

// kitchen sink
function kitchenSink(str) {
  return str
    .split("")
    .map((v, i, a) => {
      if (v != a[i - 1]) {
        if (v == a[i + 1]) v += str.match(RegExp(v, "g")).length;
        return v;
      }
    })
    .join("");
}

console.log("v4:", kitchenSink(userInput));

// Regex 2 Electric Boogaloo
const condensed = userInput
  .match(/(\w)\1+|(\w)/g)
  .map((v) => (v[1] ? v[0] + v.length : v[0]))
  .join("");

console.log("v5:", condensed);

// Final (chatGPT assist)
const r = userInput.replace(/(.)\1*/g, (v) => (v[1] ? v[0] + v.length : v[0]));
console.log("v6:", r);

debugger;
