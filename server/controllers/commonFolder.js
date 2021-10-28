const path = require("path");
const fs = require("fs");

const { markdownParser } = require("../utils");
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
  const md = markdownParser(path.join(originalURL, "README.md"), originalURL);

  const normalizeOriURL = path.normalize(originalURL);
  const items = fs
    .readdirSync(path.join(ROOT, normalizeOriURL))
    .filter((item) => item !== "README.md")
    .map((item) => ({
      name: item,
      type: !item.includes(".") ? "fas fa-folder" : whatIcon(item)
    }));

  const upOneDir = path.normalize(`${normalizeOriURL}/..`);

  res.render("common", { md, originalURL, items, upOneDir });
}

module.exports = commonFolder;
