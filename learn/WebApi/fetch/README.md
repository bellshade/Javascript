# Fetch API

Fetch API adalah antarmuka JavaScript yang memungkinkan web klien untuk mengirim dan menerima permintaan HTTP secara asinkron. Fetch API memungkinkan untuk berkomunikasi dengan server dalam mengambil, mengirim, dan memproses data pada aplikasi web dengan metode HTTP seperti GET, POST, PUT, dan DELETE serta menangani kesalahan dengan baik.

## Contoh Penggunaan Fetch

### GET

```javascript
// Membuat permintaan GET ke URL tertentu
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    // Mengambil response JSON dari server
    return response.json();
  })
  .then((data) => {
    // Menggunakan data yang diterima dari server
    console.log(data);
  })
  .catch((error) => {
    // Menangani kesalahan jika ada
    console.error("Terjadi kesalahan:", error);
  });
```

#### Keterangan:

Dalam contoh di atas, kita menggunakan `fetch()` untuk mengirim permintaan GET ke URL `https://jsonplaceholder.typicode.com/posts/1`. Kemudian, kita mengolah respons dari server dengan `response.json()` untuk mengambil data JSON yang diterima.

### POST

```javascript
// Data yang akan dikirim ke server
const data = {
  userId: 1,
  id: 101,
  title: "Menggunakan Fetch untuk POST",
  body: "Ini adalah contoh penggunaan Fetch API untuk mengirim data ke server."
};

// Membuat permintaan POST ke URL tertentu
fetch("https://jsonplaceholder.typicode.com/posts", {
  // Mengatur method menjadi POST
  method: "POST",
  // Menyertakan body dalam bentuk JSON
  headers: {
    "Content-Type": "application/json"
  },
  // Mengubah data menjadi JSON
  body: JSON.stringify(data)
})
  .then((response) => {
    // Mengambil respons JSON dari server
    return response.json();
  })
  .then((data) => {
    // Menggunakan data yang diterima dari server
    console.log(data);
  })
  .catch((error) => {
    // Menangani kesalahan jika ada
    console.error("Terjadi kesalahan:", error);
  });
```

#### Keterangan

Dalam contoh di atas, kita menggunakan `fetch()` untuk mengirim permintaan POST ke URL tertentu dengan mengatur `method` menjadi `'POST'` dan menyertakan `headers` dengan tipe konten `'application/json'`. Data dikirim dalam bentuk JSON dengan `JSON.stringify()`.

## Error Handling

```javascript
// Membuat permintaan GET ke URL yang tidak ada
fetch("https://jsonplaceholder.typicode.com/nonexistent")
  .then((response) => {
    // Kondisi jika respons tidak berhasil
    if (!response.ok) {
      // Memicu kesalahan
      throw new Error("Permintaan gagal dengan kode status " + response.status);
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  // Menangani kesalahan jika ada
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
```

#### Keterangan:

Dalam contoh di atas, kita memeriksa status respons dengan `response.ok`. Jika status respons tidak berhasil (`false`), kita memicu kesalahan dengan `throw` dan menangani kesalahan dengan `catch()`.
