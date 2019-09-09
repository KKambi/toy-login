/* import */
var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* constant variable */
const { 
  INDEX_PATH, 
  SESSION_ID_VARIABLE_NAME,
  COOKIE_OPTIONS } = require('../utils/constant.js')

/* import module */
const Users = require('../models/Users.js')
const Sessions = require('../models/Sessions.js')
const { createUniqueId } = require('../utils/uuid_util.js')

// GET to join page
router.get('/new', function(req, res, next) {
  res.render('todo_join');
});

// POST for join
router.post('/create', function(req, res, next){
  //유저 생성
  Users.create(req.body)

  //세션 생성
  const uuid = createUniqueId()
  const id = req.body.id
  const name = req.body.name
  Sessions.create(uuid, id, name)
  
  //회원가입 후 자동로그인된 상태로 메인페이지로 이동
  res.cookie(SESSION_ID_VARIABLE_NAME, uuid, COOKIE_OPTIONS)
  res.redirect(INDEX_PATH)
})

module.exports = router;
