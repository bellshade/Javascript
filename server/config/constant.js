const path = require("path");

// path configuration
const ROOT = path.join(__dirname, "../../");
const NODE_MODULES = path.join(ROOT, "node_modules");

// folder configuration
const statics = ["learn", "algorithm", "other"];
const assets = [
  "bootstrap",
  "github-markdown-css",
  "@fortawesome/fontawesome-free"
];

// map all folder configuration to array of object
const remappedStatics = statics.map((static) => ({
  root: path.join(ROOT, static),
  prefix: `/static/${static}/`
}));
const remappedAssets = assets.map((asset) => ({
  root: path.join(NODE_MODULES, asset),
  prefix: `/assets/${asset}/`
}));
const public = {
  root: path.join(ROOT, "server/public"),
  prefix: "/public/"
};

module.exports = {
  ROOT,
  requiredStatic: [...remappedAssets, ...remappedStatics, public],
  statics,
  assets
};
