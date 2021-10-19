// ROT13, adalah algoritme enkripsi sederhana yang menggunakan sandi abjad-tunggal dengan pergeseran k=13.
// Enkripsi ini merupakan penggunaan dari sandi Caesar dengan geseran 13.
// ROT13 biasanya digunakan di forum internet, agar spoiler, jawaban teka-teki, kata-kata kotor, dan
// semacamnya tidak terbaca dengan sekilas.

// normal function
function rot13(str) {
  return str.replace(/[a-zA-Z]/g, function (chr) {
    var start = chr <= "Z" ? 65 : 97;
    return String.fromCharCode(start + ((chr.charCodeAt(0) - start + 13) % 26));
  });
}

// onliner
// versi singkat dari normal function
// namun penggunaannya kurang disarankan karena code nya menjadi sulit dipahami
// karena code yang baik tidak hanya code yang tercepat, terpendek, tapi juga code yang mudah dipahami agar gampang di maintenance
// const rot13 = str => str.replace(/[a-zA-Z]/g,chr=>String.fromCharCode((chr <= "Z"? 65 : 97)+(chr.charCodeAt(0)-(chr <= "Z" ? 65 : 97)+13)%26));

console.log(rot13("hello world")); //uryyb jbeyq
console.log(rot13("uryyb jbeyq")); //hello world
