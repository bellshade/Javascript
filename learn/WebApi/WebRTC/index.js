const http = require("http");
const { WebSocketServer } = require("ws");
const { readFile } = require("fs");

const server = http.createServer((req, res) => {
	if (req.method !== "GET" && req.url !== "/") {
		res.writeHead(404).end();
		return;
	}
	let codeDone = false;
	readFile("./view/index.html", (err, data) => {
		if (err) {
			console.log(err);
			res.writeHead(500).end();
			return;
		}
		if (!codeDone) {
			res.writeHead(200, {
				"Content-Type": "text/html",
			});
			codeDone = true;
		}
		res.end(data);
	});
});
const WsServer = new WebSocketServer({ server });

WsServer.userList = {};

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

function sendEvent(socket, type = "", data = {}) {
	socket.send(
		JSON.stringify({
			type,
			...data,
		})
	);
}

/*
 * @param {WebSocketServer.socket} socket
 * @param {object} data
 * */
function exchange(socket, data) {
	if (!WsServer.userList[data.to]) {
		return;
	}
	const to = data.to;
	delete data.to;
	WsServer.userList[to].send(
		JSON.stringify({
			from: socket.id,
			...data.msg,
		})
	);
}

WsServer.on("connection", (socket) => {
	socket.id = randomId(4);
	WsServer.userList[socket.id] = socket;
	sendEvent(socket, "init", {
		id: socket.id,
	});
	socket.on("message", (msg) => {
		let data = JSON.parse(msg.toString());
		if (data.type === "exchange") {
			exchange(socket, data);
		}
	});
});

server.listen(8080);
