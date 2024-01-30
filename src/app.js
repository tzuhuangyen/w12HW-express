const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 3000;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //   res.send("Welcome to my Express.js server!");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.send("About me");
});

app.get("/add/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const result = parseInt(num1) + parseInt(num2);
  res.send(`Total is ${result}`);
});

// app.post("/handleMesg", (req, res) => {
//   let { username, mesg } = req.body;
//   res.send(`Hello ${username}, your message is ${mesg}`);
// });

app.get("/handleMesg", (req, res) => {
  let { username, mesg } = req.query;
  res.send(`Hello ${username}, your message is ${mesg}`);
});

app.listen(port, () => {
  console.log(`Exercise of Express app listening at http://localhost:${port}`);
});
