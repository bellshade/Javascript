const nama = 'Bintang Nur Pradana'
const totalkata = nama.split('').length

if (totalkata > 8) {
	console.log('Nama Anda Valid!')
} else {
	console.log('Minimal Nama 8 Karakter/Invalid!')
}

/**
 * Penjelasan kode:
 * 
 * Total kata mensplit nama dan menjadikan array, lalu diteruskan dengan length / total
 * 
 * Pada kondisi pertama if berfungsi sebagai jika total kata lebih dari 8 karakter maka hasilnya valid/berhasil.
 * Namun pada kondisi kedua else, jika totalkata kurang dari 8 maka hasilnya invalid/gagal.
 */
