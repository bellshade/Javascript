# Operator

Operator dalam bahasa pemrograman berguna untuk memberi informasi kepada compiler atau intepreter untuk melakukan sebuah operasi matematika, kesamaan atau kelogisan yang akan menghasilkan sebuah keputusan.

Javascript sendiri memiliki banyak operator, mulai dari
operator **perbandingan**, **kelogisan**, dan **aritmatika**.

## Javascript comparison (perbandingan) operator

Banyak jenis operasi perbandingan. Macam-macamnya yaitu:

1. `==` (sama dengan)

Operator ini digunakan untuk mengecek apakah suatu nilai sama dengan nilai yang lain.

2. `===` (persis sama dengan)

Operator ini digunakan untuk mengecek apakah suatu nilai dan tipe datanya sama dengan nilai yang lain.

3. `!=` (tidak sama)

Operator ini digunakan untuk mengecek apakah suatu nilai tidak sama dengan nilai yang lain.

4. `!==` (persis tidak sama)

Operator ini digunakan untuk mengecek apakah suatu nilai dan tipe datanya tidak sama dengan nilai yang lain.

5. `>` (lebih besar dari)

Operator ini digunakan untuk membandingkan sebuah nilai apakah lebih besar daripada nilai yang lain.

6. `<` (kurang dari)

Operator ini digunakan untuk membandingkan sebuah
nilai apakah kurang daripada nilai yang lain.

7. `>=` (lebih besar sama dengan)

Operator ini digunakan untuk membandingkan sebuah nilai apakah lebih besar daripada atau sama dengan nilai yang lain.

8. `<=` (kurang dari sama dengan)

Operator ini digunakan untuk membandingkan sebuah nilai apakah kurang daripada atau sama dengan nilai yang lain.

## Javascript logical (logika) operator

Logika secara harfiahnya adalah hasil pertimbangan dari akal dan pikiran seseorang, disampaikan dan diutarakan dengan bahasa.

Penggunaan logika di seluruh bahasa pemrograman itu selalu ada. Dalam Javascript ada 3 operator dalam urusan kelogisan suatu yang dapat menghasilkan keputusan pasti yang hasilnya berupa true atau false, yaitu:

1.  `&&` (AND operator, dan)

Operator yang digunakan untuk mengecek apakah nilai satu dan yang lain apakah keduanya true. Jika salah satunya false maka akan mereturn nilai false.

2.  `||` (OR operator, atau)

Operator yang digunakan untuk mengecek apakah salah satu nilai dari dua nilai yang diuji hasilnya true. Jika dua nilai yang diuji hasilnya false maka yang direturn.

3.  `!` (NOT operator, bukan)

Operator yang digunakan untuk mengecek apakah nilai yang diuji bukanlah yang diinginkan maksudnya adalah apa benar pernyataan itu adalah kebalikannya.

## Nullish coalescing operator (??)

Nullish coalescing operator merupakan adalah logical operator yang mengembalikan right-hand value jika left-hand bernilai `null` atau `undefined`.

## Ternary operator

Ternary operator merupakan pengkondisian yang fungsinya sama seperti if else, namun penulisan syntaxnya lebih sederhana.

> condition ? ifTruthy : ifFalsy

## In Operator

In operator adalah operator yang berfungsi untuk mengecek sebuah property dari object serta bisa juga untuk mengecek sebuah index didalam array dan akan mengembalikan boolean.

## Optional Chaining Operator

Optional chaining operator merupakan cara yang aman untuk mengambil nilai dari object, karena tidak menimbulkan error apabila kita mengakses property yang tidak tersedia di object tersebut dan akan mengembalikan nilai undefined.

### Hint

Operator ini bisa digunakan sebagai conditional statement if atau else if.

Untuk contoh kode, cek contoh untuk [operator perbandingan](comparisonOperators.js), [operator logika](logicalOperator.js), [nullish coalescing operator](nullishCoalescingOperator.js), [ternary operator](ternaryOperator.js), [in operator](inOperator.js), [optional chaining operator](optionalChainingOperator.js).
