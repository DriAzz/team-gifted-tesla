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
  console.log("Database Connected!");
});

//GET response for backend
app.get('/express_backend', (req, res, next) => {
  const motherboardQuery = `SELECT * FROM motherboards`;
  connection.query(motherboardQuery, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
  res.send({ express: 'HI IM WORKING' });
});

module.exports = router;
