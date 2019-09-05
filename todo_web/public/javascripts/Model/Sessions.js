let { sessionTable } = require('../../../DB/session.js')

/**
 * Add session info to sessionTable
 *
 * @param {string} id id of user
 * @param {string} sessionId sessionId of user
 * @param {string} userName name of user
 * @return {} 
 */
const addSession = function(id, sessionId, userName){
    sessionTable[id] = {
        sessionId: sessionId,
        name: userName
    }
}

module.exports = {
    addSession
}