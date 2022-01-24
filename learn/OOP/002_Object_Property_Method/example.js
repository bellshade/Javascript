class Person { // Membuat object dengan class
     constructor(name,age){ // Mendeklarasikan property name dan age
         this.name = name; // Menggunakan property name dan age
         this.age = age;
        
     }
       greet() {
         console.log(`hai nama saya ${this.name} saya berumur ${this.age} tahun`);
     }
 }

 const person1 = new Person("budi", 21); // Membuat object person1 dengan constructor

 console.log(person1.name); // output: budi

 person1.greet(); // output: hai nama saya budi saya berumur 21 tahun
