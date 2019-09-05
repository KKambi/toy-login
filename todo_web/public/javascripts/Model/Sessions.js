let { sessionTable } = require('../../../DB/Session.js')

/**
 * Add session info to sessionTable
 *
 * @param {string} sessionId sessionId of user
 * @param {string} id id of user
 * @param {string} userName name of user
 * @return {} 
 */
const addSession = function(sessionId, id, userName){
    sessionTable[sessionId] = {
        id: id,
        name: userName
    }
}

module.exports = {
    addSession
}