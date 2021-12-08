// menyeleksi element HTML
let form = document.getElementById("form");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let log = document.getElementById("log");

// menambahkan Event Listener pada element HTML
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let list = document.createElement("li");
  let text = document.createTextNode(
    `form telah disubmit dengan nama = ${input.value}`
  );
  list.appendChild(text);
  log.appendChild(list);
});

btn.addEventListener("click", function () {
  let list = document.createElement("li");
  let text = document.createTextNode("button telah diklik");
  list.appendChild(text);
  log.appendChild(list);
});
