const timeConversion = (time) => {
  let AMPM = time.slice(-2);
  let timeArr = time.slice(0, -2).split(":");
  if (AMPM === "AM" && timeArr[0] === "12") {
    timeArr[0] = "00";
  } else if (AMPM === "PM") {
    timeArr[0] = (timeArr[0] % 12) + 12;
  }
  return timeArr.join(":");
};
console.log(timeConversion("11:00:59PM"));

/* Penjelasan ada di bawah ini

const timeConversion = (time) => {
    let AMPM = time.slice(-2);
    //Mengambil keterangan waktu apakah AM/PM
    let timeArr = time.slice(0, -2).split(":");
    //Memecah string menjadi sebuah array, tanpa keterangan AM/PM dan ':'
    if (AMPM === "AM" && timeArr[0] === "12") {
        timeArr[0] = "00";
    } 
    else if (AMPM === "PM") {
        timeArr[0] = (timeArr[0] % 12) + 12;
    }  
    return timeArr.join(":");
    //Mengkonversi array menjadi string dan sudah berupa format time 24jam
};

console.log(timeConversion("11:00:59PM")); 
//Output menghasilkan 23:00:59

*/
