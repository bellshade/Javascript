const path = require("path");

const { markdownParser } = require("../utils");
const { commonRegex, statics } = require("../config/constant");

const commonFolder = require("./commonFolder");

function main(req, res) {
  const originalURL = path.normalize(req.originalUrl);

  if (originalURL === "/") {
    const md = markdownParser("README.md", originalURL);

    res.render("root", { md, dirs: statics });
  } else if (commonRegex(originalURL)) {
    commonFolder(req, res, originalURL);
  } else {
    res.status(404).send("NOT FOUND");
  }
}

module.exports = main;
