// Object.assign()

const object1 = {
  firstName: "Brendan"
};

const object2 = {
  lastName: "Eich"
};

const object3 = {
  fullName: "Brendan Eich"
};

console.log(Object.assign(object1, object2, object3)); // { firstName: "Brendan", lastName: "Eich", fullName: "Brendan Eich" }
console.log(object1); // { firstName: "Brendan", lastName: "Eich", fullName: "Brendan Eich" }

/*
 * Jika terdapat key yang sama, maka key tersebut akan diisi dengan key dari source
 */

const object4 = {
  a: "1",
  b: "2"
};

const object5 = {
  b: "3",
  c: "4"
};

console.log(Object.assign(object4, object5)); // { a: "1", b: "3", c: "4" }
