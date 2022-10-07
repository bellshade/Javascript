/**
 * Program untuk menghitung jumlah kata dan karakter string yang diinput
 * Program ini akan menampilkan jumlah kata dan karakter string secara realtime
 */

// Menyimpan elemen textarea
const strings = document.getElementById("strings");

// Menyimpan elemen penampil jumlah kata
const totalOfWords = document.getElementById("totalOfWords");

// Menyimpan elemen penampil jumlah karakter
const totalOfChars = document.getElementById("totalOfChars");

// Membuat event listener jika user menekan tombol-tombol keyboard
strings.addEventListener("keyup", function() {
    /**
     * Algoritma menghitung jumlah karakter
     *
     * 1. Membaca jumlah string dengan mengakses variabel strings diikuti keyword .value dan .length
     */
    let charsCount = strings.value.length;
    
    /**
     * Algoritma menghitung jumlah kata
     *
     * 1. Menghapus karakter whitespace di kedua sisi string (awal dan akhir)
     * 2. Memecah string dengan separator karakter whitespace (/\s+/), dan menyimpannya dalam array.
     * 3. Melakukan loop filtering diikuti dengan keyword .length untuk menghitung jumlah kata dalam array.
     */
    let word = strings.value.trim();
    let wordsCount = word.split(/\s+/).filter((word) => word).length;
    
    totalOfWords.textContent = `Total of words : ${wordsCount}`;
    totalOfChars.textContent = `Total of characters : ${charsCount}`;
});
