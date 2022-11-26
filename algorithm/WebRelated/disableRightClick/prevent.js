/**
 * Fungsi ini berguna untuk mendisable/menonaktifkan klik kanan menggunakan mouse di website kita.
 * Fungsi ini akan mengembalikan alert javascript "Maaf, fungsi klik kanan dinonaktifkan di website ini" jika user mengklik kanan di website kita.
 */

// Membuat event listener jika user melakukan klik kanan di manapun di website kita.
document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Mencegah agar tidak bisa diklik kanan.
    alert("Maaf, fungsi klik kanan dinonaktifkan di website ini."); // Alert ditampilkan, teks bisa disesuaikan
});