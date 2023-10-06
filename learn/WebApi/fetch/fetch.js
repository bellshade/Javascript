// Ambil elemen-elemen HTML
const getDataButton = document.getElementById("getData");
const dataContainer = document.getElementById("dataContainer");

// Tambahkan event listener untuk tombol "Dapatkan Data"
getDataButton.addEventListener("click", () => {
  // Membuat permintaan GET ke URL tertentu
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      // Memeriksa status respons
      if (!response.ok) {
        throw new Error(
          "Permintaan gagal dengan kode status " + response.status
        );
      }
      // Mengambil respons JSON dari server
      return response.json();
    })
    .then((data) => {
      // Menampilkan data yang diterima dalam elemen HTML
      dataContainer.innerHTML = `<p>User ID: ${data.userId}</p>
                                        <p>ID: ${data.id}</p>
                                        <p>Title: ${data.title}</p>
                                        <p>Body: ${data.body}</p>`;
    })
    .catch((error) => {
      // Menangani kesalahan jika ada
      dataContainer.innerHTML = `<p>Terjadi kesalahan: ${error.message}</p>`;
    });
});
