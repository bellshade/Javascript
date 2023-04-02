const olderDate = new Date("2022-10-31");
const currentDate = new Date("2022-11-01");

// bandingkan waktunya
const diff = olderDate - currentDate;

// memformat dengan internationalization Intl
const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(formatter.format(Math.round(diff / 86400000), "day")); // yesterday
