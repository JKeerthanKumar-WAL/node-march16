const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send(
    "<style>div{border: 4px solid green; background: lightseagreen; padding-left:5px;}h1{color:darkblue; text-align:center;}p{font-weight:bolder;}</style><div><h1>Welcome to Car Rental App</h1><p>1. To add car, go to 'localhost:3001/addcar'</p><p>2. To display car details, go to 'localhost:3001/showcar'</p><p>3. For login, go to 'localhost:3001/login'</p></div>"
  );
});
app.get("/addcar", (req, res) => {
  let completePath = path.join(__dirname, "addCar.html");
  res.sendFile(completePath);
});
app.get("/showcar", (req, res) => {
  let completePath = path.join(__dirname, "showCar.html");
  res.sendFile(completePath);
});
app.get("/login", (req, res) => {
  let completePath = path.join(__dirname, "login.html");
  res.sendFile(completePath);
});
app
  .post("/show", (req, res) => {
    console.log(req.body);
    if (req.body.username === "smith" && req.body.password === "abc") {
      res.send(
        `<style>div{background:lightseagreen; padding:5px;}h2{text-align:center; color: darkblue}</style><div><h2>You are logged in successfully</h2></div>`
      );
    } else {
      res.send(
        `<style>div{background:lightseagreen; padding:5px;}h2{text-align:center; color: darkblue}</style><div><h2>You are not logged in</h2></div>`
      );
    }
  })
  .listen(3001);
console.log("Running node on port 3001");
