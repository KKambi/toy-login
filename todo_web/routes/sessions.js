/* import */
var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* constant variable */
const indexPath = "../"

/* api function */
const { checkIdDuplication, addUserInfo } = require('../public/javascripts/server_join.js')

router.get('/new', function(req, res, next) {
  res.render('todo_login');
});

router.post('/create', function(req, res, next){
  try {
    checkIdDuplication(req.body.id)
  } catch (e) {
    next(createError(e))
  }
  addUserInfo(req.body)
  res.redirect(indexPath)
})

module.exports = router;
