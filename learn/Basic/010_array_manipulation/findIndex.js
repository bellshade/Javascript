const animals = ["cat", "dog", "wolf"];

//findIndex akan mengembalikan indeks elemen pertama yang memenuhi kondisi yang di buat

console.log(animals.findIndex((animal) => animal === "cat")); // 0 --> mencari indeks cat dalam array animals
console.log(animals.findIndex((animal) => animal === "dog")); // 1 --> mencari indeks dog dalam array animals
