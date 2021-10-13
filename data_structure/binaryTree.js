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
