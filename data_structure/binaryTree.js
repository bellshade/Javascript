/**
 * Class untuk merepresentasikan node dari binary tree.
 * Binary tree adalah struktur data non-linier.
 * Binary tree terdiri dari banyak node.
 * Node pada binary tree menyimpan data tertentu, dan setiap node memiliki paling banyak 2 sub node (children),
 * yaitu child kiri dan child kanan.
 */
class TreeNode {
  /**
   * Constructor untuk membuat node binary tree dengan data tertentu, dan children (kiri dan kanan) null.
   * @param {*} data - Data yang ditampung pada node binary tree.
   */
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  /**
   * Method untuk menambahkan child dari node binary tree dengan data tertentu.
   * Urutan penambahan child adalah dari kiri ke kanan, dengan contoh urutan sebagai berikut:
   *        1
   *      /   \
   *     2     3
   *    / \   / \
   *   4   5 6   7
   *  / \
   * 8   9 dst
   * @param {*} data - Data yang akan ditambahkan pada node baru.
   */
  insert(data) {
    if (!this.left) {
      this.left = new TreeNode(data);
    } else if (!this.right) {
      this.right = new TreeNode(data);
    } else if (this.left.right && (!this.right.left || !this.right.right)) {
      this.right.insert(data);
    } else {
      this.left.insert(data);
    }
  }
}

/** Class util untuk melakukan operasi pada binary tree */
class BinaryTreeUtil {
  /**
   * Static method untuk mengembalikan array dari binary tree dengan penelusuran inorder.
   * Penelusuran inorder akan menelusuri child kiri dari binary tree, node dari binary tree, kemudian child kanan dari binary tree.
   * @example
   * root
   *     1
   *    / \
   *   2   3
   *  / \
   * 4   5
   * // returns [4, 2, 5, 1, 3]
   * BinaryTreeUtil.inOrder(root);
   * @param {TreeNode} root - Node binary tree yang akan ditelusuri.
   * @returns {Array} - Mengembalikan data pada tree dalam bentuk array dengan urutan penelusuran inorder.
   */
  static inOrder(root) {
    const data = [];
    if (root != null) {
      data.push(...this.inOrder(root.left));
      data.push(root.data);
      data.push(...this.inOrder(root.right));
    }
    return data;
  }

  /**
   * Static method untuk mengembalikan array dari binary tree dengan penelusuran preorder.
   * Penelusuran preorder akan menelusuri node dari binary tree, child kiri dari binary tree, kemudian child kanan dari binary tree.
   * @example
   * root
   *     1
   *    / \
   *   2   3
   *  / \
   * 4   5
   * // returns [1, 2, 4, 5, 3]
   * BinaryTreeUtil.preOrder(root);
   * @param {TreeNode} root - Node binary tree yang akan ditelusuri.
   * @returns {Array} - Mengembalikan data pada tree dalam bentuk array dengan urutan penelusuran preorder.
   */
  static preOrder(root) {
    const data = [];
    if (root != null) {
      data.push(root.data);
      data.push(...this.preOrder(root.left));
      data.push(...this.preOrder(root.right));
    }
    return data;
  }

  /**
   * Static method untuk mengembalikan array dari binary tree dengan penelusuran postorder.
   * Penelusuran postorder akan menelusuri child kiri dari binary tree, child kanan dari binary tree, kemudian node dari binary tree.
   * @example
   * root
   *     1
   *    / \
   *   2   3
   *  / \
   * 4   5
   * // returns [4, 5, 2, 3, 1]
   * BinaryTreeUtil.postOrder(root);
   * @param {TreeNode} root - Node binary tree yang akan ditelusuri.
   * @returns {Array} - Mengembalikan data pada tree dalam bentuk array dengan urutan penelusuran postorder.
   */
  static postOrder(root) {
    const data = [];
    if (root != null) {
      data.push(...this.postOrder(root.left));
      data.push(...this.postOrder(root.right));
      data.push(root.data);
    }
    return data;
  }

  /**
   * Static method untuk mencari data pada binary tree, dengan nilai pencarian yang sudah ditentukan.
   * Mengembalikan data pada binary tree berdasarkan nilai pencarian jika ditemukan, atau null.
   * Pencarian dilakukan dengan membandingkan data setiap node pada binary tree dengan nilai pencarian.
   * Pencarian dilakukan secara rekursif untuk setiap node pada binary tree.
   * @example
   * root
   *     9
   *    / \
   *   1   8
   *  / \
   * 2   7
   * // returns 8
   * BinaryTreeUtil.search(root, 8);
   * @example
   * // returns null
   * BinaryTreeUtil.search(root, 10);
   * @param {TreeNode} root - Node binary tree yang akan dikenakan pencarian.
   * @param {*} data - Target pencarian.
   * @returns {*|null} - Mengembalikan data pada node berdasarkan pencarian jika ditemukan, atau null.
   */
  static search(root, data) {
    if (root == null) {
      return null;
    }
    if (root.data === data) {
      return root.data;
    }
    const dataLeftChild = this.search(root.left, data);
    if (dataLeftChild) {
      return dataLeftChild;
    }

    return this.search(root.right, data);
  }

