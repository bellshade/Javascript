const fp = require("fastify-plugin");
const routingData = require("../config/routingData");

const { markdownParser, checker } = require("../utils");
const { statics } = require("../config/constant");

const controllers = require("../controllers");

const handlerDecider = (route) => {
  const items = route.items;

  if (checker.notIncludedAnyFile(items)) {
    return controllers.common(route);
  } else if (checker.includedHtml(items)) {
    return controllers.html(route);
  } else if (checker.someIsJs(items)) {
    return controllers.node(route);
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

    fastify.route({
      method: "GET",
      url: `${route.url}/`,
      handler: (req, reply) => reply.code(301).redirect(route.url)
    });
  });

  done();
});
