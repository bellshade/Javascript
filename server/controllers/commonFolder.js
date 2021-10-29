const path = require("path");
const fs = require("fs");

const { markdownParser, checker } = require("../utils");
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
    case "json":
      return "fas fa-code";
    default:
      return "far fa-file";
  }
};

function commonFolder(req, res, originalURL) {
  const md = markdownParser(path.join(originalURL, "README.md"), originalURL);

  const normalizeOriURL = path.normalize(originalURL);
  const pathToRead = path.join(ROOT, normalizeOriURL);

  const items = fs
    .readdirSync(pathToRead)
    .filter((item) => item !== "README.md")
    .filter((item) => item !== "img")
    .map((item) => ({
      name: item,
      type: !item.includes(".") ? "fas fa-folder" : whatIcon(item)
    }));

  const upOneDir = path.normalize(`${normalizeOriURL}/..`);
  const commonData = { md, originalURL, items, upOneDir };

  if (checker.notIncludedAnyFile(items)) {
    res.render("common", commonData);
  } else if (checker.includedHtml(items)) {
    res.render("runner/htmlViewer");
  } else if (checker.someIsJs(items)) {
    res.render("runner/nodeViewer");
  } else {
    res.send("uu uu uu aa aa aa");
  }
}

module.exports = commonFolder;
