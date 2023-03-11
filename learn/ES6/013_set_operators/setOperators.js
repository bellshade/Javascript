// Operator Himpunan

// Gabungan
const p = new Set([1, 2, 3]);
const q = new Set(["a", "b", "c", "d"]);
const union = new Set([...p, ...q]);

console.log(union); // {1,2,3,4,'a','b','c','d'}

// Irisan
const a = new Set(["p", "o", "t", "r", "e", "t"]);
const b = new Set(["t", "a", "p", "e"]);
const intersection = new Set([...a].filter((x) => b.has(x)));

console.log(intersection); // {'p','t','e'}

// Komplemen
const s = new Set(["i", "n", "d", "o", "n", "e", "s", "i", "a"]); // Himpunan Semesta
const e = new Set(["a", "i", "u", "e", "o"]);
const difference = new Set([...s].filter((x) => !e.has(x)));

console.log(difference); // {'n','d','s'}
