const path = require("path");
const dirTree = require("directory-tree");

const { ROOT } = require("../config/constant");

const scanner = (directory) => {
  const readDir = path.join(ROOT, directory);

  const result = dirTree(readDir, {
    attributes: ["type", "extension"],
    extensions: /\.(js|html)$/,
    normalizePath: true // convert \ to /
  });

  return result;
};

module.exports = scanner;
