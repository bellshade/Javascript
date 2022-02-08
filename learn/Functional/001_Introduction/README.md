# Functional Programming

Salah satu paradigma pemrograman yang bisa dilakukan pada Javascript adalah [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming).

Dalam FP (Functional Programming), kita melakukan semua proses dengan menggunakan [fungsi](../../Basic/008_function).

Pada dasarnya, sebuah fungsi akan menerima sebuah parameter (input) dan mengembalikan sebuah nilai (output).

```js
input -> output
```

[File contoh kode](example.js)

Contoh non functional

```js
const nama = "Bellshade";
const salam = "Halo ";

console.log(salam + nama); // "Halo Bellshade"
```

Pada kode diatas, kita tidak menggunakan fungsi sama sekali. Kita tidak memikirkan bagaimana cara mengubah dari sebuah masukan (input) menjadi sebuah keluaran (output).

Contoh functional

```js
function salam(nama) {
  return "Halo " + nama;
}

console.log(salam("Bellshade")); // "Halo Bellshade"
```

Pada kode diatas, ada sebuah fungsi `salam` yang menerima parameter `nama` kemudian akan mengembalikan nilai `"Halo " + nama`. Jika dibandingkan dengan kode yang sebelumnya, kita akan mendapatkan hasil yang sama, namun kode diatas adalah contoh bagaimana kita berfikir menggunakan Functional Programming.

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=First%20Class%20Object" />](../002_First_Class_Object/)
