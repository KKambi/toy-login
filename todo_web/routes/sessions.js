/* import library */
var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* constant variable */
const { INDEX_PATH, MIN_30_TO_MS } = require('../public/javascripts/constant.js')

/* import module */
const Users = require('../public/javascripts/Model/Users.js')
const Sessions = require('../public/javascripts/Model/Sessions.js')
const { createUniqueId } = require('../public/javascripts/uuid_util.js')

// GET to login page
router.get('/new', function (req, res, next) {
    res.render('todo_login');
});

// POST for login
router.post('/create', function (req, res, next) {
    const id = req.body.id
    const password = req.body.password

    if (Users.isRegistered(id) && Users.isCorrectPassword(id, password)){
        const name = Users.getName(id)
        const uuid = createUniqueId()

        Sessions.addSession(uuid, id, name)

        res.cookie('sessionId', uuid, { maxAge: MIN_30_TO_MS })
        res.redirect(INDEX_PATH)
    }
    else{
        //TODO: 입력정보가 틀렸으므로, 다시 로그인하도록 유도
        res.redirect('./new')
    }
})

module.exports = router;
