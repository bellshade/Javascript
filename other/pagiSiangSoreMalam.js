/**
 * mendapatkan nilai waktu pagi / siang / sore / malam
 */

/**
 * 
 * @returns 
 */
function pagiSiangSoreMalam() {
    var jam = (new Date()).getHours();
    if (jam >= 4 && jam < 10) {
        return "pagi";
    } else if (jam >= 10 && jam < 14) {
        return "siang";
    } else if (jam >= 14 && jam < 18) {
        return "sore";
    } else {
        return "malam";
    }
}


// result
console.log(pagiSiangSoreMalam());