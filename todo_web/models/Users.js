let { userTable } = require('../databases/User.js')

/**
 * Check if two ids same
 *
 * @param {string} newId id of request from join
 * @param {string} existentId id from userTable
 * @return {boolean} 
 */
const isSame = function(newId, existentId){
    return newId === existentId 
}

/**
 * Check if user id is already registered
 *
 * @param {string} id id of request from join
 * @return {boolean} 
 */
const isRegistered = function(id){
    let ids = Object.keys(userTable)
    return ids.some((existentId) => {
        return isSame(id, existentId)
    }) 
}

/**
 * Check if input password correct matched to id
 *
 * @param {string} id id of request from login
 * @param {string} password id of request from login
 * @return {boolean} 
 */
const isCorrectPassword = function(id, password){
    return userTable[id].password === password
}

/**
 * Add information of new user to user memory-DB
 *
 * @param {obejct} userJson body of request from join
 * @return {} 
 */
const create = function(userJson){
    let id = userJson.id
    delete userJson.id

    userTable[id] = userJson    //userDB의 key:value = id:info
    console.log(userTable)
}

/**
 * Get user name from userTable
 *
 * @param {string} id id of user
 * @return {string} name of user 
 */
const getName = function(id){
    return userTable[id].name
}

module.exports = {
    create,
    isRegistered,
    isCorrectPassword,
    getName
}