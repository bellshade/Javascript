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
      const userId = document.createElement("p");
      userId.textContent = `User ID: ${data.userId}`;

      const id = document.createElement("p");
      id.textContent = `ID: ${data.id}`;

      const title = document.createElement("p");
      title.textContent = `Title: ${data.title}`;

      const body = document.createElement("p");
      body.textContent = `Body: ${data.body}`;

      dataContainer.innerHTML = "";

      dataContainer.appendChild(userId);
      dataContainer.appendChild(id);
      dataContainer.appendChild(title);
      dataContainer.appendChild(body);
    })
    .catch((error) => {
      const errorParagraph = document.createElement("p");
      errorParagraph.textContent = `Terjadi kesalahan: ${error.message}`;

      while (dataContainer.firstChild) {
        dataContainer.removeChild(dataContainer.firstChild);
      }

      dataContainer.appendChild(errorParagraph);
    });
});
