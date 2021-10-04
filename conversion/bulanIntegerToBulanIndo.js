/**
 * merubah nilai bulan integer ke nama bulan dalam indonesia
 */

/**
 * 
 * @param {Integer} bulan 
 * @returns 
 */
function bulanIndo(bulan) {
    var int = parseInt(bulan);
    if (int === 1) {
        return "Januari";
    } else if (int === 2) {
        return "Februari";
    } else if (int === 3) {
        return "Maret";
    } else if (int === 4) {
        return "April";
    } else if (int === 5) {
        return "Mei";
    } else if (int === 6) {
        return "Juni";
    } else if (int === 7) {
        return "Juli";
    } else if (int === 8) {
        return "Agustus";
    } else if (int === 9) {
        return "September";
    } else if (int === 10) {
        return "Oktober";
    } else if (int === 11) {
        return "November";
    } else if (int === 12) {
        return "Desember";
    }
}

const bulanInteger = (new Date()).getMonth();


console.log(bulanInteger); // return integer

console.log(bulanIndo(bulanInteger)); // return bulan indonesia