var express = require("express");
var router = express.Router();
const mysql = require('mysql');
const port = process.env.PORT || 5000;
const app = express();
const myQuery = `SELECT * FROM motherboards`;
const cors = require('cors');

//Console.log that server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password1!",
  database: "products"
});

connection.connect(function (err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("Database Connected!!");
});

app.get('/', (req, res, ) => {
  res.send('Go to /products to see products');
});

app.get('/products/add', (req, res) => {
  const { motherboardName, motherboardPrice } = req.query;
  console.log(motherboardName, motherboardPrice);
  const insertProduct =
    `
  INSERT INTO motherboards (motherboardName, motherboardPrice)
  VALUES('${motherboardName}', ${motherboardPrice})
  `;
  connection.query(insertProduct, (err, results) => {
    if(err) {
      return res.send(err)
    } else {
      return res.send('successfully added products')
    }
  })
});

app.get('/products', (req, res) => {
  connection.query(myQuery, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  });
});

//GET response for backend
/*
app.get('/express_backend', (req, res, next) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
*/
module.exports = router;