var express = require("express");
var router = express.Router();
const mysql = require('mysql');
const port = process.env.PORT || 5000;
const app = express();

//Console.log that server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Password1!",
  database: "products"
});

connection.connect(function(err) {
  if(err) {
    console.log(err.message);
    return;
  }
  console.log("Database Connected!!");
});

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

//GET response for backend
app.get('/express_backend', (req, res, next) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

module.exports = router;
