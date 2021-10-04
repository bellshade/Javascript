const timeConversion = (time) => {
    let AMPM = time.slice(-2);
    let timeArr = time.slice(0, -2).split(":");
    if (AMPM === "AM" && timeArr[0] === "12") {
        timeArr[0] = "00";
    } 
    else if (AMPM === "PM") {
        timeArr[0] = (timeArr[0] % 12) + 12;
    }  
    return timeArr.join(":");
}

console.log(timeConversion('11:00:59PM'));