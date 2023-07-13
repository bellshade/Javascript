/**
 * Pada situs ini kita akan generate hex color melalui slider
 */

//mengambil dom element nya
const ranges = document.querySelectorAll("input[type='range']");
const result = document.querySelector("#result");
//fungsi untuk mengubah digit menjadi hexadecimal
/**
 * 
 * @param {number} num 
 * @returns string
 */
function decToHex(num) {
    //seperti yang kita ketahui bahwa angka hexadecimal
    //memiliki 16 angka
    //yakni 0-15
    const maxNum = 15;
    //dan huruf A-F mewakili angka 10-15
    const result = ["F","E","D","C","B","A"];
    if (num > 9) {
        // jika angka lebih dari 9 maka akan di konversi menjadi huruf
        return result[maxNum - num];
        // saya ambil contoh: angka yang dikonversi adalah 15
        // maka maxNum - num = 15-15 = 0 = F
        // contoh lagi jika angka adalah 11
        // maka:
        // maxNum - num = 15 - 11 = 4 = B
    }
    // jika angka dibawah 10 maka tidak akan di konversikan
    return String(num);
};
// objek inisial
const rgb = {
    red: '00',
    green: '00',
    blue: '00',
};
// tambah event listener pada semua input range
ranges.forEach(el => el.addEventListener("input", rangeListener));
// event listener untuk semua input range
function rangeListener(e) {
    /*
    || Seperti yang kita ketahui bahwa hexadecimal itu terdiri dari 6 huruf
    || EX:
    || #FF0000
    || namun sebenarnya itu merupakan representasi dari rgb sendiri
    || jika di konversikan, maka string tersebut akan menjadi
    || RED = 255 atau FF
    || GREEN = 0 atau 00
    || BLUE = 0 atau 00
    || yang jika digabungkan akan menjadi rgb(255,0,0) atau FF0000
    || jika ingin mempelajari lebih dalam bisa cek youtube: https://youtu.be/c56x1aj2CPA 
    */

    /*
    || untuk lebih jelas mengapa dibagi 16 dan mengambil hasil bagi dari 16 bisa di cek:
    || https://www.permadi.com/tutorial/numDecToHex/
    */
    // variable untuk hasil dari pembagian angka desimal dengan 16
    const division = Math.floor(parseInt(e.target.value) / 16);
    // variable untuk hasil dari sisa pembagian angka desimal dengan 16
    const remainder = Math.floor(parseInt(e.target.value) % 16);
    // ket: e.target.classList.value akan mengembalikan string slider $warna
    // $warna berarti antara red,green dan blue sesuai dengan class slidernya
    rgb[e.target.classList.value.split(" ")[1]] = decToHex(division) + decToHex(remainder);
    // kita format sesuai dengan hexadecimal
    const hex = `#${rgb.red}${rgb.green}${rgb.blue}`;
    // ubah style background box menjadi value hex tersebut
    result.style.backgroundColor = hex;
    // tampilkan hasil hexadecimal tersebut dalam bentuk text
    document.querySelector(".text-result").innerText = hex;
}

// kita tambah sedikit fitur untuk mengcopy value hex tadi saat mengclick box
result.addEventListener("click", () => {
    navigator.clipboard.writeText(`#${rgb.red}${rgb.green}${rgb.blue}`);
    alert('Copied to clipboard')
})

result.style.backgroundColor = `#${rgb.red}${rgb.green}${rgb.blue}`;