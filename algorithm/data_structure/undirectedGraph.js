/* 
== PENJELASAN GRAPH ==
    Graph adalah adalah kumpulan node/vertex yang terhubung satu sama lain. Ada dua tipe graph yaitu undirected / directed graph. Misalkan ada 2 node yang saling terhubung yaitu rumah Budi dan rumah Dono, keterhubungan ini dapat digambarkan dengan graph. Dalam undirected graph arah dari suatu node/vertex tidaklah penting, misalnya rumah Budi dan Dono adalah tetangga, maka araha menjadi tidak penting karena dari sudut pandang Budi maupun Dono mereka adalah tetangga. Sedangkan dalam directed graph maka arah menjadi penting, misal rumah Budi menghadap rumah Dono, belum tentu rumah Dono menghadap rumah Budi bisa saja rumah Dono menghadap rumah orang lain, nah karena arah ya penting maka diperlukan arah untuk setap node/vertexnya. Dalam kode ini saya hanya membuat untuk undirected / tanpa arah saja.


==ISTILAH==
    1. Node/vertex/object adalah suatu entitas/unit yang tergabung dalam suatu graph. Jika mengacu pada penjelasan diatas maka Node/vertex/object adalah rumah Budi dan Dono. Dalam banyak literatur lebih sering disebut node atau vertex.

    2. Adjacent/Adj yang artinya ketetanggaan / berdekatan. Adjacent menggambarkan siapa saja yang menjadi tetangga atau yang terhubung dengan node/vertex yang bersangkutan.

    3. Edge/link adalah koneksi antara dua node. Dalam visualisasi graph edge biasanya digambarkan sebagai garis yang menghubungkan kedua node yang menandakan bahwa kedua node yang terhubung oleh edge  adalah tetangga / adjacent.

==FUNGSI UTAMA==
    1. addVertex, digunakan untuk menambah vertex baru pada graph.
    2. AddEdge, digunakan untuk menghubungkan antara dua vertex.
    3. removeVertex, menghapus vertex pada graph.
*/

class Graph {
  constructor() {
    // this.adjList digunakan sebagai variable untuk menyimpan kumpulan vertex yang akan dibuat.

    // Saya menggunakan fungsi Map() agar lebih mudah dalam implementasinya. Map dalam javascript memiliki 'key' dan 'value'. Key digunakan untuk menyimpan vertex dan value digunakan sebagai adjacent dalam vertex pada key. Jika belum paham konsep map pada Js lebih disarankan jika pembaca memahami Map pada javascript terlebih dahulu agar dapat memahami kode secara lebih baik.
    this.adjList = new Map();
  }

  // fungsi ini dipanggil untuk membuat vertex baru. vertex yang baru dibuat tidak memiliki tetangga karena itu value di isi dengan array kosong. Menggunakan array sebagai value karena adjacent pada vertex bisa lebih dari satu.
  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  //fungsi ini digunakan unuk menhubungkan antara dua vertex
  addEdge(source, destination) {
    this.adjList.get(source).push(destination);
    this.adjList.get(destination).push(source);
  }

  removeVertex(vertex) {
    // untuk mendapatkan semua tetangga dari vertex yang ingin dihapus
    let neighbourList = this.adjList.get(vertex);

    // Untuk menghapus vertex, harus diperhatikan juga bahwa dalam undirected graph jika A->B maka berlaku juga B->A. Oleh sebab itu kita harus menghapus terlebih dahulu hubungan antara A dan B. Jika tidak, maka hubungan B->A masih ada walupun vertex A sudah dihapus.

    for (let neighbour of neighbourList) {
      let adjacencyListOfNeighbour = this.adjList.get(neighbour);
      let index = adjacencyListOfNeighbour.indexOf(vertex);
      adjacencyListOfNeighbour.splice(index, 1);
    }
    this.adjList.delete(vertex);
  }

  printGraph() {
    let vertices = this.adjList.keys();

    for (let vertex of vertices) {
      let neighbourList = this.adjList.get(vertex);

      let conc = "";

      for (let neighbour of neighbourList) {
        conc += neighbour + "";
      }
      console.log(vertex + " -> " + conc);
    }
  }
}

var g = new Graph();
var vertices = ["A", "B", "C", "D", "E", "F"];

// Menambkan setiap elemen kedalam graph
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// Mengubungkan vertex
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

// prints semua vertex / node dan tetangganya
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();
