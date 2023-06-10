function nameShortner(fullname, maxLen = 24, capitalize = 1) {
  // ------------------------ helper functions ------------------------
  function nameLen(arr) {
    return arr.join(" ").length;
  }
  function init(fullname) {
    return fullname
      .split(", ")[0]
      .split(" ") // split string nya agar bisa di manipulasi
      .reverse(); // reverse array nya agar bisa mulai dari belakang
  }
  function capitalized(name) {
    return name[0].toUpperCase() + name.substring(1); // ambil karakter pertama ubah jadi kapital dan tambahkan sisa nya
  }
  function singleName(shorten) {
    while (shorten.length >= 2) {
      shorten[0].trim();
      if (nameLen(shorten) <= maxLen) {
        // hilangkan semua singkatan hingga karakter nya sesuai
        break;
      }
      shorten.shift();
    }
  }
  // ------------------------ helper functions ------------------------

  const shorten = init(fullname);

  for (const [i, name] of shorten.entries()) {
    // i sebagai index, dan name sebagai nama
    const currentLen = nameLen(shorten); // memperbarui total panjang nama

    if (capitalize) {
      // bila nama butuh huruf kapital di awal tiap nama
      shorten[i] = capitalized(name);
    }
    if (currentLen <= maxLen && name.length > 2) {
      // lewati 1 loop bila total panjang sudah sesuai dan nama belum di singkat
      continue;
    }

    if (i !== shorten.length - 1) {
      // bila nama yang belum di singkat masih lebih dari 1
      shorten[i] = name.substring(0, 1).toUpperCase() + "."; // ambil karakter pertama, lalu di buat menjadi kapital, dan tambah kan .
    } else {
      singleName(shorten);
    }
  }

  return shorten.reverse().join(" "); // reverse array nya ke posisi semula dan gabungkan
}

console.log(nameShortner("muhammad jaka wiliam kent"));
// Muhammad Jaka Wiliam K.

console.log(nameShortner("juliyani zubaeda M"));
// Juliyani Zubaeda M.

console.log(nameShortner("james k widjaya"));
// Jamews K. Widjaya

console.log(nameShortner("james k widjaya", 15));
// Jamews K.

// Note Bugs:
//  1. algoritma ini tidak dapat membedakan gelar yang berada di depan nama
console.log(nameShortner("Ir. Mulawanmar", 10));
// Ir. M.

//  2. algoritma ini akan menghilangkan gelar di belakang nama, dikarenakan penulisan yang terkadang tidak konsisten
console.log(nameShortner("nicholas bambang prasetyo, S.Pd., M.Pd."));
// Nicholas Bambang P.
