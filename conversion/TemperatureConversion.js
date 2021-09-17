// Konversi Suhu
// Jenis yang tersedia: celcius, reamur, fahrenheit, kelvin (parameter from dan to berlaku sebaliknya)
// Bahasa: Javascript

/**
 *
 * @param {String} from
 * @param {String} to
 * @param {Integer} degree
 * @returns
 */
const convertTemperature = (
  from = "celcius",
  to = "fahrenheit",
  degree = 0
) => {
  // Celcius ke Reamur
  if (from == "celcius" && to == "reamur") {
    const result = (4 / 5) * degree;
    return printResult(from, to, degree, result);
  }

  // Celcius ke Fahrenheit
  if (from == "celcius" && to == "fahrenheit") {
    const result = (9 / 5) * degree + 32;
    return printResult(from, to, degree, result);
  }

  // Celcius ke Kelvin
  if (from == "celcius" && to == "kelvin") {
    const result = degree + 273;
    return printResult(from, to, degree, result);
  }

  // Reamur ke Celcius
  if (from == "reamur" && to == "celcius") {
    const result = (5 / 4) * degree;
    return printResult(from, to, degree, result);
  }

  // Reamur ke Fahrenheit
  if (from == "reamur" && to == "fahrenheit") {
    const result = (9 / 4) * degree + 32;
    return printResult(from, to, degree, result);
  }

  // Reamure ke Kelvin
  if (from == "reamur" && to == "kelvin") {
    const result = (5 / 4) * degree + 273;
    return printResult(from, to, degree, result);
  }

  // Fahrenheit ke Celcius
  if (from == "fahrenheit" && to == "celcius") {
    const result = (5 / 9) * (degree - 32);
    return printResult(from, to, degree, result);
  }

  // Fahrenheit ke Celcius
  if (from == "fahrenheit" && to == "celcius") {
    const result = (4 / 9) * (degree - 32);
    return printResult(from, to, degree, result);
  }

  // Kelvin ke Celcius
  if (from == "kelvin" && to == "celcius") {
    const result = degree - 273;
    return printResult(from, to, degree, result);
  }

  // Kelvin ke Reamur
  if (from == "kelvin" && to == "reamur") {
    const result = (4 / 5) * (degree - 273);
    return printResult(from, to, degree, result);
  }

  return "Parameter Salah!\n";
};

// Menampilkan informasi konversi suhu
const printResult = (from, to, degree, result) => {
  return `=== Konversi Suhu ===\nDari: ${from}, ${degree}\nKe: ${to}, ${result}\n`;
};

/**
 * Contoh implementasi
 */

// Celcius ke Fahrenheit
console.log(convertTemperature("celcius", "fahrenheit", 32));

// Celcius ke Reamur
console.log(convertTemperature("celcius", "reamur", 27));

// Fahrenheit ke Celcius
console.log(convertTemperature("fahrenheit", "celcius", 60));

// Kelvin ke Fahrenheit
console.log(convertTemperature("kelvin", "fahrenheit", 100));

// Reamur ke Kelvin
console.log(convertTemperature("reamur", "kelvin", 18));
