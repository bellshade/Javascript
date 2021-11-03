const button = document.getElementById("button");
const input = document.getElementById("input");

// click event
// Ketika button di klik maka ubah warna background menjadi biru
button.addEventListener("click", function (event) {
  console.log(event); // cek apa saja yang terjadi ketika button diklik
  document.body.style.backgroundColor = "blue";
});

// input event
// mengatur batas input (max: 100, min: 1)
let MAX = 100;
let MIN = 1;
// Ketika user menginput angka yang lebih dari 100 atau kurang dari 1
// Maka ubah angka yang di input user menjadi 100 atau 1
input.addEventListener("input", function (event) {
  if (input.value > MAX) {
    input.value = MAX;
  } else if (input.value < MIN) {
    input.value = MIN;
  }
  console.log(event);
});
