const fs = require("fs");
const path = require("path");
const commonmark = require("commonmark");

const { ROOT } = require("../config/constant");

const imageSrcRegex = new RegExp('img src="(?!http(s?))', "g");

const Parser = (readmePath, originalURL) => {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();

  const normalize = path.normalize(readmePath);
  const fullPath = path.join(ROOT, normalize);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const markdown = fs.readFileSync(fullPath, "utf8");

  const parsed = reader.parse(markdown);
  const result = writer.render(parsed);

  const replaceAll = result
    .replace(
      "CONTRIBUTING.md",
      "https://github.com/bellshade/Javascript/blob/main/CONTRIBUTING.md"
    )
    .replace(imageSrcRegex, `img src="${path.join("/static", originalURL)}/`);

  return replaceAll;
};

module.exports = Parser;
