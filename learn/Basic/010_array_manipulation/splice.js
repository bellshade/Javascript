const fruits = ["Apple", "Orange", "Grape", "Watermelon"];
fruits.splice(2, 1, "Dragonfruit");
console.log(fruits); // expected output: ['Apple', 'Orange', 'Dragonfruit', 'Watermelon']

const animals = ["Dinosaur", "Cat", "Dog"];
animals.splice(0, 1);
console.log(animals); // expected output: ['Cat', 'Dog']

const game = ["Mobile Legends", "Free Fire", "PUBG", "Dota 2"];
game.splice(1, 2, "League of Legends");
console.log(game); // expected output: ['Mobile Legends', 'League of Legends', 'Dota 2']
