const path = require("path");
const fp = require("fastify-plugin");
const treeToList = require("tree-to-list");

const { directoryScanner } = require("../utils");

const toPOSIX = (str) => str.split(path.sep).join(path.posix.sep);

const { statics, ROOT } = require("../config/constant");
const dirs = statics.map(directoryScanner);
const list = treeToList(dirs, "children");

const isParents = (url) => statics.map((s) => `/${s}`).some((s) => s === url);

const rootPOSIX = toPOSIX(ROOT);

function parentHandler(data, filter) {
  const directoryApproach = data
    .filter(
      (val) =>
        val.url !== filter.url &&
        val.url.includes(filter.url) &&
        val.type === "directory"
    )
    .filter(({ url }) => url.split("/").filter((d) => d !== "").length === 2);

  if (directoryApproach.length > 0) {
    return directoryApproach;
  }

  const fileApproach = data.filter(
    ({ url }) => url !== filter.url && url.includes(filter.url)
  );

  return fileApproach;
}

const data = list
  .map((d) => ({ ...d, url: d.path.replace(rootPOSIX, "/") }))
  .map((d) =>
    d.extension ? { ...d, extension: d.extension.replace(".", "") } : d
  );
const filteredDir = data.filter(({ type }) => type === "directory");
const rearrange = [...filteredDir].map((filter) => {
  const items = isParents(filter.url)
    ? parentHandler(data, filter)
    : data.filter(({ url }) => url !== filter.url && url.includes(filter.url));

  return { ...filter, items };
});

// console.log(rearrange);
// require("fs").writeFileSync("./data.json", JSON.stringify(rearrange, null, 2));

module.exports = fp((fastify, opts, done) => {
  // fastify.get("/", (req, reply) => {
  //   reply.view("root");
  // });

  done();
});
