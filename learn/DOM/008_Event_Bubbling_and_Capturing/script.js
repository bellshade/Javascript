const body = document.body;
const contoh = body.getElementsByClassName("contoh")[0];

const bub = contoh.getElementsByClassName("bub")[0];
const bu1 = bub.getElementsByClassName("bub1")[0];
const bu2 = bu1.getElementsByClassName("bub2")[0];
const bu3 = bu2.getElementsByClassName("bub3")[0];
//Event Bubbling berlaku
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
//Event Bubbling tidak berlaku karean di berikan e.stopPropagation()
const anbu = document.getElementsByClassName("anbub1")[0];
const anbu2 = document.getElementsByClassName("anbub2")[0];
const anbu3 = document.getElementsByClassName("anbub3")[0];

anbu.addEventListener("click", function (e) {
  e.target.classList.toggle("abu");
});
anbu2.addEventListener("click", function (e) {
  e.target.classList.toggle("hijau");
  e.stopPropagation();
});
anbu3.addEventListener("click", (e) => {
  e.target.classList.toggle("kuning");
  e.stopPropagation();
});
// Event Capturing
const cap = document.getElementsByClassName("cap1")[0];
const cap2 = document.getElementsByClassName("cap2")[0];
const cap3 = document.getElementsByClassName("cap3")[0];

cap.addEventListener("click", function () {
  cap.classList.toggle("abu")
}, capture = true );
cap2.addEventListener("click", () => {
  cap2.classList.toggle("hijau");
});
cap3.addEventListener("click", function () {
  cap3.classList.toggle("kuning");
});

