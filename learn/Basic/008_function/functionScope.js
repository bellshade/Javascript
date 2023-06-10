// == Contoh == //

// 1. Mendefisikan variabel didalam fungsi
function memancing() {
  let ikan = "Lele";
  console.log(ikan);
}

// Menampilkan variabel ikan yang didefinisikan didalam fungsi memancing()
// eslint-disable-next-line no-undef, no-use-before-define
console.log(ikan); // Error: ikan tidak terdefinisikan
memancing(); // Lele

// 2. Mendefisikan variabel diluar fungsi
let ikan = "Gurame";

function kolamIkan() {
  console.log(ikan);
}

// Menampilkan variabel ikan yang didefinisikan diluar fungsi kolamIkan()
console.log(ikan); // Gurame
kolamIkan(); // Gurame

// 3. Deklarasi variabel didalam dan diluar fungsi
let noktunal = "Kelelawar";
let diurnal = "Gajah";

function hewan() {
  let nokturnal = "Burung Hantu";
  console.log(nokturnal);
  console.log(diurnal);
}

// Menampilkan variabel mamalia yang didefinisikan didalam dan diluar fungsi
console.log(diurnal); // Gajah
console.log(noktunal); // Kelelawar
hewan(); // Burung Hantu & // Gajah
