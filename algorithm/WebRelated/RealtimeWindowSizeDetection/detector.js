/**
 * Fungsi untuk mendeteksi ukuran width dan height layar window browser secara realtime
 * Fungsi ini akan mengembalikan dan menampilkan ukuran width dan height layar window browser dalam bentuk number
 */

// Menyimpan ukuran width window browser saat pertama kali website dirender
let width = window.innerWidth;

// Menyimpan ukuran height window browser saat pertama kali website dirender
let height = window.innerHeight;

// Menampilkan ukuran window browser saat pertama kali website dirender
document.getElementById("windowSize").textContent = `${width} * ${height}`;

// Membuat event listener jika user melakukan resizing pada window browser.
window.addEventListener("resize", function(){
    let width = window.innerWidth; // Update ukuran width window browser secara berkelanjutan
    let height = window.innerHeight; // Update ukuran height window browser secara berkelanjutan
    document.getElementById("windowSize").textContent = `${width} * ${height}`; // Menampilkan ukuran window browser secara berkelanjutan
});
