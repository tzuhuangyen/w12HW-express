const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

//4.Define a GET route at /greet that accepts a query parameter 'name'

app.get("/greet", (req, res) => {
  const name = req.query.name || "Guest"; // Default to 'Guest' if no name provided
  res.send(`Hello, ${name}!`);
});

//middleware
// Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, "public")));
app.use("/static", express.static("public"));
//2.Create Basic Routes
// app.get("/", (req, res) => {
//   res.send("Welcome to my Express.js server!");
// });
//3.Serve Static Files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//2.Create Basic Routes

app.get("/about", (req, res) => {
  res.send("About Yen");
});

app.listen(port, () => {
  console.log(`Exercise of Express app listening at http://localhost:${port}`);
});
