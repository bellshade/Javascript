const fs = require("fs");
const path = require("path");
const commonmark = require("commonmark");

const { ROOT } = require("../config/constant");

const Parser = (readmePath) => {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();

  const fullPath = path.join(ROOT, readmePath);

  const markdown = fs.readFileSync(fullPath, "utf8");

  const parsed = reader.parse(markdown);
  return writer.render(parsed);
};

module.exports = Parser;
