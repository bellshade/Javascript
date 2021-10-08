// Perulangan
// membuat pola belah ketupat di dalam persegi dengan angka
// contoh :
/*
9 8 7 6 5 4 3 2 1 | 1 2 3 4 5 6 7 8 9
8 7 6 5 4 3 2 1   |   1 2 3 4 5 6 7 8
7 6 5 4 3 2 1     |     1 2 3 4 5 6 7
6 5 4 3 2 1       |       1 2 3 4 5 6
5 4 3 2 1         |         1 2 3 4 5
4 3 2 1           |           1 2 3 4
3 2 1             |             1 2 3
2 1               |               1 2
1                 |                 1
-------------------------------------
1                 |                 1
2 1               |               1 2
3 2 1             |             1 2 3
4 3 2 1           |           1 2 3 4
5 4 3 2 1         |         1 2 3 4 5
6 5 4 3 2 1       |       1 2 3 4 5 6
7 6 5 4 3 2 1     |     1 2 3 4 5 6 7
8 7 6 5 4 3 2 1   |   1 2 3 4 5 6 7 8
9 8 7 6 5 4 3 2 1 | 1 2 3 4 5 6 7 8 9
*/

/**
 * Membuat pola belah ketupat didalam sebuah persegi dengan angka
 * @param {number} num - jumlah angka maksimal pada sebuah pola
 * @num {array} - mengisi nilai tiap sisi dari persegi
 *
 * penjelasan sisi num {array}
 * 1 | 2
 * -----
 * 3 | 4
 */

function rhombusPattern(num) {
  let num1 = [];
  let num2 = [];
  let num3 = [];
  let num4 = [];

  // Looping untuk mengisi Array dengan maksimal nilai sesuai dengan input
  for (let i = 0; i < num; i++) {
    num1.unshift(i + 1); // fungsi unshift dilakukan untuk memasukkan nilai kedalam array pada bagian awal array tersebut dengan output yang diharapkan adalah [9,8,7,6,5,4,3,2,1]
    num2.push(i + 1); // fungsi push dilakukan untuk memasukkan nilai kedalam array pada bagian akhir array tersebut dengan output yang diharapkan adalah [1,2,3,4,5,6,7,8,9]
    num3.push(" "); // fungsi push ini dilakukan untuk memasukkan nilai kedalam array pada bagian akhir array tersebut dengan output yang diharapkan adalah [' ',' ',' ',' ',' ',' ',' ',' ',' ']
    num4.push(" ");
  }

  // Looping untuk membuat pattern pada sisi bagian 1 dan 2
  let lineCount; // variable untuk menyimpan panjang baris pertama, nanti nya digunakan untuk membuat garis pemisah.
  let spasi = 1;

  for (let i = 0; i < num; i++) {
    if (i === 0) {
      console.log((lineCount = num1.join(" ") + " | " + num2.join(" ")));
    } else {
      let str = " ";
      if (i > num - 10 && num >= 10) {
        str = new Array(num - 9).join(" ") + str; // Menambahkan whitespaces sesuai argument num dikurangi batasan 9
        console.log(num1.join(" ") + str + " | " + str + num2.join(" "));
      } else if (i <= num - 10) {
        str = new Array(spasi).join(" ") + str;
        spasi++;
        console.log(num1.join(" ") + str + " | " + str + num2.join(" "));
      } else {
        console.log(num1.join(" ") + " | " + num2.join(" "));
      }
    }
    num1.shift(); // fungsi shift() berfungsi untuk menghapus array pada bagian awal maka hasilnya 8 7 6 5 4 3 2 1 | 1 2 3 4 5 6 7 8 9
    num1.push(" "); // fungsi push disini untuk memberikan spasi pada akhir array num1 sehingga menjadikan pola agar tetap presisi 8 7 6 5 4 3 2 1   | 1 2 3 4 5 6 7 8 9
    num2.pop(); // fungsi pop untuk menghapus nilai pada akhir array num2 8 7 6 5 4 3 2 1   | 1 2 3 4 5 6 7 8
    num2.unshift(" "); // fungsi unshift() digunakan untuk memberikan spasi pada awal array num2 agar output tetap presisi 8 7 6 5 4 3 2 1   |   1 2 3 4 5 6 7 8

    // fungsi diatas akan terus di looping hingga nilainya menjadi 1                 |                  1
  }

  let line = "";
  line = new Array(lineCount.length + 1).join("-") + line;
  console.log(line); // menampilkan garis pemisah

  // Looping untuk membuat pattern pada sisi bagian 3 dan 4
  // num3 dan num4 akan berisi [' ',' ',' ',' ',' ',' ',' ',' ',' '] hal ini bertujuan agar pola tetap presisi dengan membeikan spasi pada setiap indeks array yang tidak berisi nilai
  let spasi2 = num - 10;
  for (let i = 1; i < num + 1; i++) {
    let str = " ";
    num3.pop(); // fungsi untuk menghapus nilai pada akhir array [' ',' ',' ',' ',' ',' ',' ',' ']
    num3.unshift(i); // fungsi untuk menambah nilai pada awal array [ 1 ,' ',' ',' ',' ',' ',' ',' ',' ']
    num4.shift(); // fungsi untuk menghapus nilai pada awal array [' ',' ',' ',' ',' ',' ',' ',' ']
    num4.push(i); // fungsi untuk menambah nilai pada akhir array [' ',' ',' ',' ',' ',' ',' ',' ', 1]
    if (i < 10 && num >= 10) {
      str = new Array(num - 9).join(" ") + str;
      console.log(num3.join(" ") + str + " | " + str + num4.join(" "));
    } else if (i > 9 && num >= 10 && i !== num) {
      str = new Array(spasi2).join(" ") + str;
      spasi2--;
      console.log(num3.join(" ") + str + " | " + str + num4.join(" "));
    } else {
      console.log(num3.join(" ") + " | " + num4.join(" "));
    }
  }
}

