const fs = require("fs");
const path = require("path");

const { markdownParser } = require("../utils");

const node = (route) => {
  const md = markdownParser(path.join(route.url, "README.md"), route.url);

  const items = route.items.map((item) => {
    const content = fs.readFileSync(item.path, "utf8");
    const rename = item.name.replace(`.${item.extension}`);

    return Object.assign(item, { content, rename });
  });

  return (req, reply) => {
    reply.view("runner/nodeViewer", { md, items });
  };
};

module.exports = node;
