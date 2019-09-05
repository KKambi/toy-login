/* import */
var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* constant variable */
const indexPath = "../"

/* api function */
const { addUser } = require('../public/javascripts/server_join.js')

router.get('/new', function(req, res, next) {
  res.render('todo_join');
});

router.post('/create', function(req, res, next){
  addUser(req.body)
  res.redirect(indexPath)
})

module.exports = router;