rhombusPattern(15);

// Note : jika ada saran atau optimasi algoritma ini agar menjadi lebih baik lagi bisa tolong dibuatkan solusinya dibawah agar ada opsi terbaik untuk menyelesaikan permasalahan ini.

// Note Bug : Algoritma ini belum presisi untuk input diatas 9.
/*
10 9 8 7 6 5 4 3 2 1 | 1 2 3 4 5 6 7 8 9 10
9 8 7 6 5 4 3 2 1   |   1 2 3 4 5 6 7 8 9
8 7 6 5 4 3 2 1     |     1 2 3 4 5 6 7 8
7 6 5 4 3 2 1       |       1 2 3 4 5 6 7
6 5 4 3 2 1         |         1 2 3 4 5 6
5 4 3 2 1           |           1 2 3 4 5
4 3 2 1             |             1 2 3 4
3 2 1               |               1 2 3
2 1                 |                 1 2
1                   |                   1
-----------------------------------------
1                   |                   1
2 1                 |                 1 2
3 2 1               |               1 2 3
4 3 2 1             |             1 2 3 4
5 4 3 2 1           |           1 2 3 4 5
6 5 4 3 2 1         |         1 2 3 4 5 6
7 6 5 4 3 2 1       |       1 2 3 4 5 6 7
8 7 6 5 4 3 2 1     |     1 2 3 4 5 6 7 8
9 8 7 6 5 4 3 2 1   |   1 2 3 4 5 6 7 8 9
10 9 8 7 6 5 4 3 2 1 | 1 2 3 4 5 6 7 8 9 10
*/
// jadi untuk siapa saja yang membaca dan mencoba kode ini bisa sama sama mencari solusi agar jika input lebih dari 9 tampilannya bisa lebih presisi.
// *** BUG FIXED ***
// Algoritma ini sudah mampu untuk menyelesaikan pattern hingga angka 100
