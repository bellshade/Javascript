const path = require("path");
const fp = require("fastify-plugin");
const routingData = require("../config/routingData");

const { markdownParser, checker } = require("../utils");
const { statics } = require("../config/constant");

const handlerDecider = (route) => {
  const items = route.items;

  if (checker.notIncludedAnyFile(items)) {
    return (req, reply) => {
      const md = markdownParser(path.join(route.url, "README.md"), route.url);
      const upOneDir = path.posix.normalize(`${route.url}/..`);

      reply.view("common", {
        upOneDir,
        md,
        items: route.items,
        originalURL: route.url
      });
    };
  } else if (checker.includedHtml(items)) {
    return (req, reply) => {
      reply.view("runner/htmlViewer");
    };
  } else if (checker.someIsJs(items)) {
    return (req, reply) => {
      reply.send("runner/nodeViewer");
    };
  } else {
    return (req, reply) => reply.send("uu uu uu aa aa aa");
  }
};

module.exports = fp((fastify, opts, done) => {
  fastify.get("/", (req, reply) => {
    const md = markdownParser("README.md", "/");

    reply.view("root", { dirs: statics, md });
  });

  routingData.forEach((route) => {
    fastify.route({
      method: "GET",
      url: route.url,
      handler: handlerDecider(route)
    });
  });

  done();
});
