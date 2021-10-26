const path = require("path");
const fs = require("fs");

const markdownParser = require("../utils/markdownParser");
const { ROOT, commonRegex, statics } = require("../config/constant");

function main(req, res) {
  const originalURL = req.originalUrl;

  if (originalURL === "/") {
    const md = markdownParser("README.md").replace(
      "CONTRIBUTING.md",
      "https://github.com/bellshade/Javascript/blob/main/CONTRIBUTING.md"
    );

    res.render("root", { md, dirs: statics });
  } else if (commonRegex(originalURL)) {
    commonFolder(req, res, originalURL);
  } else {
    res.status(404).send("NOT FOUND");
  }
}

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
  const upOneDirectory = statics.includes(originalURL.replace("/"))
    ? `${originalURL}/..`
    : "..";

  const items = fs
    .readdirSync(path.join(ROOT, originalURL))
    .filter((item) => item !== "README.md")
    .map((item) => ({
      name: item,
      type: !item.includes(".") ? "fas fa-folder" : whatIcon(item)
    }));

  res.render("common", { md, originalURL, items, upOneDirectory });
}

module.exports = main;
