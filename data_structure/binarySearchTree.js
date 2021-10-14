/**
 * Class untuk merepresentasikan node binary search tree.
 * Binary search tree adalah binary tree, dengan kriteria tambahan sebagai berikut:
 * 1. Setiap node pada subtree kiri dari node harus memiliki nilai lebih kecil dari node.
 * 2. Setiap node pada subtree kanan dari node harus memiliki nilai lebih besar dari node.
 * 3. Karena 2 kriteria di atas, maka otomatis setiap node pada binary search tree harus memiliki nilai yang unik.
 * Kriteria pada binary search tree ini dimaksudkan untuk mempercepat pencarian pada binary search tree.
 * Pencarian pada binary search tree lebih cepat karena proses pencarian hanya menelusuri bagian kiri saja atau bagian kanan saja pada binary search tree,
 * ditentukan dari apakah nilai yang dicari lebih kecil atau lebih besar dari nilai pada node.
 * Pencarian ini tentu saja lebih cepat daripada pencarian pada binary tree biasa,
 * yang mencari nilai pada seluruh node dari binary tree.
 *
 */
class BinarySearchNode {
  /**
   * Constructor untuk membuat node binary search tree dengan data tertentu,
   * dan children null.
   * @param {*} data - Data yang ditampung pada node binary search tree.
   */
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  /**
   * Method untuk menambahkan node pada binary search tree dengan data tertentu.
   * Data dengan nilai yang lebih kecil dari root, akan ditambahkan pada child kiri.
   * Data dengan nilai yang lebih besar dari root, akan ditambahan pada child kanan.
   * Data yang sudah ada pada binary search tree akan ditolak.
   * Contoh penambahan data 7, 6, 12, 10 pada node bernilai 9 akan menghasilkan binary search tree sebagai berikut:
   *     9
   *    / \
   *   7   12
   *  /    /
   * 6   10
   * @param {*} data - Data yang akan ditambahkan pada node baru.
   */
  insert(data) {
    if (data < this.data) {
      if (this.left) {
        this.left.insert(data);
      } else {
        this.left = new BinarySearchNode(data);
      }
    } else if (data > this.data) {
      if (this.right) {
        this.right.insert(data);
      } else {
        this.right = new BinarySearchNode(data);
      }
    } else {
      console.log("Data pada Binary Search Tree Harus Bersifat Unik");
    }
  }
}

/** Class util untuk melakukan operasi pada binary search tree */
class BinarySearchTreeUtil {
  /**
   * Static method untuk mencari data pada binary search tree, dengan nilai pencarian yang sudah ditentukan.
   * Mengembalikan data pada binary search tree berdasarkan nilai pencarian jika ditemukan, atau null.
   * Pencarian dilakukan dengan membandingkan data pada node binary search tree dengan nilai pencarian.
   * Jika nilai pencarian sama dengan nilai pada node, kembalikan nilai pada node.
   * Jika nilai pencarian lebih kecil dari nilai pada node, lakukan pencarian pada subtree kiri.
   * Jika nilai pencarian lebih besar dari nilai pada node, lakukan pencarian pada subtree kanan.
   * @example
   * root
   *     9
   *    / \
   *   7   12
   *  /    /
   * 6   10
   * // returns 9
   * BinarySearchTreeUtil.search(root, 9);
   * // return null
   * BinarySearchTreeUtil.search(root, 15);
   * @param {BinarySearchNode} root - Node binary search tree yang akan dikenakan pencarian.
   * @param {*} data - Target pencarian.
   * @returns {*|null} - Mengembalikan data pada node berdasarkan nilai pencarian jika ditemukan, atau null.
   */
  static search(root, data) {
    if (root == null) {
      return null;
    }
    if (root.data === data) {
      return data;
    }
    if (data < root.data) {
      return this.search(root.left, data);
    } else {
      return this.search(root.right, data);
    }
  }

  /**
   * Method untuk mengembalikan nilai paling kecil pada binary search tree.
   * Untuk mendapatkan nilai paling kecil pada binary search tree,
   * lakukan penelusuran ke kiri hingga mencapai leaf, dan kembalikan nilai pada node tersebut.
   * @example
   * root
   *     9
   *    / \
   *   7   12
   *  /    /
   * 6   10
   * // returns 6
   * BinarySearchTreeUtil.min(root);
   * @param {BinarySearchNode} root - Node binary search tree yang akan dicari nilai minimal nya.
   * @returns {*} - Nilai paling kecil pada binary search tree.
   */
  static min(root) {
    if (root == null) {
      return null;
    }
    if (root.left == null) {
      return root.data;
    } else {
      return this.min(root.left);
    }
  }

  /**
   * Method untuk mengembalikan nilai paling besar pada binary search tree.
   * Untuk mendapatkan nilai paling besar pada binary search tree,
   * lakukan penelusuran ke kanan hingga mencapai leaf, dan kembalikan nilai pada node tersebut.
   * @example
   * root
   *     9
   *    / \
   *   7   12
   *  /    /
   * 6   10
   * // returns 12
   * BinarySearchTreeUtil.max(root);
   * @param {BinarySearchNode} root - Node binary search tree yang akan dicari nilai maksimal nya.
   * @returns {*} - Nilai paling besar pada binary search tree.
   */
  static max(root) {
    if (root == null) {
      return null;
    }
    if (root.right == null) {
      return root.data;
    } else {
      return this.max(root.right);
    }
  }
}

const main = () => {
  // Membuat tree dengan urutan 9, 15, 5, 8, 6, 13, 14
  const bsTree = new BinarySearchNode(9);
  for (const data of [15, 5, 8, 6, 13, 14]) {
    bsTree.insert(data);
  }
  // Akan menghasilkan binary search tree sebagai berikut:
  //    9
  //  /   \
  // 5    15
  //  \   /
  //   8 13
  //  /   \
  // 6    14
  console.log(BinarySearchTreeUtil.search(bsTree, 8)); // 8
  console.log(BinarySearchTreeUtil.search(bsTree, 13)); // 13
  console.log(BinarySearchTreeUtil.search(bsTree, 20)); // null
  console.log(BinarySearchTreeUtil.min(bsTree)); // 5
  console.log(BinarySearchTreeUtil.max(bsTree)); // 15

  // Membuat tree dengan urutan 20, 17, 30, 18, 35, 15, 32, 16
  const bsTreeTest = new BinarySearchNode(20);
  for (const data of [17, 30, 18, 35, 15, 32, 16]) {
    bsTreeTest.insert(data);
  }
  // Akan menghasilkan binary search tree sebagai berikut:
  //      20
  //    /    \
  //   17     30
  //  /  \     \
  // 15  18     35
  //  \         /
  //   16      32
  // > BinarySearchTreeUtil.search(bsTreeTest, 16);
  // 16
  // > BinarySearchTreeUtil.search(bsTreeTest, 18);
  // 18
  // > BinarySearchTreeUtil.search(bsTreeTest, 40);
  // null
  // > BinarySearchTreeUtil.min(bsTreeTest);
  // 15
  // > BinarySearchTreeUtil.max(bsTreeTest);
  // 35
};

main();
