/**
 * Contoh implementasi klasifikasi menggunakan metode naive bayes
 * @constant {object} class_ klasifikasi jumlah play yang bernilai yes dan no
 * @function calc menghitung bobot klasifikasi yes dan no pada attribut tertentu
 * @param {string} key setiap attribut pada record
 * @param {string} value nilai attribut pada record
 * @function naiveBayes memproses klasifikasi
 * @param {object} data model testing
 */

const records = [
    { outlook: 'Sunny', temperature: 'Hot', humidity: 'High', windy: false, play: 'no' },
    { outlook: 'Sunny', temperature: 'Hot', humidity: 'High', windy: true, play: 'no' },
    { outlook: 'Cloudy', temperature: 'Hot', humidity: 'High', windy: false, play: 'yes' },
    { outlook: 'Rainy', temperature: 'Mild', humidity: 'High', windy: false, play: 'yes' },
    { outlook: 'Rainy', temperature: 'Cool', humidity: 'Normal', windy: false, play: 'yes' },
    { outlook: 'Rainy', temperature: 'Cool', humidity: 'Normal', windy: true, play: 'yes' },
    { outlook: 'Cloudy', temperature: 'Cool', humidity: 'Normal', windy: true, play: 'yes' },
    { outlook: 'Sunny', temperature: 'Mild', humidity: 'High', windy: false, play: 'no' },
    { outlook: 'Sunny', temperature: 'Cool', humidity: 'Normal', windy: false, play: 'yes' },
    { outlook: 'Rainy', temperature: 'Mild', humidity: 'Normal', windy: false, play: 'yes' },
    { outlook: 'Sunny', temperature: 'Mild', humidity: 'Normal', windy: true, play: 'yes' },
    { outlook: 'Cloudy', temperature: 'Mild', humidity: 'High', windy: true, play: 'yes' },
    { outlook: 'Cloudy', temperature: 'Hot', humidity: 'Normal', windy: false, play: 'yes' },
    { outlook: 'Rainy', temperature: 'Mild', humidity: 'High', windy: true, play: 'no' },
]

const class_ = { yes: 0, no: 0 }
records.forEach((item) => {
    item.play === 'yes' ? class_.yes++ : class_.no++;
})

const calc = (key, value) => {
    let filters = key ? records.filter((item) => {
        return value === item[key]
    }) : records
    let count_yes = 0;
    let count_no = 0;
    filters.forEach((item) => {
        item.play === 'yes' ? count_yes++ : count_no++
    })
    let val_yes = key ? count_yes / class_.yes : class_.yes / records.length;
    let val_no = key ? count_no / class_.no : class_.no / records.length;

    return { val_yes, val_no }
}

const naiveBayes = (data) => {
    let yes = [];
    let no = [];

    let result = calc('outlook', data.outlook);
    yes.push(result.val_yes);
    no.push(result.val_no);
    //filter outlook

    result = calc('temperature', data.temperature);
    yes.push(result.val_yes);
    no.push(result.val_no);
    //filter temperature

    result = calc('humidity', data.humidity);
    yes.push(result.val_yes);
    no.push(result.val_no);
    //filter humidity

    result = calc('windy', data.windy);
    yes.push(result.val_yes);
    no.push(result.val_no);
    //filter windy

    result = calc();
    yes.push(result.val_yes);
    no.push(result.val_no);
    //filter all

    let val_yes = 1;
    yes.forEach((i) => {
        val_yes *= i;
    })
    let val_no = 1;
    no.forEach((i) => {
        val_no *= i;
    })
    return val_yes > val_no ? 'yes' : 'no'
}
const x = { outlook: 'Rainy', temperature: 'Cool', humidity: 'High', windy: false };
console.log(naiveBayes(x));