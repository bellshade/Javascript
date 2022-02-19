/*
Insertion Sort adalah algoritma pengurutan yang dilakukan dengan mengecek data satu per satu dimulai dari yang kedua sampai dengan yang terakhir.
Contoh dalam kehidupan yaitu pengurutan kartu, anda pasti akan melakukan pengurutan dari kiri ke kanan,
jika ada yang lebih kecil maka anda akan mengubah posisi kartu tersebut ke tempat yang sesuai
*/
const insertionSort = (arr) => {
  //temp disini berfungsi untuk menampung nilai sementara
  let temp;
  //Perulangan dibawah ini berfungsi untuk membandingkan data yang dikiri dengan yang dikanan
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //Jika data yang dikanan ada yang lebih besar dari pada data yang dikiri maka akan ditukarkan posisinya
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(insertionSort([12, 11, 13, 5, 6])); //output [ 5, 6, 11, 12, 13 ]

/*
Cara kerja:
[11, 12, 13, 5, 6 ]     i=0 , j=1
[11, 12, 13, 5, 6 ]     i=0 , j=2
[5, 12, 13, 11, 6 ]     i=0 , j=3
[5, 12, 13, 11, 6 ]     i=0 , j=4

[5, 12, 13, 11, 6 ]     i=1 , j=2
[5, 11, 13, 12, 6 ]     i=1 , j=3
[5, 6, 13, 12, 11 ]     i=1 , j=4

[5, 6, 12, 13, 11 ]     i=2 , j=3
[5, 6, 11, 13, 12 ]     i=2 , j=4

[5, 6, 11, 12, 13 ]     i=3 , j=4
*/
