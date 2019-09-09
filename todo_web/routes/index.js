var express = require('express');
var router = express.Router();

/* import module */
const Sessions = require('../models/Sessions.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  let userName = "";
  let sessionExsitence = false;

  const sessionId = req.cookies.sessionId
  if (Sessions.isRegistered(sessionId) === true){
    userName = Sessions.getName(sessionId)
    sessionExsitence = true;
  }

  res.render('index', { existence: sessionExsitence, name: userName });
});

module.exports = router;
