const body = document.body;
const contoh = body.getElementsByClassName("contoh")[0];

const bub = contoh.getElementsByClassName("bub")[0];
const bu1 = bub.getElementsByClassName("bub1")[0];
const bu2 = bu1.getElementsByClassName("bub2")[0];
const bu3 = bu2.getElementsByClassName("bub3")[0];
//Event Bubbling berlaku
bu1.addEventListener("click", function () {
  bu1.classList.toggle("abu");
  console.log("bu1");
});
bu2.addEventListener("click", function () {
  console.log("bu2");
  bu2.classList.toggle("hijau");
});
bu3.addEventListener("click", function () {
  console.log("bu3");
  bu3.classList.toggle("kuning");
});
//Event Bubbling tidak berlaku karean di berikan e.stopPropagation()
const anbu = document.getElementsByClassName("anbub1")[0];
const anbu2 = document.getElementsByClassName("anbub2")[0];
const anbu3 = document.getElementsByClassName("anbub3")[0];

anbu.addEventListener("click", function (e) {
  console.log("anbu");
  e.target.classList.toggle("abu");
});
anbu2.addEventListener("click", function (e) {
  console.log("anbu2");
  e.target.classList.toggle("hijau");
  e.stopPropagation();
});
anbu3.addEventListener("click", (e) => {
  console.log("anbu3");
  e.target.classList.toggle("kuning");
  e.stopPropagation();
});
// Event Capturing
const cap = document.getElementsByClassName("cap1")[0];
const cap2 = document.getElementsByClassName("cap2")[0];
const cap3 = document.getElementsByClassName("cap3")[0];

cap.addEventListener(
  "click",
  function () {
    console.log("cap");
  },
  true
);

cap2.addEventListener(
  "click",
  () => {
    console.log("cap2");
  },
  true
);

cap3.addEventListener(
  "click",
  function () {
    console.log("cap3");
  },
  true
);
