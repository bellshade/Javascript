/**
 * Fungsi untuk melarang user mem-paste di inputan form website kita.
 * Fungsi ini akan mengembalikan alert javascript "Dilarang mem-paste!" jika user melakukan paste pada sebuah inputan form.
 */

// Mengambil elemen input yang akan dilarang mem-paste.
const input = document.querySelector("input");

// Membuat event listener jika user melakukan paste pada inputan form.
input.addEventListener("paste", function (e) {
    e.preventDefault(); // Mencegah agar tidak bisa dipaste
    alert("Dilarang mem-paste!"); // Alert ditampilkan, teks bisa disesuaikan
});