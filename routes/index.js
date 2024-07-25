var express = require('express');
const {join} = require("node:path");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { message: 'Hello World' });
});

router.get('/info', function(req, res, next) {
  res.render('info');
})

module.exports = router;
