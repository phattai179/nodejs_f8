const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const hbs = require("express-handlebars");
const path = require("path");

// import { engine } from "express-handlebars";

// Template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// HTTP logger
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));

//Route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
