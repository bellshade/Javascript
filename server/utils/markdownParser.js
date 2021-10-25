const fs = require("fs");
const commonmark = require("commonmark");

const Parser = (filePath) => {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();

  const markdown = fs.readFileSync(filePath, "utf8");

  const parsed = reader.parse(markdown);
  return writer.render(parsed);
};

module.exports = Parser;
