var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

router.post('/calc', function(req, res, next) {
	res.json({result: req.num1 + req.num2});
	//res.json({result: req.body});
});

module.exports = router;
