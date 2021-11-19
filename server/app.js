const fastify = require("fastify");
const path = require("path");

const autoLoad = require("fastify-autoload");

const app = fastify({ debug: false });

app.register(autoLoad, {
  dir: path.join(__dirname, "plugins")
});

const start = async () => {
  await app.listen(3000);
  console.log("Listening on port 3000 | http://localhost:3000/");
};

start();
