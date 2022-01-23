class Person { // membuat object dengan class
     constructor(name,age){ // menambahkan property name dan age
         this.name = name; // menggunakan property name dan age
         this.age = age;
         this.greet = () => {
             console.log(`hai nama saya ${name} saya berumur ${age} tahun`);
         };
     }
 }

 const person1 = new Person("budi", 21); // membuat object person1 dengan constuctor

 console.log(person1.name); // output: budi

 person1.greet(); // output: hai nama saya budi saya berumur 21 tahun
