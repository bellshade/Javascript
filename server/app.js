const express = require("express");
const path = require("path");

const controller = require("./controllers/main");
const { requiredStatic } = require("./config/constant");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

requiredStatic.forEach((data) =>
  app.use(data.prefix, express.static(data.path))
);

app.get("*", controller);

app.listen(3000, () =>
  console.log("Listening on PORT 3000 | http://localhost:3000/")
);
