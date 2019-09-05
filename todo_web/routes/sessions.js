/* import */
var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* constant variable */
const indexPath = "../"

/* api function */
const { isRegistered, isCorrectPassword } = require('../public/javascripts/server_join.js')

router.get('/new', function (req, res, next) {
    res.render('todo_login');
});

router.post('/create', function (req, res, next) {
    const id = req.body.id
    const password = req.body.password
    if (isRegistered(id) && isCorrectPassword(id, password)){
        //TODO: 세션이 유지된 채, 메인페이지로 리다이렉트
        res.redirect(indexPath)
    }
    //TODO: 입력정보가 틀렸으므로, 다시 로그인하도록 유도
    res.redirect('./new')
})

module.exports = router;
