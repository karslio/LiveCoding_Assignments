//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();
app.set("view engine", "ejs");
mongoose.set("useFindAndModify", false);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://karslio:test123@cluster0-onaqv.mongodb.net/restapiDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

const User = mongoose.model("User", { username: String, password: String });

const PostSchema = {
  content: String,
  createdAt: String,
  likes: { type: Number, default: 0 },
  user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" }
};

const Post = mongoose.model("Post", PostSchema);

// User routes

app.post("/register", (req, res) => {
  let { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send();
  }

  const user = new User({ username, password });

  user.save().then(saveUser => {
    res.send(saveUser);
  });
});

const user1 = new User({ username: "u1", password: 123 });
const user2 = new User({ username: "u2", password: 456 });
const user3 = new User({ username: "u3", password: 789 });

const defaultsUsers = [user1, user2, user3];

app.get("/", function(req, res) {
  User.find({}, function(err, foundUsers) {
    if (foundUsers.length === 0) {
      User.insertMany(defaultsUsers, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Succesfully saved defaultItems to todolistDB ");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: foundUsers });
    }
  });
});

app.post("/login", (req, res) => {});

// const item1 = new Item({ name: "Welcome to your todoList!" });
// const item2 = new Item({ name: "hit the + button to aff a new item" });
// const item3 = new Item({ name: "<-- Hit this to delete an item." });

// const defaultsItems = [item1, item2, item3];

// const listSchema = {
//   name: String,
//   items: [itemsSchema]
// };

// const List = mongoose.model("List", listSchema);

// app.get("/", function(req, res) {
//   Item.find({}, function(err, foundItems) {
//     if (foundItems.length === 0) {
//       Item.insertMany(defaultsItems, function(err) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("Succesfully saved defaultItems to todolistDB ");
//         }
//       });
//       res.redirect("/");
//     } else {
//       res.render("list", { listTitle: "Today", newListItems: foundItems });
//     }
//   });
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started Succesfully");
});
