/*eslint-disable security/detect-child-process */

const EventEmitter = require("events");
const { spawn } = require("child_process");

const routingData = require("../config/routingData");

class SocketEmitter extends EventEmitter {}
const socketController = new SocketEmitter();

const asyncHandler = (socket, file) => () => {
  const child = spawn("node", [file.path]);

  child.on("error", err =>
    socket.emit("child:error", { error: true, message: err })
  );

  child.stdout.on("data", message => socket.emit("child:stdout", { message }));

  child.stderr.on("data", message => socket.emit("child:stderr", { message }));

  child.on("close", code => socket.emit("child:close", { code }));
};

socketController.on("file:run", (socket, { url, name }) => {
  setImmediate(() => {
    const folder = routingData.find(route => route.url === url);
    const file = folder?.items.find(file => file.name === name);

    if (folder && file) {
      if (file.type === "file" && file.extension === "js") {
        setImmediate(asyncHandler(socket, file));
      } else {
        socket.emit("file:error", {
          error: true,
          message: "Invalid file type"
        });
      }
    } else {
      socket.emit("file:error", { error: true, message: "Huh ?" });
    }
  });
});

// Kesimpulan apa yang di emit
// file:error
// child:error
// child:stdout
// child:stderr
// child:close

module.exports = socketController;
