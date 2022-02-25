# _First-Class Object_

> **Informasi**: Untuk kedepannya, penulisan function dalam materi ini akan menggunakan [arrow function](../../ES6/003_arrow_function) dikarenakan pada FP, tidak memerlukan _keyword_ `this` sesuai konsep [Pure Function](../003_Pure_Function).

[File contoh kode](example.js)

Dalam javascript, [function](../../Basic/008_function) adalah _first-class object_ atau "_first-class citizen_". Artinya function di javascript sama seperti [object](../../Basic/011_object) , dimana kita dapat melakukan seperti:

- Disimpan di [variable](../../Basic/002_variable_datatype), object, atau [array](../../Basic/009_array)

```js
// Disimpan di variable
const constFunc = () => {
  // do something
};

// Disimpan di dalam object
const obj = {
  func: () => {}
};

// Disimpan di dalam array
const arr = [() => {}];
```

- Dikirim sebagai argument ke sebuah function

```js
// Dikirim sebagai argument ke sebuah function
const cmToM = length => length / 100;
const mToCm = length => length * 100;
const convert = (fn, length) => fn(length);

const nilaiAwal = 100;

console.log(convert(cmToM, nilaiAwal)); // 1
console.log(convert(mToCm, nilaiAwal)); // 10000
```

- Function sebagai nilai kembalian dari sebuah function

```js
const helloFunc = () => {
  return () => {
    return "Hello!";
  };
};

const hello = helloFunc();
console.log(hello()); // Hello!
```

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Introduction" />](../001_Introduction)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Pure%20Function" />](../003_Pure_Function)
