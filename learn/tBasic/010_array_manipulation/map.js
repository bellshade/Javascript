function getMonthName(month) {
  const name = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agt",
    "Sep",
    "Okt",
    "Nov",
    "Des"
  ];
  const result = month.map(function (m) {
    return name[m - 1];
  });
  return result;
}

const month = [2, 6, 7, 9];
console.log(getMonthName(month));
