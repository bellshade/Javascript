/** Class untuk merepresentasikan data siswa */
class Student {
  /**
   * Constructor untuk membuat objek siswa dengan data nama, kota, dan nilai.
   * @param {String} name - Nama siswa.
   * @param {String} city - Kota tempat tinggal siswa.
   * @param {Number} score - Nilai siswa.
   */
  constructor(name, city, score) {
    this.name = name;
    this.city = city;
    this.score = score;
  }
}

/**
 * Class util yang berisi method-method comparator untuk data siswa.
 * Comparator adalah fungsi yang digunakan sebagai argumen pada method Array.prototype.sort(comparator).
 * Comparator bertujuan untuk membandingkan dua data untuk menentukan urutan dari dua data tersebut.
 * Comparator memiliki dua parameter, yaitu dua data yang akan dibandingkan, dan mengembalikan nilai positif, 0, atau negatif.
 * Nilai kembalian dari comparator ini akan digunakan pada method Array.prototype.sort,
 * dan menentukan urutan data, dengan ketentuan sebagai berikut:
 * - Nilai positif: Data kedua terlebih dahulu, kemudian data pertama.
 * - Nilai negatif: Data pertama terlebih dahulu, kemudian data kedua.
 * - 0: Urutan data pertama dan data kedua tetap.
 * Dengan menggunakan comparator, kita dapat menerapkan multi properties ordering.
 * Contohnya mengurutkan data siswa berdasarkan kota terlebih dahulu,
 * dan untuk kota yang sama, urutkan berdasarkan nama.
 */
class StudentComparator {
  /**
   * Comparator untuk membandingkan data siswa berdasarkan nama,
   * dengan menggunakan method String.prototype.localeCompare().
   * Method String.prototype.localeCompare sendiri merupakan comparator bawaan untuk string,
   * yaitu membandingkan dua string, dan mengembalikan nilai yang menentukan urutan kedua string tersebut.
   * Contohnya "a".localeCompare("c") akan mengembalikan nilai -1, berarti a menjadi urutan pertama.
   * @param {Student} firstStudent - Data siswa pertama
   * @param {Student} secondStudent - Data siswa kedua
   * @returns {Number} - Nilai yang menentukan urutan dari data siswa.
   */
  static compareByName(firstStudent, secondStudent) {
    return firstStudent.name.localeCompare(secondStudent.name);
  }

  /**
   * Comparator untuk membandingkan data siswa berdasarkan nilai siswa,
   * dengan melakukan pengurangan dari dua nilai siswa.
   * Pengurangan dua nilai siswa ini akan menghasilkan nilai yang menentukan urutan siswa.
   * Contohnya: 70 - 90 = -20. Berarti data 70 akan menjadi urutan pertama.
   * @param {Student} firstStudent - Data siswa pertama
   * @param {Student} secondStudent - Data siswa kedua
   * @returns {Number} - Nilai yang menentukan urutan dari data siswa.
   */
  static compareByScore(firstStudent, secondStudent) {
    return firstStudent.score - secondStudent.score;
  }

  /**
   * Comparator untuk membandingkan data siswa berdasarkan kota,
   * dengan menggunakan method String.prototype.localeCompare().
   * @param {Student} firstStudent - Data siswa pertama
   * @param {Student} secondStudent - Data siswa kedua
   * @returns {Number} - Nilai yang menentukan urutan dari data siswa.
   */
  static compareByCity(firstStudent, secondStudent) {
    return firstStudent.city.localeCompare(secondStudent.city);
  }

  /**
   * Comparator untuk membandingkan data siswa berdasarkan kota, kemudian nama.
   * Comparator ini pertama membandingkan kota dari dua siswa, dan jika memiliki kota yang sama,
   * maka membandingkan berdasarkan nama siswa.
   * @param {Student} firstStudent - Data siswa pertama
   * @param {Student} secondStudent - Data siswa kedua
   * @returns {Number} - Nilai yang menentukan urutan dari data siswa.
   */
  static compareByCityAndName(firstStudent, secondStudent) {
    if (firstStudent.city === secondStudent.city) {
      return StudentComparator.compareByName(firstStudent, secondStudent);
    } else {
      return StudentComparator.compareByCity(firstStudent, secondStudent);
    }
  }

