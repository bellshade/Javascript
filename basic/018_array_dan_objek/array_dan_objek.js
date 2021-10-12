//Arrays dan Objek

//start
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

/*
      Coklat
      42.5
      22
      true
      Programming
      undefined
      Panjang nilai myArray adalah 5.
    */

//end

//start
let user = {
  name: {
    first: "Harry",
    last: "Potter"
  },
  age: 20,
  isMuggle: false,
  stuff: ["Magic Wind", "Flying Car", "Owl"]
};

console.log("Hallo, nama saya " + user.name.first + " " + user.name.last);
console.log("Umur saya " + user.age + " tahun");

/*
      Hallo, nama saya Harry Potter
      Umur saya 20 tahun
    */
//end
