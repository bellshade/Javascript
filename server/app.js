const express = require("express");
const path = require("path");

const markdownParser = require("./utils/markdownParser");
const { ROOT, requiredStatic, statics } = require("./config/constant");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

requiredStatic.forEach((data) =>
  app.use(data.prefix, express.static(data.path))
);

app.get("*", (req, res) => {
  if (req.originalUrl === "/") {
    const md = markdownParser(path.join(ROOT, "README.md")).replace(
      "CONTRIBUTING.md",
      "https://github.com/bellshade/Javascript/blob/main/CONTRIBUTING.md"
    );

    res.render("root", { md, dirs: statics });
  } else {
    res.status(404).send("NOT FOUND");
  }
});

app.listen(3000, () =>
  console.log("Listening on PORT 3000 | http://localhost:3000/")
);
