const path = require("path");

// path configuration
const ROOT = path.join(__dirname, "../../");
const NODE_MODULES = path.join(ROOT, "node_modules");

// folder configuration
const statics = ["learn", "algorithm"];
const assets = [
  "prismjs",
  "bootstrap",
  "github-markdown-css",
  "@fortawesome/fontawesome-free"
];

// map all folder configuration to array of object
const remappedStatics = statics.map(staticFolder => ({
  root: path.join(ROOT, staticFolder),
  prefix: `/static/${staticFolder}/`
}));
const remappedAssets = assets.map(asset => ({
  root: path.join(NODE_MODULES, asset),
  prefix: `/assets/${asset}/`
}));
const publicPath = {
  root: path.join(ROOT, "server/public"),
  prefix: "/public/"
};

module.exports = {
  ROOT,
  requiredStatic: [...remappedAssets, ...remappedStatics, publicPath],
  statics,
  assets
};
