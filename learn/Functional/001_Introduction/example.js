// Cara non functional
const nama = "Bellshade";
const salam = "Halo ";

console.log(salam + nama); // "Halo Bellshade"

// Cara functional
function salamFunc(nama) {
  return "Halo " + nama;
}

console.log(salamFunc("Bellshade")); // "Halo Bellshade"
