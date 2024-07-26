var express = require('express');
const {join} = require("node:path");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let date = new Date();
  res.render('index', { nextDate: date.toDateString() });
});

router.get('/info', function(req, res, next) {
  res.render('info');
})
router.get('/umfrage', function(req, res, next) {
  res.render('umfrage');
})

module.exports = router;
