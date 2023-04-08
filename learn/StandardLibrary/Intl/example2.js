const olderDate = new Date("2022-10-31");
const currentDate = new Date("2022-11-01");

// bandingkan waktunya
const diff = olderDate - currentDate;

// memformat dengan internationalization Intl
const formatter = new Intl.RelativeTimeFormat("en", { numeric: "always" });

const ONE_DAY_IN_MILLISECONDS = 86400 * 1000;

console.log(
  formatter.format(Math.round(diff / ONE_DAY_IN_MILLISECONDS), "day")
); // 1 day ago
