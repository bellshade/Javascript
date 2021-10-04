/**
 * membuat text string per kata yang paling depan menjadi besar
 */

const test = "jefri herdi triyanto";

/**
 * 
 * @param {String} string kata-kata yang ingin diganti hanya depannya saja yang besar
 * @returns 
 */
function capitalizeFirstLetter(string) {
    return string
        .split(" ")
        .map((a) => a[0].toUpperCase() + a.slice(1))
        .join(" ");
}

// test
console.log(capitalizeFirstLetter(test));

// result : Jefri Herdi Triyanto