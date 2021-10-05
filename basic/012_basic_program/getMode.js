// Menentukan modus / nilai yang paling sering muncul

/*
 * Algoritma:
 * case: terdapat sebuah array [5, 4, 5, 4, 5]
 * 1. Petakan setiap nilai yang ada menjadi sebuah objek dengan nilai sebagai key dan jumlah kemunculannya sebagai value
 *      -- cth: {4: 2, 5: 3}
 *      -- angka 4 muncul 2 kali, angka 5 muncul 3 kali
 * 2. Lakukan pengulangan pada objek tadi berdasarkan key lalu cek
 *      -- jika value dari key itu lebih dari variabel max maka isi / timpa variabel max dengan valuenya,
 *          lali isi / timpa array results menjadi array yang hanya memiliki 1 isi yang berisi key tadi
 *      -- jika value dari key itu sama dengan variabel max maka tambah array results (push) dengan keynya
 */

function getMode(arr) {
  const data = {};
  arr.forEach((num) => {
    if (!data[num]) {
      data[num] = 0;
    }
    data[num]++;
  });

  let max = 0;
  let results = [];
  for (let key in data) {
    if (data[key] > max) {
      max = data[key];
      results = [key];
    } else if (data[key] === max) {
      results.push(key);
    }
  }

  return { results, max };
}

console.log(getMode([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]));
console.log(getMode([4, 6, 4, 7, 9, 8, 6, 3, 4, 5, 6, 2, 4, 9, 3]));
console.log(getMode([5, 7, 3, 5, 1, 5, 7, 9, 8, 2, 7, 4, 4, 1, 9]));
