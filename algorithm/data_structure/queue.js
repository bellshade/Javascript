/* 
== PENJELASAN QUEUE ==
  Queue adalah struktur data linier yang mirip seperti antrian, yaitu data yang pertama dimasukkan akan diproses dan dikeluarkan pertama pula. Penambahan dan pengurangan data pada queue bersifat FIFO (First In First Out). Data yang dimasukkan pertama kali akan dikeluarkan pertama kali pula. Contoh queue pada dunia nyata dapat ditemukan pada berbagai hal, seperti antrian pembayaran pada kasir, antrian mobil pada loket tol, dan lain lain. Di mana antrian yang terlebih dahulu masuk, akan lebih dahulu keluar.

== Fungsi Utama ==
  1. enqueue, menambah data ke dalam queue.
  2. dequeue, menghapus data dari queue, dan mengembalikan data yang dihapus tersebut.
  3. peek, melihat data paling awal dari queue.
  4. isEmpty, mengecek apakah data di queue kosong.
*/

class Queue {
  constructor(max) {
    this.data = [];
    this.maxData = max;
  }

  enqueue(data) {
    if (this.data.length < this.maxData) {
      this.data.push(data);
      return data;
    } else {
      console.log("Stackoverflow! Maximum data queue telah dicapai");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.data.shift();
    } else {
      console.log("Data pada queue kosong");
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.data[0];
    } else {
      console.log("Data pada queue kosong");
      return null;
    }
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

const queue = new Queue(4);
queue.enqueue("Antrian 1");
queue.enqueue("Antrian 2");
queue.enqueue("Antrian 3");
queue.enqueue("Antrian 4");
queue.enqueue("Antrian 5"); // Stackoverflow error
console.log(queue.dequeue());
console.log(queue.peek());
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue(); // Data pada queue kosong
console.log(queue.peek()); // Data pada queue kosong, print null

// > const testQueue = new Queue(1);
// > testQueue.enqueue("Test Antrian 1");
// "Test Antrian 1"
// > testQueue.enqueue("Test Antrian 2");
// undefined
// > testQueue.peek();
// "Test Antrian 1"
// > testQueue.dequeue();
// "Test Antrian 1"
// > testQueue.dequeue();
// undefined
// > testQueue.peek();
// null
