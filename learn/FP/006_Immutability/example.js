// Non immutable
const mobil = {
  model: "Tesla",
  tahun: 2020
};

console.log(mobil); // { model: "Tesla", tahun: 2020 }

mobil.model = "Honda";
console.log(mobil); // { model: "Honda", tahun: 2020 }

// Immutable
const mobilImmutable = {
  model: "Tesla",
  tahun: 2020
};
const mobilBaru = { ...mobilImmutable, model: "Honda" };

console.log(mobilImmutable); // { model: "Tesla", tahun: 2020 }
console.log(mobilBaru); // { model: "Honda", tahun: 2020 }
