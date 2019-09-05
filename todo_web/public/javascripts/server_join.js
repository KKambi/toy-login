let { userTable } = require('../../DB/user.js')

/**
 * Check if two params same
 *
 * @param {string} newId id of request from join
 * @param {string} existentId id from userTable
 * @return {boolean} 
 */
const isSame = function(newId, existentId){
    return newId === existentId 
}

/**
 * Check duplication of new user id in userTable
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

const isCorrectPassword = function(id, password){
    return userTable[id].password === password
}

/**
 * Add information of new user to user memory-DB
 *
 * @param {obejct} userJson body of request from join
 * @return {} 
 */
const addUser = function(userJson){
    let id = userJson.id
    delete userJson.id

    userTable[id] = userJson
    console.log(userTable)
}

module.exports = {
    addUser,
    isRegistered,
    isCorrectPassword
}