/**
 * Class untuk merepresentasikan struktur data linked list.
 * Linked list adalah struktur data linear.
 * Elemen linked list terdiri dari data dan pointer untuk menunjuk elemen selanjutnya (next).
 */
class LinkedList {
  /**
   * Constructor untuk membuat head (awal) dari linked list, dengan data tertentu, dan next null.
   * @param {*} data - Data yang akan ditampung pada elemen pertama linked list.
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  /**
   * Method untuk menambah data pada akhir dari linked list.
   * @example
   * linkedList 1->2->3
   * linkedList.insert(4);
   * linkedList 1->2->3->4
   * @param {*} data - Data yang akan ditambahkan pada linked list.
   */
  insert(data) {
    if (this.next) {
      this.next.insert(data);
    } else {
      this.next = new LinkedList(data);
    }
  }

  /**
   * Method untuk menghapus elemen terakhir dari linked list, dan mengembalikan nilai elemen yang dihapus.
   * @example
   * linkedList 1->2->3
   * // returns 3
   * linkedList.delete();
   * linkedList 1->2
   * @returns {Number} - Data yang dihapus dari elemen terakhir linked list.
   */
  delete() {
    if (!this.next) {
      const firstData = this.data;
      this.data = null;
      return firstData;
    }
    let currentHead = this;
    while (currentHead.next.next) {
      currentHead = currentHead.next;
    }
    const deletedData = currentHead.next.data;
    currentHead.next = null;
    return deletedData;
  }

  /**
   * Method untuk mencari data pada linked list dengan nilai pencarian yang sudah ditentukan.
   * Mengembalikan data pada elemen linked list berdasarkan nilai pencarian jika ditemukan, atau null.
   * * @example
   * linkedList 1->2->3
   * // returns 2
   * linkedList.search(2);
   * // returns null
   * linkedList.search(20);
   * @param {*} data - Target pencarian.
   * @returns {*|null} - Data yang ditemukan pada elemen linked list berdasarkan nilai pencarian, atau null.
   */
  search(data) {
    let currentHead = this;
    while (currentHead) {
      if (currentHead.data === data) {
        return currentHead.data;
      }
      currentHead = currentHead.next;
    }
    return null;
  }

  /**
   * Method untuk menghitung jumlah elemen dari linked list.
   * @example
   * linkedList 1->2
   * //returns 2
   * linkedList.length()
   * @returns {Number} - Jumlah elemen dari linked list
   */
  length() {
    let currentHead = this;
    let counter = 0;
    while (currentHead) {
      currentHead = currentHead.next;
      counter++;
    }
    return counter;
  }

  /**
   * Method untuk menambahkan linked list lain pada elemen terakhir linked list.
   * linkedList 1->2
   * linkedListOther 11->12
   * linkedList.append(linkedListOther)
   * linkedList 1->2->11->12
   * @param {LinkedList} linkedList - Linked list yang akan ditambahkan.
   */
  append(linkedList) {
    let currentHead = this;
    while (currentHead.next) {
      currentHead = currentHead.next;
    }
    currentHead.next = linkedList;
  }

  /**
   * Method untuk menyisipkan data ke linked list pada indeks tertentu.
   * Tidak akan menambah jika indeks melebihi kapasitas.
   * @example
   * linkedList 1->2->3->4
   * linkedList.insertAt(0, 5)
   * linkedList 5->1->2->3->4
   * linkedList.insertAt(1, 6)
   * linkedList 5->6->1->2->3->4
   * linkedList.insertAt(6, 7)
   * linkedList 5->6->1->2->3->4->7
   * linkedList.insertAt(8, 9)
   * linkedList 5->6->1->2->3->4->7
   * @param {Number} index - Indeks linked list yang akan disisipi data.
   * @param {*} data - Data yang akan disisipi kepada linked list.
   */
  insertAt(index, data) {
    if (index === 0) {
      let currentHead = new LinkedList(this.data);
      currentHead.next = this.next;
      this.data = data;
      this.next = currentHead;
    } else {
      let counter = 1;
      let currentHead = this;
      while (currentHead && counter < index) {
        currentHead = currentHead.next;
        counter++;
      }
      if (currentHead === null) {
        console.log("Indeks melebihi batas");
        return;
      }
      const insertedHead = new LinkedList(data);
      insertedHead.next = currentHead.next;
      currentHead.next = insertedHead;
    }
  }

