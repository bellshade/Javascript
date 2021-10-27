const path = require("path");
const fs = require("fs");

const markdownParser = require("../utils/markdownParser");
const { ROOT } = require("../config/constant");

const whatIcon = (file) => {
  const extension = file.split(".")[1];

  switch (extension) {
    case "html":
      return "fab fa-html5";
    case "js":
      return "fab fa-js";
    case "md":
      return "fab fa-md";
  }
};

function commonFolder(req, res, originalURL) {
  const md = markdownParser(path.join(originalURL, "README.md"));

  const normalizeOriURL = path.normalize(originalURL);
  const items = fs
    .readdirSync(path.join(ROOT, normalizeOriURL))
    .filter((item) => item !== "README.md")
    .map((item) => ({
      name: item,
      type: !item.includes(".") ? "fas fa-folder" : whatIcon(item)
    }));

  res.render("common", { md, originalURL, items });
}

module.exports = commonFolder;
