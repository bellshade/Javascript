const { WebSocketServer } = require("ws");

const { readFileSync } = require("fs");
const http = require("http");
const { resolve, join } = require("path");

const baseAsset = join(__dirname, "../", "client");

let PORT = process.env.PORT || 8080;
const _ID_LENGTH_ = 16;

//UTIL FUNCTION
function randRange(min, max) {
  return Math.random() * (max - min) + min;
}

function randomId(length) {
  const state = [
    () => {
      return String.fromCharCode(randRange(97, 122));
    },
    () => {
      return String.fromCharCode(randRange(65, 90));
    }
  ];

  let id = "";
  for (let index = 0; index < length; index++) {
    id += state[Math.round(Math.random())]();
  }
  return id;
}

//////////////

// CEK KALO ADA PARAMETER BUAT PORT ( BIAR ENAK AJA BISA SETING PORT LEWAT COMMAND LINE )
for (let index = 1; index < process.argv.length; index++) {
  if (process.argv[index - 1] === "-wp") {
    PORT = process.argv[index];
  } else if (process.argv[index - 1] === "-p") {
    PORT = process.argv[index];
  }
}

// SERVER UNTUK TUJUAN KESEDERHANAAN; BISA DIGANTI DENGAN EXPRESS SAMA AJA

const root = readFileSync("./client/index.html").toString();
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      res
        .writeHead(200, {
          "Content-Type": "text/html"
        })
        .end(root);
    } else if (req.url.startsWith("/asset")) {
      res.writeHead(200, {
        "Content-Type": "text/javascript"
      });
      const dir = join(baseAsset, resolve(req.url));
      res.write(readFileSync(dir));
      res.end();
    } else {
      res.writeHead(404).end();
    }
  }
});

server.listen(PORT);

const webSocketServer = new WebSocketServer({
  server // KITA PAKAI SERVER YANG SAMA ( PENGALAMAN PAKAI SERVICE SEPERTI HEROKU HANYA MENYEDIAKAN 1 PORT )
});

webSocketServer.userList = {};

webSocketServer.on("listening", () =>
  console.log("WS listening to port " + PORT)
);

const packetHandler = {
  call: ({ id, sdp }, socket) => {
    if (webSocketServer.userList[id]) {
      webSocketServer.userList[id].send(
        JSON.stringify({
          type: "call",
          id: socket.id,
          sdp
        })
      );
    }
  },
  setRemote: ({ id, sdp }, socket) => {
    if (webSocketServer.userList[id]) {
      webSocketServer.userList[id].send(
        JSON.stringify({
          type: "setRemote",
          id: socket.id,
          sdp
        })
      );
    }
  },
  startCall: ({ id }, socket) => {
    if (webSocketServer.userList[id]) {
      socket.send(
        JSON.stringify({
          type: "answer",
          id
        })
      );
      return;
    }

    socket.send(
      JSON.stringify({
        type: "delPeer",
        id: id
      })
    );
  },
  newIce: (msg, socket) => {
    webSocketServer.userList[msg.id].send(
      JSON.stringify({
        type: "newIce",
        id: socket.id,
        candidate: msg.candidate
      })
    );
  }
};

//CEK KALO ADA KONEKSI
webSocketServer.on("connection", (socket) => {
  socket.id = randomId(_ID_LENGTH_); // KASIH SETIAP SOCKET SEBUAH RANDOM ID
  //KIRIM IDNYA KE CLIENT BUAT DI SHARE
  socket.send(
    JSON.stringify({
      type: "applyId",
      id: socket.id
    })
  );

  //SIMPEN SOCKET KE OBJECT BUAT DIAKSES NANTI MISAL DIPANGGIL SAMA ORANG
  webSocketServer.userList[socket.id] = socket;
  socket.on("message", (data) => {
    //KALO ADA MESSAGE

    const message = JSON.parse(data.toString()); //UBAH DATANYA JADI STRING

    //MENCARI FUNGSI YANG DIBUTUHKAN SESUAI TIPE DARI PAKETNYA
    (packetHandler[message.type] || (() => {}))(message, socket);
  });
});
