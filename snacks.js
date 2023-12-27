//////////////////////////////////// Pig Latin ////////////////////////////////////

const string = "marcomarco";

// Nested Loops
function pigLatinLoop(string) {
  const vowels = "aeiou";
  let convertedString = "";
  for (char of string) {
    for (vowel of vowels) {
      if (vowel == char) {
        char = char + "f" + char;
      }
    }
    convertedString += char;
  }
  return convertedString;
}

console.log("v1 =", pigLatinLoop(string));

// RegEx
const pigLatinRegex = string.replace(/([aeiou])/gi, "$1f$1");

console.log("v2 =", pigLatinRegex);
debugger;
