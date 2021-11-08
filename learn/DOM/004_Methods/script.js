const app = document.getElementsByClassName("percobaan")[0];
console.log(app);
const app2 = document.getElementsByTagName("div")[1];
console.log(app2);
//Menggunakan .innerHTML
app.innerHTML = "<a>Menggunakkan innerHTML</a>";
app2.innerHTML = "<h1>Sudah di ganti</h1>";

//Menggunakan .style
app.style.backgroundColor = "blue";
app2.style.borderRadius = "10px";

//Menggunakan .setAttribute
const app3 = document.getElementsByTagName("div")[2];
console.log(app3);
const input = document.getElementsByTagName("input")[0];
console.log(input);
input.setAttribute("name", "input");
input.removeAttribute("class", "input");

//Menggunakan .classList
app3.classList.add("gradient");
app3.classList.remove("percobaan3");
app2.classList.replace("percobaan2", "gradient");
