let express = require("express");
const { join } = require("node:path");
let router = express.Router();

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
});
router.post('/submit_form', (req, res) => {
  const name = req.body.teilnehmer;
  const value = req.body.montag;


  // Process the data
  console.log(`Name: ${name}`);
  console.log(value)
  console.log(req.body.dienstag)
  res.render('umfrage');




});

module.exports = router;
