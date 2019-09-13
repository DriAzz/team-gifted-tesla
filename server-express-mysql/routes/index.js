var express = require("express");
var router = express.Router();
const mysql = require('mysql');
const mysql2 = require('mysql2');
const app = express();
const myQuery = `SELECT * FROM motherboards`;
const cors = require('cors');
const models = require('../models');




/*

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

router.get('/motherboards', function (req, res, next) {
  models.motherboards.findAll({}).then(motherboardsFound => {
    res.render('motherboard', {
      motherboards: motherboardsFound
    });
  });
});

*/

//GET response for backend
/*
app.get('/express_backend', (req, res, next) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
*/
module.exports = router;