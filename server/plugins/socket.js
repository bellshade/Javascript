const fp = require("fastify-plugin");
const { socket: socketController } = require("../controllers");

module.exports = fp((fastify, opts, done) => {
  fastify.register(require("fastify-socket.io")).after(() => {
    fastify.io.on("connection", (socket) => {
      socket.on("file:run", (data) =>
        socketController.emit("file:run", socket, data)
      );
    });
  });

  done();
});
