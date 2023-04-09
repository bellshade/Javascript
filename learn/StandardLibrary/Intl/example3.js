const futureDate = new Date("2022-11-02");
const currentDate = new Date("2022-11-01");

/* 
    bandingkan waktunya.
    variabel diff ini jika dibagi 86400000,
    maka akan menghasilkan bilangan positif
*/
const diff = futureDate - currentDate;

// memformat dengan internationalization Intl
const formatter = new Intl.RelativeTimeFormat("en", {
  numeric: "auto",
  style: "long",
  localeMatcher: "best fit"
});

/* 
  variabel ONE_DAY_IN_MILLISECONDS dipakai sebagai acuan waktu yaitu, hari.
  karena variabel diff diatas merupakan nilai dalam milidetik,
  maka pembandingnya juga harus sama yaitu milidetik
*/
const ONE_DAY_IN_MILLISECONDS = 86400 * 1000;

console.log(
  formatter.format(Math.round(diff / ONE_DAY_IN_MILLISECONDS), "day")
);
