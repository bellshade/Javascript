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
     * Algoritma menghitung jumlah kata
     * 
     * 1. Membaca data string dengan mengakses variabel strings diikuti keyword .value
     * 2. Memecah string dengan separator karakter spasi (" ")
     * 3. Melakukan filtering untuk mencegah karakter spasi dihitung sebagai suatu kata
     * 4. Membaca ukuran string yang telah difilter dengan keyword .length 
     */
    totalOfWords.textContent = `Total of words : ${strings.value.split(" ").filter(string => string !== " ").length}`;

    /**
     * Algoritma menghitung jumlah karakter
     * 
     * 1. Membaca data string dengan mengakses variabel strings diikuti keyword .value dan .length
     */
    totalOfChars.textContent = `Total of characters : ${strings.value.length}`;
});