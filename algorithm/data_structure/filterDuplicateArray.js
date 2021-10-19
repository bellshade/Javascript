let countries = [
  "Indonesia",
  "Malaysia",
  "Phillipine",
  "Indonesia",
  "Cambodia"
];

const filteredCountry = [...new Set(countries)];

console.log(filteredCountry); // ['Indonesia', 'Malaysia, 'Phillipine, 'Cambodia']
