const button = document.getElementById("button");

// Ketika button di klik maka ubah warna background menjadi biru
button.addEventListener("click", function(event){
    console.log(event); // cek apa saja yang terjadi ketika button diklik
    document.body.style.backgroundColor = "blue";
});