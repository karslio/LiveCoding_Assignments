const express = require("express");
const bodyParser = require("body-parser");
const { calculator } = require("./calculator");
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(bodyParser.json());

// app.get("/", (req, res) => res.send("Hello World!"));

// app.post("/data", (req, res) => {
//   console.log(req.body);
//   let { num1, num2, operator } = req.body;

//   if (!num1 || !num2 || !operator) {
//     res.status(400).send({ msg: "Bad request" });
//   } else {
//     res.send({ data: calculator(num1, num2, operator) });
//   }
//   console.log(req.body);
//   res.send(req.body.hello);
// });



// Create an Express server that has all routes described below.
// /calculator/num1/num2/operator route(GET) that works with these operators: +, -, *, /, %(percentage)
// Example: /calculator/20/10/% returns %10

// app.get("/calculator/:num1/:num2/:operator", (req, res) => {
//   console.log(req.params);
//   let { num1, num2, operator } = req.params;
//   res.send({ data: calculator(num1, num2, operator) });
// });


// /todo route that makes possible to add new todo with POST, get all todos with GET, delete a todo with DELETE method.


app.get("/todo", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/todo", function(req, res) {
  num1 = parseFloat(req.body.num1);
  num2 = parseFloat(req.body.num2);
  
  res.send("your BMI is " + num1 + nunm2);
});