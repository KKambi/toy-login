/* import library */
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

// GET to login page
router.get('/new', function (req, res, next) {
    const valid = req.query.valid;
    res.render('todo_login', { valid: valid });
});

// POST for login
router.post('/create', function (req, res, next) {
    const id = req.body.id
    const password = req.body.password

    if (Users.isRegistered(id) && Users.isCorrectPassword(id, password)){
        const uuid = createUniqueId()
        const name = Users.getName(id)

        Sessions.create(uuid, id, name)

        res.cookie(SESSION_ID_VARIABLE_NAME, uuid, COOKIE_OPTIONS)
        res.redirect(INDEX_PATH)
    }
    else{
        res.redirect('./new?valid=false')
    }
})

// POST for logout
router.post('/destroy', function (req, res, next){
    const sessionId = req.cookies.sessionId
    if (Sessions.isRegistered(sessionId) === true){
        res.clearCookie(SESSION_ID_VARIABLE_NAME)
    }
    res.redirect(INDEX_PATH)
})

module.exports = router;
