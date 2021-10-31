const path = require("path");
const { markdownParser } = require("../utils");

const common = (route) => {
  const md = markdownParser(path.join(route.url, "README.md"), route.url);
  const upOneDir = path.posix.normalize(`${route.url}/..`);

  return (req, reply) =>
    reply.view("common", {
      upOneDir,
      md,
      items: route.items,
      originalURL: route.url
    });
};

module.exports = common;