  /**
   * Method untuk menghapus elemen linked list pada indeks tertentu.
   * Mengembalikan nilai dari elemen linked list yang dihapus.
   * Tidak akan menghapus jika indeks melebihi kapasitas.
   * @param {Number} index - Indeks linked list yang akan dihapus.
   * @returns {*|null} - Data yang dihapus dari linked list.
   */
  deleteAt(index) {
    if (index === 0) {
      const deletedData = this.data;
      if (this.next) {
        this.data = this.next.data;
        this.next = this.next.next;
        return deletedData;
      } else {
        this.data = null;
      }
      return deletedData;
    } else {
      let counter = 1;
      let currentHead = this;
      while (currentHead.next && counter < index) {
        currentHead = currentHead.next;
        counter++;
      }
      if (currentHead.next === null) {
        console.log("Indeks melebihi batas");
        return null;
      }
      const deletedData = currentHead.next.data;
      currentHead.next = currentHead.next.next;
      return deletedData;
    }
  }

  /**
   * Method untuk menyisipkan linked list lain kepada linked list dengan indeks tertentu.
   * Tidak akan menyisipkan linked list lain jika indeks melebihi batas.
   * @example
   * linkedList 1->2
   * linkedListOther 11->12
   * linkedList.appendAt(0, linkedListOther)
   * linkedList 11->12->1->2
   * linkedList.appendAt(2, linkedListOther)
   * linkedList 11->12->11->12->1->2
   * linkedList.appendAt(6, linkedListOther)
   * linkedList 11->12->11->12->1->2->11->12
   * linkedList.appendAt(9, linkedListOther)
   * linkedList 11->12->11->12->1->2->11->12
   * @param {Number} index - Indeks linked list yang akan disisipi linked list lain.
   * @param {LinkedList} linkedList - Linked list lain yang akan disisipkan kepada linked list.
   * @returns
   */
  appendAt(index, linkedList) {
    if (index === 0) {
      const headData = this.toArray();
      this.data = linkedList.data;
      this.next = null;
      linkedList.next.toArray().forEach((element) => {
        this.insert(element);
      });
      headData.forEach((element) => {
        this.insert(element);
      });
    } else {
      let counter = 1;
      let currentHead = this;
      while (currentHead && counter < index) {
        currentHead = currentHead.next;
        counter++;
      }
      if (currentHead === null) {
        console.log("Indeks melebihi batas");
        return;
      }
      let headNextData;
      if (currentHead.next) {
        headNextData = currentHead.next.toArray();
      }

      currentHead.next = null;
      linkedList.toArray().forEach((element) => {
        currentHead.insert(element);
      });
      if (headNextData) {
        headNextData.forEach((element) => {
          currentHead.insert(element);
        });
      }
    }
  }

  /**
   * Method untuk mengupdate data elemen linked list pada indeks tertentu.
   * Tidak akan mengupdate jika indeks melebihi batas.
   * @param {Number} index - Indeks linked list yang akan diupdate.
   * @param {*} data - Data yang akan mengupdate elemen linked list pada indeks tertentu.
   */
  updateAt(index, data) {
    let currentHead = this;
    let counter = 0;
    while (currentHead && counter < index) {
      currentHead = currentHead.next;
      counter++;
    }
    if (currentHead) {
      currentHead.data = data;
    } else {
      console.log("Indeks melebihi batas");
    }
  }

  /**
   * Method yang akan mengembalikan array baru yang berisi semua elemen dari linked list.
   * @returns {Array} - Array baru yang berisi semua elemen dari linked list.
   */
  toArray() {
    const data = [];
    let currentHead = this;
    while (currentHead) {
      if (currentHead.data) {
        data.push(currentHead.data);
      }
      currentHead = currentHead.next;
    }
    return data;
  }
}

