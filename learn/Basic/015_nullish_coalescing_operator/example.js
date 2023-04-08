const nullValue = null;
const emptyText = "";
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? null;

console.log(valA); // "default for A"
console.log(valB); // ""
console.log(valC); // 42
