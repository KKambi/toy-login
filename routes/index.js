var express = require('express');
var router = express.Router();

/* import module */
const Sessions = require('../models/Sessions.js')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   let userName = "";
//   let sessionExsitence = false;

//   const sessionId = req.cookies.sessionId
//   if (Sessions.isRegistered(sessionId) === true){
//     userName = Sessions.getName(sessionId)
//     sessionExsitence = true;
//   }

//   res.render('index', { existence: sessionExsitence, name: userName });
// });

//PJAX TEST
const fs = require('fs')
const path = require('path')
router.get('/', function(req, res, next) {
  res.format({
    // 새로고침에 의한 브라우저 요청
    'text/html': function(){
      console.log("index_html")
      // res.render(path.join(__dirname, '/../views/index.pug'));
      res.sendFile(path.join(__dirname, '/../views/index.pug'));
    },
    // AJAX 요청
    'application/json': function(){
      console.log("index_ajax")
      res.send(JSON.parse(fs.readFileSync(path.join(__dirname, '../views/index.pug'), 'utf8')));
    },
    'default': function() {
      // log the request and respond with 406
      res.status(406).send('Not Acceptable');
    }
  })
});

module.exports = router;
