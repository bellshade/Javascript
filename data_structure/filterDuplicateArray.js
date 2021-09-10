let countries = [
  "Indonesia",
  "Malaysia",
  "Phillipine",
  "Indonesia",
  "Cambodia"
];

countries = countries.filter(
  (value, index, arr) => arr.indexOf(value) === index
);

console.log(countries); // ['Indonesia', 'Malaysia, 'Phillipine, 'Cambodia']
