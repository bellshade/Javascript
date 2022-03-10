const fastify = require("fastify");
const path = require("path");

const autoLoad = require("fastify-autoload");

const app = fastify({ debug: false });
const port = require("../port.json").port;

app.register(autoLoad, {
  dir: path.join(__dirname, "plugins")
});

const start = async () => {
  await app.listen(port);
  console.log(`Listening on port ${port} | http://localhost:${port}/`);
};

start();
