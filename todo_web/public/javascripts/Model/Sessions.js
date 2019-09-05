let { sessionTable } = require('../../../DB/session.js')

const addSession = function(id, sessionId, userName){
    sessionTable[id] = {
        sessionId: sessionId,
        name: userName
    }
}

module.exports = {
    addSession
}