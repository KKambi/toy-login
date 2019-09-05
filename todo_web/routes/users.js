var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const { checkIdDuplication, addUserInfo } = require('../public/javascripts/server_join.js')

/* GET users listing. */
router.get('/join', function(req, res, next) {
  res.render('todo_join');
});

router.post('/create', function(req, res, next){
  try {
    checkIdDuplication(req.body.id)
  } catch (e) {
    next(createError(e))
  }
  addUserInfo(req.body)
  res.redirect('/login')
})

router.get('/login', function(req, res, next){
  res.render('todo_login')
})

module.exports = router;
