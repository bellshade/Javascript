/*eslint-disable detect-non-literal-fs-filename */

const fs = require("fs");
const path = require("path");

const { markdownParser } = require("../utils");

const html = (route) => {
  const md = markdownParser(path.join(route.url, "README.md"), route.url);

  const htmlFile = route.items.find(({ extension }) => extension === "html");
  const jsFile = route.items.find(({ extension }) => extension === "js");

  const htmlData = {
    ...htmlFile,
    iframeURL: `/static${htmlFile.url}`,
    content: fs.readFileSync(htmlFile.path)
  };
  const jsData = {
    ...jsFile,
    content: fs.readFileSync(jsFile.path)
  };

  return (req, reply) =>
    reply.view("runner/htmlViewer", {
      md,
      htmlFile: htmlData,
      jsFile: jsData
    });
};

module.exports = html;
