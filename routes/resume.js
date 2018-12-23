var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('resume', { title: '赵海龙 - 前端开发' });
});

module.exports = router;
