/* import */
var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* constant variable */
const { INDEX_PATH, MIN_30_TO_MS } = require('../public/javascripts/constant.js')

/* api function */
const { addUser } = require('../public/javascripts/Model/Users.js')

// GET to join page
router.get('/new', function(req, res, next) {
  res.render('todo_join');
});

// POST for join
router.post('/create', function(req, res, next){
  addUser(req.body)
  res.redirect(INDEX_PATH)
})

module.exports = router;