  /**
   * Static method untuk menghitung jumlah node pada binary tree secara rekursif.
   * @example
   * root
   *      3
   *    /   \
   *   5     6
   *  / \   /
   * 2   7 1
   * // returns 6
   * BinaryTreeUtil.count(root);
   * @param {TreeNode} root - Node binary tree yang akan dihitung jumlah node nya.
   * @returns {Number} - Mengembalikan jumlah node pada binary tree.
   */
  static count(root) {
    if (root == null) {
      return 0;
    }
    return 1 + this.count(root.left) + this.count(root.right);
  }

  /**
   * Static method untuk mengambil list leaf dari binary tree.
   * Leaf dari binary tree adalah node dari binary tree yang tidak mempunyai children.
   * @example
   * root
   *      9
   *    /   \
   *   8     6
   *  / \   /
   * 3   7 1
   * // returns node 3, node 7, node 1.
   * BinaryTreeUtil.getLeaves(root);
   * @param {TreeNode} root - Node binary tree yang akan dicari leaf nya.
   * @returns {TreeNode[]} - Mengembalikan list leaf dari binary tree dalam bentuk array.
   */
  static getLeaves(root) {
    const leaveNodes = [];
    if (root != null) {
      if (!root.left && !root.right) {
        leaveNodes.push(root);
      }
      leaveNodes.push(...this.getLeaves(root.left));
      leaveNodes.push(...this.getLeaves(root.right));
    }
    return leaveNodes;
  }

  /**
   * Static method untuk mengambil list subtree dari binary tree.
   * Subtree dari binary tree adalah semua keturunan dari root pada binary tree.
   * @example
   * root
   *      9
   *    /   \
   *   8     6
   *  / \   /
   * 3   7 1
   * // returns node 8, node 3, node 7, node 6, node 1.
   * BinaryTreeUtil.getSubTrees(root);
   * @param {TreeNode} root - Node binary tree yang akan dicari subtree nya.
   * @returns {TreeNode[]} - Mengembalikan list subtree dari binary tree dalam bentuk array.
   */
  static getSubTrees(root) {
    const subTrees = [];
    if (root != null) {
      if (root.left) {
        subTrees.push(root.left);
      }
      if (root.right) {
        subTrees.push(root.right);
      }
      subTrees.push(...this.getSubTrees(root.left));
      subTrees.push(...this.getSubTrees(root.right));
    }
    return subTrees;
  }
}

// Membuat binary tree sebagai berikut:
//        9
//      /   \
//     1     8
//    / \   / \
//   4   2 6   4
//  / \
// 7   3
const root = new TreeNode(9);
root.insert(1);
root.insert(8);
root.insert(4);
root.insert(2);
root.insert(6);
root.insert(4);
root.insert(7);
root.insert(3);
// > BinaryTreeUtil.inOrder(root);
// [7, 4, 3, 1, 2, 9, 6, 8, 4]
// > BinaryTreeUtil.preOrder(root);
// [9, 1, 4, 7, 3, 2, 8, 6, 4]
// > BinaryTreeUtil.postOrder(root);
// [7, 3, 4, 2, 1, 6, 4, 8, 9]
const newRoot = new TreeNode(4);
newRoot.insert(2);
newRoot.insert(10);
newRoot.insert(17);
console.log(BinaryTreeUtil.inOrder(newRoot)); // [17, 2, 4, 10]
console.log(BinaryTreeUtil.preOrder(newRoot)); // [4, 2, 17, 10]
console.log(BinaryTreeUtil.postOrder(newRoot)); // [17, 2, 10, 4]

// Membuat binary tree sebagai berikut:
//       7
//      / \
//     1   4
//    /
//   9
const bTree = new TreeNode(7);
bTree.insert(1);
bTree.insert(4);
bTree.insert(9);
console.log(BinaryTreeUtil.search(bTree, 7)); // 7
console.log(BinaryTreeUtil.search(bTree, 2)); // null
console.log(BinaryTreeUtil.count(bTree)); // 4
console.log(BinaryTreeUtil.getLeaves(bTree).map((treeNode) => treeNode.data)); // [9, 4]
console.log(BinaryTreeUtil.getSubTrees(bTree).map((treeNode) => treeNode.data)); // [1, 4, 9]

// Membuat binary tree sebagai berikut:
//        4
//      /   \
//     1     9
//    / \   / \
//   8   3 7   6
//  / \
// 2   5

const bTreeTest = new TreeNode(4);
bTreeTest.insert(1);
bTreeTest.insert(9);
bTreeTest.insert(8);
bTreeTest.insert(3);
bTreeTest.insert(7);
bTreeTest.insert(6);
bTreeTest.insert(2);
bTreeTest.insert(5);
// > BinaryTreeUtil.search(bTreeTest, 9);
// 9
// > BinaryTreeUtil.search(bTreeTest, 5);
// 5
// > BinaryTreeUtil.search(bTreeTest, 7);
// 7
// > BinaryTreeUtil.search(bTreeTest, 6);
// 6
// > BinaryTreeUtil.search(bTreeTest, 10);
// null
// > BinaryTreeUtil.count(bTreeTest);
// 9
// > BinaryTreeUtil.getLeaves(bTreeTest).length;
// 5
// > BinaryTreeUtil.getLeaves(bTreeTest).map((nodeTree) => nodeTree.data);
// [2, 5, 3, 7, 6]
// > BinaryTreeUtil.getSubTrees(bTreeTest).length;
// 8
// > BinaryTreeUtil.getSubTrees(bTreeTest).map((nodeTree) => nodeTree.data);
// [1, 9, 8, 3, 2, 5, 7, 6]
