const fastify = require("fastify");
const path = require("path");

const fastifyStatic = require("fastify-static");

// const controller = require("./controllers/main");
const { requiredStatic } = require("./config/constant");

const app = fastify({ debug: false });

app.register(require("point-of-view"), {
  engine: {
    ejs: require("ejs")
  },
  root: path.join(__dirname, "views")
});

requiredStatic.forEach((data, idx) => {
  app.register(fastifyStatic, {
    ...data,
    decorateReply: idx < 1
  });
});

const start = async () => {
  try {
    await app.listen(3000);
    console.log("Listening on port 3000 | http://localhost:3000/");
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

start();
