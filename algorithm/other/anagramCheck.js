//Anagram adalah sebuah kata yang dapat membentuk kata lain ataupun kalimat dengan huruf yang sama
const anagramCheck = (kata1, kata2) => {
  let found = 0;

  //kata1 dan kata2 di LowerCase supaya tidak terjadi error karena Huruf Kapital
  //Kemudian sort() berfungsi sebagai mengurutkan kata2 tersebut
  kata1 = kata1.toLowerCase().split("").sort();
  kata2 = kata2.toLowerCase().split("").sort();

  //Pengecekan apakah kata1 dan kata2 memiliki panjang yang sama atau tidak
  if (kata1.length === kata2.length) {
    //Perulangan ini berfungsi untuk pengecekan setiap huruf apakah sama atau tidak
    for (let i = 0; i < kata1.length; i++) {
      //Jika terjadi kesamaan maka akan nilai found akan bertambah 1
      if (kata1[i] === kata2[i]) {
        found += 1;
      }
    }
    //Jika semua kata memiliki kesamaan maka found akan memiliki nilai yang sama dengan panjang kata tersebut
    if (found === kata1.length) {
      return "Anagram";
    } else {
      return "Bukan Anagram";
    }
  } else {
    return "Bukan Anagram";
  }
};
console.log(anagramCheck("signet", "ignest")); //output "Anagram"
console.log(anagramCheck("smart", "clever")); //output "Bukan Anagram"
