// ==Object==
const hukumNewton = {
  pertama:
    "Jika resultan gaya yang bekerja pada benda yang sama dengan nol, maka benda yang mula-mula diam akan tetap diam. Benda yang mula-mula bergerak lurus beraturan akan tetap lurus beraturan dengan kecepatan tetap.",
  kedua:
    "Percepatan (perubahan dari kecepatan) dari suatu benda akan sebanding dengan resultan gaya (jumlah gaya) yang bekerja pada benda tersebut dan berbanding terbalik dengan massa benda.",
  ketiga:
    "Setiap aksi akan menimbulkan reaksi, jika suatu benda memberikan gaya pada benda yang lain maka benda yang terkena gaya akan memberikan gaya yang besarnya sama dengan gaya yang diterima dari benda pertama, tetapi arahnya berlawanan.",
  gayaBerat(massaBenda) {
    // pada javascript es6 dapat mendefinisikan method seperti ini, ini sama dengan gayaBerat: function(massaBenda){}
    return massaBenda * 9.8;
  }
};

console.log(hukumNewton.pertama);
// "Jika resultan gaya yang bekerja pada benda yang sama dengan nol, maka benda yang mula-mula diam akan tetap diam. Benda yang mula-mula bergerak lurus beraturan akan tetap lurus beraturan dengan kecepatan tetap."

console.log(hukumNewton.gayaBerat(50));
// melakukan perhitungan 50 dikali 9.8 hasilnya 490
