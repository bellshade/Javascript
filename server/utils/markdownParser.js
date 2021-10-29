const fs = require("fs");
const path = require("path");
const marked = require("marked");

const { ROOT } = require("../config/constant");

// contoh yang valid: img src="img/ns1.jpg
const imageSrcRegex = new RegExp(`img src="(?!http(s?))`, "g");

const Parser = (readmePath, originalURL) => {
  const normalize = path.normalize(readmePath);
  const fullPath = path.join(ROOT, normalize);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const markdown = fs.readFileSync(fullPath, "utf8");

  const result = marked(markdown);

  const replaceAll = result
    // replace CONTRIBUTING.md untuk di arahkan ke github
    .replace(
      "CONTRIBUTING.md",
      "https://github.com/bellshade/Javascript/blob/main/CONTRIBUTING.md"
    )
    // replace semua yang valid menurut regex
    .replace(imageSrcRegex, `img src="${path.join("/static", originalURL)}/`);

  return replaceAll;
};

module.exports = Parser;
