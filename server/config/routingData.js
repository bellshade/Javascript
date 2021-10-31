const path = require("path");
const treeToList = require("tree-to-list");

const { directoryScanner } = require("../utils");

// current separator to posix separator
const toPOSIX = (str) => str.split(path.sep).join(path.posix.sep);

const { statics, ROOT } = require("./constant");
const dirs = statics.map(directoryScanner);
const list = treeToList(dirs, "children");

// is parent directory
const isParent = (url) => statics.map((s) => `/${s}`).some((s) => s === url);

// convert to posix path separator
const rootPOSIX = toPOSIX(ROOT);

const commonFileFilter =
  (filter) =>
  ({ url }) => {
    // filter if url is child of filtered url
    const basicConstrain = url !== filter.url && url.includes(filter.url);

    // allow url length is n+1 of the filtered url
    const filterUrlLength =
      filter.url.split("/").filter((d) => d !== "").length + 1;
    const urlLength = url.split("/").filter((d) => d !== "").length;

    return basicConstrain && filterUrlLength === urlLength;
  };

function parentHandler(data, filter) {
  const directoryApproach = data
    .filter(
      // filter if url is child of filtered url and type is directory
      (val) =>
        val.url !== filter.url &&
        val.url.includes(filter.url) &&
        val.type === "directory"
    )
    // length of '/' is two
    .filter(({ url }) => url.split("/").filter((d) => d !== "").length === 2);

  if (directoryApproach.length > 0) {
    return directoryApproach;
  }

  // if data of directoryApproach isn't available
  return data.filter(commonFileFilter(filter));
}

const data = list
  .map((d) => ({ ...d, url: d.path.replace(rootPOSIX, "/") })) // add url property
  .map(
    // replace extension '.' to ''
    (d) => (d.extension ? { ...d, extension: d.extension.replace(".", "") } : d)
  );

// filter data 'type' is directory only
const filteredDir = data.filter(({ type }) => type === "directory");

// rearrange data
const rearrange = [...filteredDir].map((filter) => {
  const items = isParent(filter.url)
    ? parentHandler(data, filter)
    : data.filter(commonFileFilter(filter));

  return { ...filter, items };
});

// remove data if url included '/img'
const filteredRearrange = rearrange.filter(({ url }) => !url.includes("/img"));

module.exports = filteredRearrange;
