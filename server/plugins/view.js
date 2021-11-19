const fp = require("fastify-plugin");
const path = require("path");

module.exports = fp((fastify, opts, done) => {
  fastify.register(require("point-of-view"), {
    engine: {
      ejs: require("ejs")
    },
    root: path.join(__dirname, "../views")
  });

  done();
});
