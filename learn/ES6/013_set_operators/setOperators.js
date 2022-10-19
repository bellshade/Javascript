//Operator Himpunan

//Gabungan
let p = new Set([1,2,3]);
let q = new Set(['a','b','c','d']);
let union = new Set([...p, ...q]);
    
console.log(union) // {1,2,3,4,'a','b','c','d'}

//Irisan
let a = new Set(['p','o','t','r','e','t']);
let b = new Set(['t','a','p','e']);
let intersection = new Set(
    [...a].filter(x => b.has(x)));

console.log(intersection) // {'p','t','e'}

//Komplemen
let s = new Set(['i','n','d','o','n','e','s','i','a']); //Himpunan Semesta
let e = new Set(['a','i','u','e','o']);
let difference = new Set(
    [...s].filter(x => !e.has(x)));

console.log(difference) // {'n','d','s'}

