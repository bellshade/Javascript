const body = document.body;
const contoh = body.getElementsByClassName("contoh")[0];

const bub = contoh.getElementsByClassName("bub")[0];
const bu1 = bub.getElementsByClassName("bub1")[0];
const bu2 = bu1.getElementsByClassName("bub2")[0];
const bu3 = bu2.getElementsByClassName("bub3")[0];

bu1.addEventListener("click", function () {
  bu1.classList.toggle("abu");
});
bu2.addEventListener("click", function () {
  bu2.classList.toggle("hijau");
  bu2.stopPropagation();
});
bu3.addEventListener("click", function () {
  bu3.classList.toggle("kuning");
});

const anbu = document.getElementsByClassName("anbub1")[0];
const anbu2 = document.getElementsByClassName("anbub2")[0];
const anbu3 = document.getElementsByClassName("anbub3")[0];

anbu.addEventListener("click", function () {
  anbu.classList.toggle("abu");
});
anbu2.addEventListener("click", function () {
  anbu2.classList.toggle("hijau");
});
anbu3.addEventListener("click", (e) => {
  anbu3.classList.toggle("kuning");
  e.stopPropagation();
});
