const nodeList = document.querySelectorAll("p");
const test = document.getElementById("test");
const check = document.querySelectorAll("input[type=checkbox]");

// Mengambil elemen nodelist menggunakan index
test.innerHTML = `Saya berkata : ${nodeList[0].innerHTML} & ${nodeList[1].innerHTML}`;

// Mengambil elemen nodelist menggunakan for loop untuk memberi warna text elemen <p> menjadi berwarna biru
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.color = "blue";
}

// Mengambil elemen nodelist menggunakan for of untuk memanipulasi checkbox agar terceklis untuk pertama kali
for (checkbox of check) {
  checkbox.checked = true;
}

// Mengambil elemen nodelist menggunakan forEach untuk memberi background color untuk elemen <p> berwarna hitam
nodeList.forEach((node) => (node.style.backgroundColor = "black"));
