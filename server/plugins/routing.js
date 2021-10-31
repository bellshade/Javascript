const fp = require("fastify-plugin");
const routingData = require("../config/routingData");

const { markdownParser } = require("../utils");
const { statics } = require("../config/constant");

module.exports = fp((fastify, opts, done) => {
  fastify.get("/", (req, reply) => {
    const md = markdownParser("README.md", "/");

    reply.view("root", { dirs: statics, md });
  });

  done();
});
