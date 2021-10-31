const path = require("path");
const { markdownParser } = require("../utils");

const html = (route) => {
  const md = markdownParser(path.join(route.url, "README.md"), route.url);

  const htmlFile = route.items.find(({ extension }) => extension === "html");
  const jsFile = route.items.find(({ extension }) => extension === "js");

  return (req, reply) =>
    reply.view("runner/htmlViewer", {
      md,
      htmlFile: { ...htmlFile, iframeURL: `/static${htmlFile.url}` },
      jsFile
    });
};

module.exports = html;
