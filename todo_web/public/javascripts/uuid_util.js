const uuidv1 = require('uuid/v1')

const createUniqueId = function(){
    return uuidv1();
}

module.exports = {
    createUniqueId
}