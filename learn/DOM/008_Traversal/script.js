//DOM:Traversal
//DOM:Traversal dengan Method parentNode
const pNode = document.getElementById("parentnode");
const toggle = pNode.querySelectorAll("span");
toggle.forEach(function (t1) {
  t1.addEventListener("click", function (e) {
    e.target.parentNode.classList.toggle("select");
    e.target.parentNode.classList.toggle("card");
    e.target.classList.toggle("btn");
  });
});

//DOM:Traversal dengan Method parentElement
const pElement = document.getElementById("parentelement");
const toggleDua = pElement.querySelectorAll("span");
toggleDua.forEach(function (td) {
  td.addEventListener("click", function (e) {
    e.target.parentElement.classList.toggle("select");
    e.target.parentElement.classList.toggle("card");
    e.target.classList.toggle("btn");
  });
});
//DOM:Traversal dengan Method nextSibling
const nSibling = document.getElementById("nextsibling");
const input = nSibling.getElementsByTagName("input")[0];
input.addEventListener("input", function (e) {
  e.target.nextSibling.nextSibling.style.backgroundColor = "" + e.target.value;
});
//DOM:Traversal dengan Method nextElementSibling
const nElSibling = document.getElementById("nextelementsibling");
const isian = nElSibling.getElementsByTagName("input")[0];

isian.addEventListener("input", function (e) {
  e.target.nextElementSibling.value = e.target.value;
});
//DOM:Traversal dengan Method previousSibling
const preSibling = document.getElementById("previoussibling");
const inputText = preSibling.getElementsByTagName("input")[1];
inputText.addEventListener("input", function (e) {
  e.target.previousSibling.previousSibling.value = e.target.value.length;
});
//DOM:Traversal dengan Method previousElementSibling
const preEleSibling = document.getElementById("previouselementsibling");
const rounded = preEleSibling.getElementsByTagName("input")[0];
rounded.addEventListener("input", function (e) {
  e.target.previousElementSibling.style.borderRadius = e.target.value + "%";
});
