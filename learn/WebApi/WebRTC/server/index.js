const http = require("http");
const {
	WebSocketServer
} = require("ws");
const {
	readFile
} = require("fs");

const {join} = require("path")
const datachannel = join(__dirname, "../client/datachannel.html");
const videocall = join(__dirname, "../client/videocall.html");

// Utils function
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
		},
	];

	let id = "";
	for (let index = 0; index < length; index++) {
		id += state[Math.round(Math.random())]();
	}
	return id;
}
///////////

// Setup http server
const server = http.createServer((req, res) => {
	if (req.method !== "GET") {
		res.writeHead(404).end();
		return;
	}
	if (req.url === "/data") {
		readFile(datachannel, (err, data) => {
			if (err) {
				console.log(err);
				res.writeHead(500).end();
				return;
			}
			res.writeHead(200, {
				"Content-Type": "text/html",
			});
			res.end(data);
		});
		return;
	}

	if (req.url === "/video") {
		readFile(videocall, (err, data) => {
			if (err) {
				console.log(err);
				res.writeHead(500).end();
				return;
			}
			res.writeHead(200, {
				"Content-Type": "text/html",
			});
			res.end(data);
		});
		return;
	}

	res.writeHead(400).end("Error page not found");
});
///////


// Setup websocket server
const WsServer = new WebSocketServer({
	server
});

// Buat objek userList untuk menyimpan socket client berdasarkan dengan idnya
WsServer.userList = {};
/*
 * 
 * */
function sendEvent(socket, type = "", data = {}) {
	socket.send(
		JSON.stringify({
			type,
			...data,
		})
	);
}

/*
 * Fungsi untuk tipe paket exchange, menerima data dan meneruskannya ke tujuan menyertakan siapa pangirimnya
 * @param {WebSocketServer.socket} socket
 * @param {object} data
 * */
function exchange(socket, data) {
	// Cek apakah user tujuan ada
	if (!WsServer.userList[data.to]) {
		// Kalau tidak ada kita kirim event callConfirmed dengan accept false agar pengirim menghapus panggilan
		socket.send(JSON.stringify({
			type: "callConfirmed",
			from: data.to,
			accept: false
		}));
		return;
	}

	// Jika client tujuan ada maka kirimkan pesannya ke tujuan
	WsServer.userList[data.to].send(
		JSON.stringify({
			from: socket.id, // Jangan lupa beri tahu siapa yang mengirim, menghindari spoofing
			...data.msg,
		})
	);
}

WsServer.on("connection", (socket) => {
	socket.id = randomId(4); // Buat random id untuk setiap socket
	WsServer.userList[socket.id] = socket; // Simpan socket ke userlist berdasarkan id
	socket.send(JSON.stringify({ // Beritahu client id miliknya
		type: "init",
		id: socket.id,
	}));

	socket.on("message", (msg) => { // Event ketika ada message datang
		// Parse json
		Promise.resolve(JSON.parse(msg.toString())).then((data) => { // Mencegah agar aplikasi tidak stop ketika gagal parse json
			if (data.type === "exchange") { // Cek jika type dari pesan adalah exchange 
				exchange(socket, data); // Maka jalankan fungsi exchange
			}
		});
	});
});

server.listen(8080, () => {
	console.log("Listening Websocket and http at port " + 8080);
});
