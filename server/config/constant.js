const path = require("path");

const ROOT = path.join(__dirname, "../../");
const NODE_MODULES = path.join(ROOT, "node_modules");

const statics = ["learn", "algorithm", "other"];
const assets = [
  "bootstrap",
  "github-markdown-css",
  "@fortawesome/fontawesome-free"
];

const remappedStatics = statics.map((static) => ({
  path: path.join(ROOT, static),
  prefix: `/static/${static}`
}));
const remappedAssets = assets.map((asset) => ({
  path: path.join(NODE_MODULES, asset),
  prefix: `/assets/${asset}`
}));

module.exports = {
  ROOT,
  requiredStatic: remappedStatics.concat(remappedAssets),
  statics,
  assets
};
