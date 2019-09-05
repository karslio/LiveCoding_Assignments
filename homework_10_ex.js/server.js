const express = require("express");
const bodyParser = require("body-parser");
const { calculator } = require("./helper");
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Appp listening on port ${port}!`));
app.use(bodyParser.json());

// 1--------------------------------------------------------------------------------------------------------------------
// Create an Express server that has all routes described below.
// /calculator/num1/num2/operator route(GET) that works with these operators: +, -, *, /, %(percentage)
// Example: /calculator/20/10/% returns %10

app.get("/calculator/:num1/:num2/:operator", (req, res) => {
  let { num1, num2, operator } = req.params;
  console.log(res.params);
  res.send({ data: calculator(num1, num2, operator) });
});

// /todo route that makes possible to add new todo with POST, get all todos with GET, delete a todo with DELETE method.
var todos = ["oguzhan", "karslii"];
app.get("/todo", function(req, res) {
  res.send(todos);
});

app.post("/todo", (req, res) => {
  console.log(req.body);
  todos.push(req.body.todo);
  res.send(todos);
});

app.delete("/todo/:todo", (req, res) => {
  let { todo } = req.params;
  console.log(todo);
  todos = todos.filter(x => x !== todo);
  res.send(todos);
});

// /future/hours route(GET) that adds given hours to the current datetime and returns result.

// app.get("/future/:hours", (req, res) => {
//   let futureDate = moment().add(req.params.hours, "hours");
  
//   console.log(futureDate);
//   res.send(req.params.hours);
// })


// /login route((POST) that checks if the given username and password is correct or not and will respond with appropriate status code.

// The correct credentials; username: admin, password:password.
// /report route(POST) that gets the example data below and creates a json file based on that report in the reports folder. The json file will have the name of customer.

// Example data:
// {
//   "customer": "X Company",
//   "budget": "$200",
//   "submitDate: "22-10-2019"
// }
// Example file: X Company.json
