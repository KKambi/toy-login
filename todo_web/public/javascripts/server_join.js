let { userInfo } = require('../../DB/user.js')

/**
 * Check if two params same
 *
 * @param {string} newId id of request from join
 * @param {string} existentId id from userInfo
 * @return {boolean} 
 */
const isIdSame = function(newId, existentId){
    return newId === existentId 
}

/**
 * Check duplication of new user id in userInfo
 *
 * @param {string} id id of request from join
 * @return {} 
 */
const checkIdDuplication = function(id){
    let ids = Object.keys(userInfo)
    let result = ids.some((existentId) => {
        return isIdSame(id, existentId)
    })
    if (result === true) throw new Error('중복된 아이디입니다.')
}

/**
 * Add information of new user to user memory-DB
 *
 * @param {obejct} userJson body of request from join
 * @return {} 
 */
const addUserInfo = function(userJson){
    let id = userJson.id
    delete userJson.id

    userInfo[id] = userJson
    console.log(userInfo)
}

module.exports = {
    addUserInfo,
    checkIdDuplication
}