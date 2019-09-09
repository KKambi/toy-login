const crypto = require('crypto')
const REPEAT_TIME = 108236
const PASSWORD_LENGTH = 64
const HASH_ALGORITHM = 'sha512'

//출처: https://www.zerocho.com/category/NodeJS/post/593a487c2ed1da0018cff95d
const encryptAsync = function(password){
    let encryptedPassword;
    let salt;
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, function(err, buf){
            salt = buf.toString('base64')
            crypto.pbkdf2(password, salt, REPEAT_TIME, PASSWORD_LENGTH, HASH_ALGORITHM, async function(err, key){
                encryptedPassword = key.toString('base64')
                resolve([salt, encryptedPassword])
            });
        });
    })
}

module.exports = {
    encryptAsync
} 