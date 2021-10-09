let string = "abcdefg";

console.log(string.includes("ab")); // return nilai true
console.log(string.includes("xy")); // return nilai false

console.log(string.startsWith("a")); // return nilai true
console.log(string.startsWith("bc")); // return nilai false
console.log(string.startsWith("a", 1)); // return nilai false

console.log(string.endsWith("fg")); // return nilai true
console.log(string.endsWith("f")); // return nilai false
console.log(string.endsWith("fg", 3)); // return nilai false
