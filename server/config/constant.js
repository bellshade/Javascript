const path = require("path");
const fs = require("fs");

// path configuration
const ROOT = path.join(__dirname, "../../");
const NODE_MODULES = path.join(ROOT, "node_modules");
const SEPARATOR = path.sep !== "/" ? "\\/" : "/";

// folder configuration
const statics = ["learn", "algorithm", "other"];
const assets = [
  "bootstrap",
  "github-markdown-css",
  "@fortawesome/fontawesome-free"
];

// map all folder configuration to array of object
const remappedStatics = statics.map((static) => ({
  path: path.join(ROOT, static),
  prefix: `/static/${static}`
}));
const remappedAssets = assets.map((asset) => ({
  path: path.join(NODE_MODULES, asset),
  prefix: `/assets/${asset}`
}));
const public = {
  path: path.join(ROOT, "server/public"),
  prefix: "/public"
};

// Regular Expression
const mappedRegex = statics.map(
  (static) => new RegExp(`${SEPARATOR}${static}(${SEPARATOR}*?)`)
);
const regexROOT = new RegExp(`${ROOT}(${SEPARATOR}?)`); // prevent traversal outside root
const commonReplacer = new RegExp(`${SEPARATOR}`, "g");

module.exports = {
  ROOT,
  preventOutsideRootTraversal: (url) => {
    if (!regexROOT.test(path.join(ROOT, url))) {
      throw new Error("That's evil bro");
    }
  },
  requiredStatic: [...remappedAssets, ...remappedStatics, public],
  statics,
  assets,
  commonRegex: (url) => {
    const validRegex = mappedRegex.some((reg) => reg.test(url));

    const normalizeURL = path.normalize(url);
    const pathToThing = path.join(ROOT, normalizeURL);

    const isThingExists = fs.existsSync(pathToThing);

    const excluded =
      !normalizeURL.includes(".") && !normalizeURL.includes("img");

    return validRegex && isThingExists && excluded;
  }
};
