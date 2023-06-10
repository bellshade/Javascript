/**
 * Pohon faktor/Factor Tree adalah sebuah istilah dalam matematika
 * yang menyebukan biangan bilangan prima yang terdapat pada suatu bilangan
 * eg: factorTree(18) // 2,3,3
 *
 *  @param number = bilangan yang akan dicari faktorialnya
 */
function factorTree(number) {
  let array = [];
  let s = 6;

  while (number > 1 && number % 2 === 0) {
    number /= 2;
    array.push(2);
  }

  while (number > 2 && number % 3 === 0) {
    number /= 3;
    array.push(3);
  }

  while (number > 4) {
    let p = s - 1;
    let q = s + 1;
    while (number > 4 && number % p === 0) {
      number /= p;
      array.push(p);
    }

    while (number > 4 && number % q === 0) {
      number /= q;
      array.push(q);
    }
    s += 6;
  }

  return array;
}

console.log(factorTree(15)); // 3,5
console.log(factorTree(18)); // 2,3,3
