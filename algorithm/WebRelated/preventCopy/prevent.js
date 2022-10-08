/**
 * Fungsi berguna agar teks/tulisan di website kita tidak bisa di-copy/salin.
 * Fungsi ini akan mengembalikan alert javascript "Dilarang menyalin tulisan ini!" jika user melakukan copy pada tulisan di website kita.
 */

// Mengambil elemen-elemen yang tidak boleh di-copy.
const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");

// Membuat event listener jika user melakukan copy pada elemen yang kita inginkan agar tidak bisa di-copy.
heading.addEventListener("copy", function (e) {
    e.preventDefault(); // Mencegah agar tidak bisa di-copy
    alert("Dilarang menyalin tulisan ini!"); // Alert ditampilkan, teks bisa disesuaikan
});

paragraph.addEventListener("copy", function (e) {
    e.preventDefault(); // Mencegah agar tidak bisa di-copy
    alert("Dilarang menyalin tulisan ini!"); // Alert ditampilkan, teks bisa disesuaikan
});