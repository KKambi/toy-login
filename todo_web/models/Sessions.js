let { sessionTable } = require('../databases/Session.js')

/**
 * Check if two session ids same
 *
 * @param {string} newSessionId sessionId of request from login
 * @param {string} existentSessionId existentSessionId from sessionTable
 * @return {boolean} 
 */
const isSame = function(newSessionId, existentSessionId){
    return newSessionId === existentSessionId 
}

/**
 * Check if session id is already registered
 *
 * @param {string} sessionId sessionId of request from login
 * @return {boolean} 
 */
const isRegistered = function(sessionId){
    if (sessionId === undefined || sessionId.length === 0) return false;
    
    let sessionIds = Object.keys(sessionTable)
    return sessionIds.some((existentSessionId) => {
        return isSame(sessionId, existentSessionId)
    }) 
}

/**
 * Add session info to sessionTable
 *
 * @param {string} sessionId sessionId of user
 * @param {string} id id of user
 * @param {string} userName name of user
 * @return {} 
 */
const create = function(sessionId, id, userName){
    sessionTable[sessionId] = {
        id: id,
        name: userName
    }
}

/**
 * Get user name from sessionTable
 *
 * @param {string} sessionid sessionid of user
 * @return {string} name of user 
 */
const getName = function(sessionId){
    return sessionTable[sessionId].name
}

module.exports = {
    isRegistered,
    create,
    getName
}