var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/join', function(req, res, next) {
  res.render('todo_join');
});

router.get('/login', function(req, res, next){
  res.render('todo_login')
})

module.exports = router;