const main = () => {
  const firstLinkedList = new LinkedList(1);
  firstLinkedList.insert(2);
  console.log(firstLinkedList.toArray()); // [1, 2]
  firstLinkedList.insertAt(0, 3);
  console.log(firstLinkedList.toArray()); // [3, 1, 2]
  firstLinkedList.insertAt(1, 4);
  console.log(firstLinkedList.toArray()); // [3, 4, 1, 2]
  firstLinkedList.insertAt(4, 5);
  console.log(firstLinkedList.toArray()); // [3, 4, 1, 2, 5]
  firstLinkedList.insertAt(6, 6);
  console.log(firstLinkedList.toArray()); // [3, 4, 1, 2, 5]
  console.log(firstLinkedList.delete()); // 5
  console.log(firstLinkedList.toArray()); // [3, 4, 1, 2]
  console.log(firstLinkedList.deleteAt(0)); // 3
  console.log(firstLinkedList.toArray()); // [4, 1, 2]
  console.log(firstLinkedList.deleteAt(1)); // 1
  console.log(firstLinkedList.toArray()); // [4, 2]
  console.log(firstLinkedList.deleteAt(2)); // null
  console.log(firstLinkedList.toArray()); // [4, 2]
  const secondLinkedList = new LinkedList(101);
  secondLinkedList.insert(102);
  firstLinkedList.append(secondLinkedList);
  console.log(firstLinkedList.toArray()); // [4, 2, 101, 102]
  firstLinkedList.appendAt(0, secondLinkedList);
  console.log(firstLinkedList.toArray()); // [101, 102, 4, 2, 101, 102]
  firstLinkedList.appendAt(1, secondLinkedList);
  console.log(firstLinkedList.toArray()); // [101, 101, 102, 102, 4, 2, 101, 102]
  firstLinkedList.appendAt(8, secondLinkedList);
  console.log(firstLinkedList.toArray()); // [101, 101, 102, 102, 4, 2, 101, 102, 101, 102]
  firstLinkedList.appendAt(11, secondLinkedList);
  console.log(firstLinkedList.toArray()); // [101, 101, 102, 102, 4, 2, 101, 102, 101, 102]
  console.log(firstLinkedList.search(4)); // 4
  console.log(firstLinkedList.search(40)); // null
  console.log(firstLinkedList.length()); // 10

  firstLinkedList.updateAt(9, 1000);
  console.log(firstLinkedList.toArray()); // [101, 101, 102, 102, 4, 2, 101, 102, 101, 1000]

  // > const linkedListTest = new LinkedList(5);
  // > linkedListTest.insert(9);
  // > linkedListTest.toArray();
  // [5, 9];
  // > linkedListTest.insert(12);
  // > linkedListTest.toArray();
  // [5, 9, 12];
  // > linkedListTest.insertAt(0, 2);
  // > linkedListTest.toArray();
  // [2, 5, 9, 12];
  // > linkedListTest.insertAt(2, 8);
  // > linkedListTest.toArray();
  // [2, 5, 8, 9, 12];
  // > linkedListTest.insertAt(5, 15);
  // > linkedListTest.toArray();
  // [2, 5, 8, 9, 12, 15];
  // > linkedListTest.insertAt(7);
  // > linkedListTest.toArray();
  // [2, 5, 8, 9, 12, 15];
  // > linkedListTest.delete();
  // 15;
  // > linkedListTest.toArray();
  // [2, 5, 8, 9, 12];
  // > linkedListTest.deleteAt(0);
  // 2;
  // > linkedListTest.toArray();
  // [5, 8, 9, 12];
  // > linkedListTest.deleteAt(3);
  // 12;
  // > linkedListTest.toArray();
  // [5, 8, 9];
  // > linkedListTest.toArray();
  // [5, 8, 9];
  // > linkedListTest.deleteAt(3);
  // null;
  // > linkedListTest.toArray();
  // [5, 8, 9];

  // > linkedListTest.search(5);
  // 5;
  // > linkedListTest.search(20);
  // null;
  // > linkedListTest.length();
  // 3;

  // > const secondLinkedListTest = new LinkedList(50);
  // > secondLinkedListTest.insert(70);
  // > secondLinkedListTest.toArray();
  // [50, 70];

  // > linkedListTest.append(secondLinkedListTest);
  // > linkedListTest.toArray();
  // [5, 8, 9, 50, 70];
  // > secondLinkedListTest.toArray();
  // [50, 70];

  // > linkedListTest.appendAt(0, secondLinkedListTest);
  // > linkedListTest.toArray();
  // [50, 70, 5, 8, 9, 50, 70];
  // > secondLinkedListTest.toArray();
  // [50, 70];

  // > linkedListTest.appendAt(3, secondLinkedListTest);
  // > linkedListTest.toArray();
  // [50, 70, 5, 50, 70, 8, 9, 50, 70];
  // > secondLinkedListTest.toArray();
  // [50, 70];

  // > linkedListTest.appendAt(9, secondLinkedListTest);
  // > linkedListTest.toArray();
  // [50, 70, 5, 50, 70, 8, 9, 50, 70, 50, 70];
  // > secondLinkedListTest.toArray();
  // [50, 70];

  // > linkedListTest.appendAt(12, secondLinkedListTest);
  // > linkedListTest.toArray();
  // [50, 70, 5, 50, 70, 8, 9, 50, 70, 50, 70];
  // > secondLinkedListTest.toArray();
  // [50, 70];
};

main();
