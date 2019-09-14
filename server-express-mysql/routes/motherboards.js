var express = require('express');
var router = express.Router();
const mysql2 = require("mysql2");
const app = express();
const models = require("../models");
myQuery_motherboard = `SELECT * FROM motherboards WHERE id < 5`

connection = mysql2.connect({
    host: "mission.cgabyflorimt.us-east-2.rds.amazonaws.com",
    user: 'admin1234',
    password: 'tesla1234',
    database: 'missionassistance'
})

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/motherboard_list', function (req, res, next) {
    connection.query(myQuery_motherboard, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
})

router.get('/motherboard_list', function (req, res, next) {
    conn
})

module.exports = router;
