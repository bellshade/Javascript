/**
 * Melakukan perkalian `matrix1` dengan `matrix2`
 *
 * {@link https://id.wikipedia.org/wiki/Perkalian_matriks | Wikipedia}
 *
 * @param {number[][]} matrix1 - Array dua dimensi yang merepresentasikan matrix
 * @param {number[][]} matrix2 - Array dua dimensi yang merepresentasikan matrix
 * @returns {number[][]} Hasil perkalian dua `matrix1` dengan `matrix2`
 */
function multiply(matrix1, matrix2) {
  /**
   * Berdasarkan aturan perkalian matriks,
   * dua matriks hanya dapat dikalikan jika
   * jumlah kolom matriks pertama sama dengan jumlah baris matriks kedua.
   * Perkalian matriks tidak bersifat komutatif.
   * Oleh karena itu kita perlu mengetahui dimensi dari matrix1 dan matrix2 */
  const dimensi1 = {
    rows: matrix1.length,
    cols: matrix1[0].length
  };
  const dimensi2 = {
    rows: matrix2.length,
    cols: matrix2[0].length
  };

  /**
   * Agar dua matriks dapat dikalikan,
   * banyaknya kolom pada matriks pertama
   * harus sama dengan banyaknya baris pada matriks kedua.
   */
  if (dimensi1.cols !== dimensi2.rows) {
    return new Error(
      "Jumlah kolom matrix1 tidak sama dengan jumlah baris matrix2."
    );
  }

  /**
   * Menyiapkan array matrix baru
   * untuk menyimpan hasil perkalian matrix.
   *
   * Matriks hasil perkalian, akan memiliki
   * baris sebanyak baris matriks pertama,
   * dan kolom sebanyak kolom matriks kedua.
   *
   * @type {number[][]}
   */
  const matrixHasil = [];
  for (let i = 0; i < dimensi1.rows; i++) {
    matrixHasil[i] = [];
  }

  /**
   * Perkalian
   * {@link https://www.geeksforgeeks.org/c-program-multiply-two-matrices/ | Geeksforgeeks}
   */
  for (let i = 0; i < dimensi1.rows; i++) {
    for (let j = 0; j < dimensi2.cols; j++) {
      matrixHasil[i][j] = 0;
      for (let x = 0; x < dimensi1.cols; x++) {
        matrixHasil[i][j] += matrix1[i][x] * matrix2[x][j];
      }
    }
  }

  return matrixHasil;
}

// Example
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6]
];
const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(multiply(matrix1, matrix2)); //[[ 30, 36, 42 ], [ 66, 81, 96 ]]
console.log(
  multiply(
    [
      [1, 2, 3],
      [4, 5, 6]
    ],
    [
      [1, 2],
      [1, 2]
    ]
  )
); // error
