## Notasi Himpunan

Himpunan biasanya dinyatakan dengan huruf $A, B, C, K, X, ...$ dan sebagainya. Sedang anggota suatu himpunan dinyatakan dengan huruf kecil $a, b,c, k, x,...$ dan sebagainya.

Ada 3 cara untuk mendefinisikan suatu himpunan, yaitu:

- Dengan mendaftar anggota-anggota di antara kurung kurawal buka dan tutup.

  Contoh: $P=\lbrace a,i,u,e,o \rbrace$.

- Dengan menyatakan sifat-sifat yang dipenuhi oleh anggota-anggotanya.

  Contoh: $Q=$ himpunan vokal dalam abjad latin,

- Dengan menggunakan notasi pembentuk himpunan.

  Contoh: $R=\lbrace x\,\mid\, x \text{ adalah vokal dalam abjad latin} \rbrace$.

## Operator Himpunan

### 1. Gabungan

Definisi: Gabungan himpunan $A$ dan $B$ (ditulis: $A \cup B$) adalah semua anggota $A$ atau semua anggota $B$ atau anggota kedua-duanya (dibaca $A$ gabung $B$).

A gabungan B dapat juga didefinisikan sebagai:

$A\cup B=\lbrace x\,\mid\, x \in A \text{ atau } x \in B \rbrace$.

Contoh:

- Jika $P=\lbrace 1,2,3 \rbrace$ dan $Q=\lbrace a,b,c,d \rbrace$, maka $P \cup Q =\lbrace 1,2,3,a,b,c,d \rbrace$.
- Ditentukan $C=\lbrace 0 \rbrace$ dan $D =\text{ himpunan bilangan bulat positif}$. Maka $C \cup D = \text{ himpunan bilangan cacah }$.

Contoh kode:

```Javascript
const p = new Set([1,2,3]);
const q = new Set(['a','b','c','d']);
const union = new Set([...p, ...q]);

console.log(union) // {1,2,3,4,'a','b','c','d'}
```

Operator _spread_ `(...)` menyisipkan elemen dari sesuatu yang dapat diubah (seperti _set_) ke dalam array. Oleh karena itu, `[...a, ...b]` berarti bahwa `a` dan `b` dikonversi ke _array_ dan digabungkan. Ini setara dengan `[...a].concat([...b])`.

### 2. Irisan

Definisi: Irisan dari himpunan $A$ dan $B$ (ditulis: $A \cap B$) adalah himpunan dari anggota persekutuan $A$ dan himpunan $B$ (dengan kata lain, himpunan yang anggota-anggotanya adalah anggota $A$ dan anggota $B$), dibaca $A$ irisan $B$.

$A\cap B=\lbrace x\,\mid\, x \in A \text{ dan } x \in B \rbrace$.

Contoh:

- Ditentukan $A = \lbrace p,o,t,r,e,t \rbrace$ dan $B=\lbrace t,a,p,e \rbrace$. Maka $A \cap B =\lbrace p,t,e \rbrace$.
- Jika $M =\lbrace \text{ bilangan asli kelipatan 2 }\rbrace$ dan $N =\lbrace \text{ bilangan asli kelipatan 3 }\rbrace$ maka $M \cap N =\lbrace 6,12,18,...\rbrace$.

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

Definisi: Komplemen suatu himpunan $A$ (ditulis $A^{1}$ atau $A^{c}$) adalah himpunan anggota-anggota di dalam semesta pembicaraan yang bukan anggota $A$.

Contoh:

- Ditentukan $E = \lbrace 0,2,4,6,...\rbrace$ di dalam semesta pembicaraan himpunan bilangan cacah. Maka $E^{1} = \lbrace 1,3,5,7,...\rbrace$.
- Semesta pembicaraan $S = \lbrace i,n,d,o,n,e,s,i,a \rbrace$ dan $X = \lbrace \text{vokal} \rbrace$ maka $X^{1}=\lbrace n,d,s \rbrace$.

Contoh kode:

```Javascript
const s = new Set(['i','n','d','o','n','e','s','i','a']); // Himpunan Semesta
const e = new Set(['a','i','u','e','o']);
const difference = new Set(
    [...s].filter(x => !e.has(x)));

console.log(difference) // {'n','d','s'}
```
