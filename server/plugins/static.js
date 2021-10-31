const fp = require("fastify-plugin");
const fastifyStatic = require("fastify-static");

const { requiredStatic } = require("../config/constant");

module.exports = fp((fastify, opts, done) => {
  requiredStatic.forEach((data, idx) => {
    fastify.register(fastifyStatic, {
      ...data,
      decorateReply: idx < 1
    });
  });

  done();
});
