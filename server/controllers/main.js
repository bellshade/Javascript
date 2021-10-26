const path = require("path");
const fs = require("fs");

const markdownParser = require("../utils/markdownParser");
const { ROOT, commonRegex, statics } = require("../config/constant");

const commonFolder = require("./commonFolder");

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

module.exports = main;
