const path = require("path");
const fp = require("fastify-plugin");
const routingData = require("../config/routingData");

const { markdownParser } = require("../utils");
const { statics } = require("../config/constant");

module.exports = fp((fastify, opts, done) => {
  fastify.get("/", (req, reply) => {
    const md = markdownParser("README.md", "/");

    reply.view("root", { dirs: statics, md });
  });

  routingData.forEach((route) => {
    fastify.route({
      method: "GET",
      url: route.url,
      handler: (req, reply) => {
        const md = markdownParser(path.join(route.url, "README.md"), route.url);
        const upOneDir = path.posix.normalize(`${route.url}/..`);

        reply.view("common", {
          upOneDir,
          md,
          items: route.items,
          originalURL: route.url
        });
      }
    });
  });

  done();
});
