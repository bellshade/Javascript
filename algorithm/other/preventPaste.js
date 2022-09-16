/**
 * Fungsi untuk melarang user mem-paste di inputan form website kita.
 * Fungsi ini akan mengembalikan alert javascript "Dilarang mem-paste!" jika user melakukan paste pada sebuah inputan form.
 * Jalankan fungsi dibawah ini menggunakan atribut onpaste="preventPaste(event)" di dalam tag <input>.
 * @example
 * // Elemen input di bawah ini tidak akan bisa dipaste oleh user.
 * <input type="text" onpaste="preventPaste(event)"/>
 * @param {object} - Berisi even yang sedang dijalankan
 */

function preventPaste(e) {
    e.preventDefault(); // Mencegah agar tidak bisa dipaste
    alert("Dilarang mem-paste!"); // Alert ditampilkan, teks bisa disesuaikan
}