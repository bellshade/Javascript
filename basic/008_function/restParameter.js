// Apa sih itu rest parameter 
// Rest parameter adalah sebuah fungsi di javascript yang memungkinkan bisa value parameter

// Langsung ke codenya 

// kita akan membuat funcion yang bernama sum dengan nama parameternya name dan nilai  
function sum (name,...nilai ) {
    // ...data merupakan rest parameter yang akan menyimpan value banyak 
    let total = 0
    // kita mambuat variable yang bernama total
    // Lalu membuat perulangan for of 
    for(const value of nilai) {
        total += value
    }
    console.log(`total nilai ${name} adalah  ${total}`);
}

sum(`rai`,10,20,30,40,50)

// Output 
// total nilai rai adalah 150 

// rest parameter ini punya banyak variasi loh yang ini marupakan salah satu bentuk rest parameter
// silahkan belajar lebih jauh ya dan cari di internat 

