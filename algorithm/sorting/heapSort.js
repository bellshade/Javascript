/*
Heap Sort adalah algoritma pengurutan yang menggunakan struktur data heap (binary heap).
Algoritma ini bekerja dengan cara membangun max-heap dari array, kemudian secara berulang
mengambil elemen terbesar dari (root) dan memindahkannya ke akhir array, lalu memperbaiki heap.

Berikut gambaran cara kerja dari Heap Sort
=============================================
Inisialisasi [5, 3, 8, 4, 6] array acak

Langkah 1 - Build Max-Heap:
      8
     / \
    5   6
   / \
  3   4
Array setelah build max-heap: [8,5, 6, 3, 4]

Langkah 2 - Swap root dengan elemen terakhir:
      4              8
     / \            / \
    5   6   -->    5   6
   / \            / \
  3   4          3   4
Array: [4, 5, 6, 3, 8] (8 sudah di posisi akhir)

Langkah 3 - Heapify down pada root:
      6
     / \
    5   4
   / \
  3   4
Array: [6, 5, 4, 3, 8]

Langkah 4 - Ulangi process swap dan heapify:
Final       [3, 4, 5, 6, 8] Array selesai diurutkan
=============================================
*/

// Fungsi untuk melakukan heapify down pada subtree
function heapify(arr, n, i) {
  let largest = i; // Inisialisasi largest sebagai root
  const left = 2 * i + 1; // Index left child
  const right = 2 * i + 2; // Index right child

  // Jika left child lebih besar dari root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // Jika right child lebih besar dari largest saat ini
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // Jika largest bukan root
  if (largest !== i) {
    // Tukar arr[i] dengan arr[largest]
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Rekursif heapify subtree yang terpengaruh
    heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  const n = arr.length;

  // Langkah 1: Build max-heap
  // Mulai dari node non-leaf terakhir dan heapify ke atas
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Langkah 2: Ekstrak elemen satu persatu dari heap
  for (let i = n - 1; i > 0; i--) {
    // Tukar root (elemen terbesar) dengan elemen terakhir
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Heapify root pada heap yang berkurang ukurannya
    heapify(arr, i, 0);
  }

  return arr;
}

const arr = [5, 3, 8, 4, 6];
const sortedArr = heapSort(arr);
console.log(sortedArr); // Output: [ 3, 4, 5, 6, 8 ]
