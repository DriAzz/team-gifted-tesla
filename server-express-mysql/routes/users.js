var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */


router.post('/signup', function (req, res, next) {
  models.users
    .findOrCreate({
      where: {
        Username: req.body.username
      },
      defaults: {
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Password: req.body.password
      }
    })
    .spread(function(result, created) {
      if(create) {
        res.send('User created successfully');
      } else {
        res.send('This user already exist');
      }
    });
});

module.exports = router;
