const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = ["Buy", "Cook", "Eat"];

app.get("/", function(req, res) {
  res.redirect("/login");
});

app.get("/login", function(req, res) {
  const day = date.getDate();
  res.render("login", { listTitle: day });
});

app.post("/", function(req, res) {
  res.redirect("/todo");
});

app.get("/todo", function(req, res) {
  const day = date.getDay();
  res.render("todo", { listTitle: day, newListItems: items });
});

app.post("/", function(req, res) {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("todo");
});

const port = 3333;
app.listen(port, function(req, res) {
  console.log(`Server started on port ${port}`);
});
