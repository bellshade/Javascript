## Notasi Himpunan

Himpunan biasanya dinyatakan dengan huruf $A, B, C, K, X, ...$ dan sebagainya. Sedang anggota suatu himpunan dinyatakan dengan huruf kecil $a, b,c, k, x,...$ dan sebagainya.

Ada 3 cara untuk mendefinisikan suatu himpunan, yaitu:

- Dengan mendaftar anggota-anggota di antara kurung kurawal buka dan tutup

  Contoh: $P = \{a,i,u,e,o\}$

- Dengan menyatakan sifat-sifat yang dipenuhi oleh anggota-anggotanya

  Contoh: $Q =$ himpunan vokal dalam abjad latin

- Dengan menggunakan notasi pembentuk himpunan

  Contoh: $R= \{x\,\mid\, x \text{ adalah vokal dalam abjad latin}\} $

## Operator Himpunan

### 1. Gabungan

_Definisi: Gabungan himpunan $A$ dan $B$ (ditulis: $A \cup B$) adalah semua anggota $A$ atau semua anggota $B$ atau anggota kedua-duanya (dibaca $A$ gabung $B$)._

A gabungan B dapat juga didefinisikan sebagai:

$A\cup B=\{x\,\mid\, x \in A \text{ atau } x \in B\}.$

Contoh:

- Jika $P = \{1,2,3\}$ dan $Q = \{a,b,c,d\}$, maka $P \cup Q = \{1,2,3,a,b,c,d\}$
- Ditentukan $C = \{0\}$ dan $D = \text{ himpunan bilangan bulat positif }$. Maka $C \cup D = \text{ himpunan bilangan cacah }$.

Contoh kode:

```Javascript
const p = new Set([1,2,3]);
const q = new Set(['a','b','c','d']);
const union = new Set([...p, ...q]);

console.log(union) // {1,2,3,4,'a','b','c','d'}
```

Operator _spread_ `(...)` menyisipkan elemen dari sesuatu yang dapat diubah (seperti _set_) ke dalam array. Oleh karena itu, `[...a, ...b]` berarti bahwa `a` dan `b` dikonversi ke _array_ dan digabungkan. Ini setara dengan `[...a].concat([...b])`.

### 2. Irisan

_Definisi: Irisan dari himpunan $A$ dan $B$ (ditulis: $A \cap B$) adalah himpunan dari anggota persekutuan $A$ dan himpunan $B$ (dengan kata lain, himpunan yang anggota-anggotanya adalah anggota $A$ dan anggota $B$), dibaca $A$ irisan $B$._

$A\cap B=\{x\,\mid\, x \in A \text{ dan } x \in B\}.$

Contoh:

- Ditentukan $A = \{p,o,t,r,e,t\}$ dan $B=\{t,a,p,e\}$. Maka $A \cap B = \{p,t,e\}$
- Jika $M = \{\text{ bilangan asli kelipatan 2}\}$ dan $N = \{\text{ bilangan asli kelipatan 3}\}$ maka $M \cap N = \{6,12,18,...\}$

Contoh kode:

```Javascript
const a = new Set(['p','o','t','r','e','t']);
const b = new Set(['t','a','p','e']);
const intersection = new Set(
    [...a].filter(x => b.has(x)));

console.log(intersection) // {'p','t','e'}
```

Langkah-langkah: Konversi `a` ke _array_, filter elemen, ubah hasilnya menjadi _set_.

### 3. Komplemen

_Definisi: Komplemen suatu himpunan $A$ (ditulis $A^{1}$ atau $A^{c}$) adalah himpunan anggota-anggota di dalam semesta pembicaraan yang bukan anggota $A$._

Contoh:

- Ditentukan $E = \{0,2,4,6,...\}$ di dalam semesta pembicaraan himpunan bilangan cacah. Maka $E^{1} = \{1,3,5,7,...\}$
- Semesta pembicaraan $S = \{i,n,d,o,n,e,s,i,a\}$ dan $X = \{\text{vokal}\}$ maka $X^{1}=\{n,d,s\}$

Contoh kode:

```Javascript
const s = new Set(['i','n','d','o','n','e','s','i','a']); // Himpunan Semesta
const e = new Set(['a','i','u','e','o']);
const difference = new Set(
    [...s].filter(x => !e.has(x)));

console.log(difference) // {'n','d','s'}
```
