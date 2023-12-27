const string = "michele";

console.log(string);

console.log("for...in");
for (char in string) {
  console.log(" ", char);
}

console.log("for...of");
for (char of string) {
  console.log(" ", char);
}

console.log("for...in with index");
for (char in string) {
  console.log(" ", string[char]);
}