  /**
   * Comparator untuk membandingkan data siswa berdasarkan kota, nilai, kemudian nama.
   * Comparator ini pertama membandingkan kota dari dua siswa, dan jika memiliki kota yang sama,
   * maka membandingkan berdasarkan nilai siswa, dan jika memiliki nilai yang sama, maka membandingkan nama siswa.
   * @param {Student} firstStudent - Data siswa pertama
   * @param {Student} secondStudent - Data siswa kedua
   * @returns {Number} - Nilai yang menentukan urutan dari data siswa.
   */
  static compareByCityAndScoreAndName(firstStudent, secondStudent) {
    if (firstStudent.city === secondStudent.city) {
      if (firstStudent.score === secondStudent.score) {
        return StudentComparator.compareByName(firstStudent, secondStudent);
      } else {
        return StudentComparator.compareByScore(firstStudent, secondStudent);
      }
    } else {
      return StudentComparator.compareByCity(firstStudent, secondStudent);
    }
  }

  /**
   * Comparator untuk membandingkan data siswa berdasarkan nilai siswa secara descending,
   * dengan menggunakan pembalikkan dari StudentComparator.compareByScore.
   * Pembalikkan StudentComparator.compareByScore ini digunakan agar data diurutkan secara descending.
   * Contohnya: StudentComparator.compareByScore(70, 90) * -1 akan menghasilkan 20.
   * Berarti data 90 akan menjadi urutan pertama.
   * @param {Student} firstStudent - Data siswa pertama
   * @param {Student} secondStudent - Data siswa kedua
   * @returns {Number} - Nilai yang menentukan urutan dari data siswa.
   */
  static compareByScoreDesc(firstStudent, secondStudent) {
    return -StudentComparator.compareByScore(firstStudent, secondStudent);
  }
}

const main = () => {
  const listStudent = [];
  listStudent.push(new Student("Pia Wastuti", "Bandung", 80));
  listStudent.push(new Student("Mulya Sihombing", "Cirebon", 98));
  listStudent.push(new Student("Ratih Novitasari", "Bandung", 80));
  listStudent.push(new Student("Yunita Oktaviani", "Jakarta", 75));
  listStudent.push(new Student("Ganda Wibisono", "Palembang", 72));
  listStudent.push(new Student("Rafi Pangestu", "Bandung", 70));
  listStudent.push(new Student("Satya Januar", "Jakarta", 85));
  listStudent.push(new Student("Raditya Dongoran", "Kuningan", 90));
  listStudent.push(new Student("Rika Andriani", "Cirebon", 63));
  listStudent.push(new Student("Virman Damanik", "Bekasi", 67));
  console.log("Urutan berdasarkan nilai");
  console.log(listStudent.sort(StudentComparator.compareByScore));
  console.log("Urutan berdasarkan nilai descending");
  console.log(listStudent.sort(StudentComparator.compareByScoreDesc));
  console.log("Urutan berdasarkan kota");
  console.log(listStudent.sort(StudentComparator.compareByCity));
  console.log("Urutan berdasarkan nama");
  console.log(listStudent.sort(StudentComparator.compareByName));
  console.log("Urutan berdasarkan kota, kemudian nama");
  console.log(listStudent.sort(StudentComparator.compareByCityAndName));
  console.log("Urutan berdasarkan kota, kemudian nilai, kemudian nama");
  console.log(listStudent.sort(StudentComparator.compareByCityAndScoreAndName));

  // > listStudent
  // . .sort(StudentComparator.compareByScore)
  // . .map((student) => student.score);
  // [63, 67, 70, 72, 75, 80, 80, 85, 90, 98]
  // > listStudent
  // . .sort(StudentComparator.compareByScoreDesc)
  // . .map((student) => student.score);
  // [98, 90, 85, 80, 80, 75, 72, 70, 67, 63]
};

main();
