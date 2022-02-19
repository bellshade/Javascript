/*
    Vowel Sort, algoritma sorting yang bertujuan memisahkan antara huruf vocal dan huruf konsonan (vowel)
*/
function vowelSort(text) {
  // inisialisasi function
  let arr = [[], []]; // menyiapkan array kontainer, array cabang 0 berisi huruf vocal dan array cabang 1 berisi huruf konsonan
  let data = text.replace(/\s/g, "").toLowerCase().split(""); // hilangkan space dengan regex lalu ubah ke huruf kecil dan ubah menjadi array

  data.forEach((element) => {
    // looping array dari text dengan forEach
    if (
      element === "i" ||
      element === "a" ||
      element === "u" ||
      element === "e" ||
      element === "o"
    ) {
      // jika termasuk huruf vocal
      arr[0].push(element); // tambahkan ke array cabang 0
    } else {
      arr[1].push(element); // jika tidak tambahkan ke array cabang 1
    }
  });
  // return data
  return arr; // kembalikan array yang sudah kita isi
}
console.log(vowelSort("hello")); // output [ [ 'e', 'o' ], [ 'h', 'l', 'l' ] ]
