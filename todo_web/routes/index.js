var express = require('express');
var router = express.Router();

/* constant variable */
const { INDEX_PATH, MIN_30_TO_MS } = require('../public/javascripts/constant.js')

/* import module */
const Sessions = require('../public/javascripts/Model/Sessions.js')

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
