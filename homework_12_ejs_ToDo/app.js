//npm install  express-generator -g
//express --view=ejs
// npm install -g nodemon
//npm install

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
const port = 3333;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = ["Buy", "Cook", "Eat"];
var dataBase = [
  {
    fname: "oguz",
    email: "karslionl@gmail.com",
    password: "1234",
    items: []
  }
];

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  const day = date.getDate();
  res.render("login", { listTitle: day });
});

app.post("/login", (req, res) => {
  name = req.body.inputname;
  email = req.body.inputemail;
  password = req.body.inputpassword;
  if (
    name === dataBase[0].fname &&
    email === dataBase[0].email &&
    password === dataBase[0].password
  ) {
    res.redirect("/todo");
  } else {
    res.redirect("/login");
  }
});

app.get("/todo", (req, res) => {
  const day = date.getDate();
  res.render("todo", { listTitle: day, newListItems: items });
});

app.post("/todo", (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/todo");
});

app.listen(port, () => console.log(`Server started on port ${port}`));
