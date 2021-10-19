// Object.entries()

const person = {
  name: "John Doe",
  age: 24,
  gender: "male"
};

console.log(Object.entries(person)); // [ ["name", "John Doe"], ["age", 24], ["gender", "male"] ]

// Method ini biasanya digunakan untuk melakukan looping pada sebuah object

for (const [key, value] of Object.entries(person)) {
  console.log(`${key} = ${value}`);
  // name = John Doe
  // age = 24
  // gender = male
}
