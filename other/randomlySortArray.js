/**
 * Re-implementasi dari algoritma yang dipakai pada Random.org, khususnya pada pengurutan item dari sebuah larik secara random.
 * https://www.random.org/lists/
 *
 * Namun, pada implementesi ini hanya berdasarkan angka random yang dihasilkan dari pseudo-random yang dimiliki oleh Math.random yang merupakan fungsi bawaan Javascript.
 *
 * @param { Array } arr Berisi larik kata/ nama atau apapun yang ingin diurutkan secara random.
 */

function randomlySort(arr) {
  const arrLength = arr.length;
  const finalArr = [];
  const result = [];

  // melakukan perulangan sejumlah item yang ada pada larik parameter di atas.
  for (let i = 0; i < arrLength; i++) {
    const idx = Math.floor(
      Math.random() * (arrLength - (arrLength - arr.length))
    ); // mendapatkan random index menggunakan Math.random dengan batasan yang sudah ditentukan, yakni berdasarkan panjang larik parameter di atas
    const currentArrItem = arr[idx]; // mengambil item dari larik parameter dengan menggunakan random index yang sudah didapatkan sebelumnya

    finalArr.push(currentArrItem); // Array.protoype.push() merupakan sebuah function untuk memasukkan item ke dalam larik tanpa harus memberi tahu di index berapa item tersebut harus masuk. Di sini berfungsi untuk memasukkan item dari variable currentArrItem di atas.
    arr.splice(idx, 1); // Array.prototype.splice() merupakan sebuah function untuk mengganti/ membuang/ menambah item ke dalam larik dengan memberikan index yang akan diganti/ dirubah/ dibuang. Di sini berfungsi agar item dari array yang sudah dimasukkan ke variabel finalArray tidak diambil lagi selama perulangan/ tidak terjadi duplikasi pada hasil.
  }

  // perulangan untuk menampilkan hasil akhir dengan bentuk object { 'key': 'value' }
  for (let i = 0; i < finalArr.length; i++) {
    const obj = {};
    obj[i + 1] = finalArr[i];

    result.push(obj);
  }

  return result;
}

console.log(randomlySort(["A", "B", "C", "D", "E", "F"])); // akan menghasilkan larik baru yang berisi urutan random dari larik di samping dengan bentuk object { 'key' : 'value' } untuk mempermudah membaca hasil.
