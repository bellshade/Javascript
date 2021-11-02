const body = document.getElementsByTagName("body")[0];
const app = document.getElementsByClassName("percobaan")[0];
const app2 = document.getElementsByTagName("div")[1];
//Menggunakan innerHTML
app.innerHTML = "<a>Menggunakkan innerHTML</a>";
app2.innerHTML = "<h1>Sudah di ganti</h1>";

//Menggunakan .style 
app.style.backgroundColor = 'blue';
app2.style.borderRadius = '10px';