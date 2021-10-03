/*
Bubble Sort adalah Sorting algorithm yang cara kerjanya adalah dengan membandingkan 2 elemen array
lalu menggeser kedua elemen tersebut sesuai dengan urutan terus-menerus sampai akhir array

Berikut gambaran cara kerja dari Bubble Sort
=============================================
Inisialisasi [5, 3, 8, 4, 6] Inisialisasi array acak
      Elemen  1  2  3  4  5

Langkah 1    [5, 3, 8, 4, 6] Membandingkan elemen ke 1 dengan elemen ke 2. Dikarenakan nilai dari
              ^  ^           elemen ke 1 lebih besar maka posisi kedua elemen tersebut ditukar

Langkah 2    [3, 5, 8, 4, 6] Membandingkan elemen ke 2 dengan elemen ke 3. Dikarenakan nilai dari
                 ^  ^        elemen ke 2 lebih kecil maka posisi kedua elemen tidak ditukar

Langkah 3    [3, 5, 8, 4, 6] Membandingkan elemen ke 3 dengan elemen ke 4. Dikarenakan nilai dari
                    ^  ^     elemen ke 3 lebih besar maka posisi kedua elemen tersebut ditukar

Langkah 4    [3, 5, 4, 8, 6] Membandingkan elemen ke 4 dengan elemen ke 5. Dikarenakan nilai dari
                       ^  ^  elemen ke 4 lebih besar maka posisi kedua elemen tersebut ditukar

Langkah 5    Mengulangi pengecekan dari awal sampai akhir array sampai tidak ada lagi yang dapat ditukar posisi

Final        [3, 4, 5, 6, 8] Array selesai diurutkan
=============================================
*/

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Membandingkan elemen j dengan elemen j + 1(1 elemen didepan j)
      if (arr[j] > arr[j + 1]) {
        // Jika j lebih besar maka tukar posisi dengan j + 1(1 elemen didepan j)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 6]));

/*
======= Versi output yang rapih untuk mempelajari cara kerja algoritmanya =======
async function bubbleSortDetailed(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log({
        loop: {
          i,
          j
        },
        arr,
        Compare: {
          array1: {
            index: j,
            value: arr[j]
          },
          array2: {
            index: j + 1,
            value: arr[j + 1]
          }
        },
        swap: arr[j] > arr[j + 1]
      });
      await delay(500);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, ms);
  });
};
console.log(bubbleSortDetailed([5, 3, 8, 4, 6]));
======= Versi output yang rapih untuk mempelajari cara kerja algoritmanya =======
*/
