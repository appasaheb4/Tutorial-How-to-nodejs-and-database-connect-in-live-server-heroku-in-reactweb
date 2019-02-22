const express = require("express");
var cors = require("cors");
const path = require("path");
const mysql = require("mysql");
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true
  })
); // support encoded bodies

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());
// connection configurations
const connection = mysql.createConnection({
  host: "db4free.net",
  user: "tutorial",
  password: "developer",
  database: "tutorial"
});

// connect to database
connection.connect(function(err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

app.get("/", function(req, res) {
  return res.send({
    "hello"
  });
});

// Retrieve all todos
app.get("/api/getUser", function(req, res) {
  connection.query("SELECT * FROM tblUser", function(error, results, fields) {
    if (error) throw error;
    return res.send({
      data: results
    });
  });
});

app.post("/api/insertUsder", function(req, res) {
  var userEmail = req.body.email;
  var password = req.body.password;
  return res.send({
    data: userEmail + " and " + password
  });
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
