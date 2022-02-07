// Pure function
const salam = (nama) => {
  return "Halo " + nama;
};

console.log(salam("Bellshade")); // Halo Bellshade

// Function dengan side effect
let sapaan = "Halo";

const salamBaru = (nama) => {
  return `${sapaan} ${nama}`;
};

console.log(salamBaru("Bellshade")); // Halo Bellshade

sapaan = "Pagi";
console.log(salamBaru("Bellshade")); // Pagi Bellshade
