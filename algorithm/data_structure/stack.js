/* 
== PENJELASAN GRAPH ==
  Stack adalah struktur data yang bersifat linier, dan sifat data disebut dengan LIFO (Last IN First Out). Yang dimana ketika suatu data dimasukan terakhir, maka data terakhir itu akan menjadi data yang pertama kali keluar. Stack sama seperti bahasa Indonesianya artinya tumpukan, seperti kita menumpuk sebuah buku. Tumpukan paling atas adalah tumpukan yang paling akhir kita tumpuk dalam kata artian terakhir kita masukan data. Nah ketika kita ingin mengambil buku dari tumpukan buku, maka kita akan mengambil dari buku paling atas. Nah, stuktur data stack juga seperti itu. Kita mengambil data paling atas terlebih dahulu.

==FUNGSI UTAMA==
  1. push, menambah data kedalam stack.
  2. pop, mengambil data / menghapus data dari stack.
  3. peek, melihat data paling atas dari stack.
  4. isEmpty, mengcek apakah data di stack kosong.
*/

class Stack {
  constructor(max) {
    this.index = -1;
    this.maxData = max;
    this.data = [];
  }

  push(data) {
    if (this.index !== this.maxData - 1) {
      this.data.push(data);
      this.index += 1;
      return data;
    } else {
      console.log("Stackoverflow! Maximum data stack telah dicapai");
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const tmpData = [...this.data];
      const [removedData] = tmpData.splice(this.index, 1);
      this.data = tmpData;
      this.index -= 1;
      return removedData;
    } else {
      console.log("Stackunderflow! Data pada stack kosong");
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.data[this.index];
    } else {
      console.log("Data pada stack kosong");
      return null;
    }
  }

  isEmpty() {
    return this.index === -1;
  }
}

const stack = new Stack(4);

stack.push("Buku 1");
stack.push("Buku 2");
stack.push("Buku 3");
stack.push("Buku 4");

console.log(stack.peek());
stack.pop();
console.log(stack.peek());
