## Strict Mode

_Strict mode_ digunakan untuk menghindari `bug` yang dapat tercipta jika dari versi lama Javascript. `Bug` tersebut antara lain adalah perilaku Javascript sebelum `ECMAScript versi 5` yang memungkinkan penggunaan variabel yang tidak dideklarasikan sebelumnya.

_Strict mode_ digunakan dengan menulis string *`"use strict"`* pada bagian paling atas file javascript atau dibagian paling atas dalam sebuah fungsi.

```javascript
y = 100;
console.log(y); // 100
// variabel y yang tidak dideklarasikan dapat digunakan tanpa strict mode
```

```javascript
"use strict"; // menggunakan strict mode
y = 100;
console.log(y); // ReferenceError: y is not defined
// console log menghasilkan ReferenceError karena variabel y belum dideklarasikan
```

Dengan menggunakan _strict mode_, jika tanpa sengaja salah dalam menulis nama variabel dapat langsung diketahui karena variabel yang tidak dideklarasikan akan memunculkan `ReferenceError`.
```javascript
let lamaBekerja = 5;  // variabel lamaBekerja dideklarasikan dengan nilai 5

lamaBerkerja = 6;       // kesalahan penulisan (typo) pada kata bekerja menjadi berkerja
                        // hal ini tidak terdeteksi sebagai error karena diperbolehkan tanpa strict mode

if (lamaBekerja <= 5) {
  console.log("junior developer");
} else {
  console.log("senior developer");
}
// console log akan menghasilkan "junior developer" karena nilai lamaBekerja masih tetap 5, saat ingin merubah nilai terjadi typo pada variabel dan tanpa sengaja membuat variabel baru
// kesalahan ini dapat menjadi bug yang error-nya tidak terdeteksi javascript
```

Jika menggunakan _strict mode_:
```javascript
"use strict";
let lamaBekerja = 5;  // variabel lamaBekerja dideklarasikan dengan nilai 5

lamaBerkerja = 6;       // ReferenceError: lamaBerkerja is not defined

if (lamaBekerja <= 5) {
  console.log("junior developer");
} else {
  console.log("senior developer");
}
// dengan adanya pemberitahuan error ini, kesalahan penulisan dapat langsung diperbaiki tanpa menyebabkan bug terlebih dahulu
```

Selain memunculkan `ReferenceError` pada variabel yang belum dideklarasikan, _strict mode_ juga melarang menggunakan kata yang di-_booking_ javascript untuk digunakan di kemudian hari. Hal ini bertujuan apabila javascript melakukan _update_ di masa depan tidak menciptakan masalah pada kode website yang telah ada.
```javascript
'use strict';
const private = 300;  // SyntaxError: Unexpected strict mode reserved word
// kata private merupakan reserved words sehingga tidak boleh digunakan dalam strict mode
```

Sangat disarankan untuk selalu menggunakan _strict mode_ dalam Javascript modern.