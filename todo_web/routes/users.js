var express = require('express');
var router = express.Router();
// let bodyParser = require('body-parser')

/* GET users listing. */
router.get('/join', function(req, res, next) {
  res.render('todo_join');
});

router.post('/create', function(req, res, next){
  console.log(req.body)
  res.redirect('/login')
})

router.get('/login', function(req, res, next){
  res.render('todo_login')
})

module.exports = router;
