const crypto = require('crypto')
const REPEAT_TIME = 108236
const PASSWORD_LENGTH = 64
const HASH_ALGORITHM = 'sha512'

/**
 * Return salt and encrpyted password as promise object
 * 출처: https://www.zerocho.com/category/NodeJS/post/593a487c2ed1da0018cff95d
 * 
 * @param {string} password password of request from login
 * @return {void} 
 */
const encryptAsync = function (password) {
    let encryptedPassword;
    let salt;
    salt = crypto.randomBytes(64).toString('base64')
    encryptedPassword = crypto.pbkdf2Sync(password, salt, REPEAT_TIME, PASSWORD_LENGTH, HASH_ALGORITHM)
        .toString('base64')
    return [salt, encryptedPassword]
}

/**
 * Check if input password matched to stored password
 *
 * @param {string} inputPassword password of request from login
 * @param {string} inputPassword stored salt of that id
 * @param {string} storedPassword stored password of that id
 * @return {boolean} 
 */
const isSame = function (inputPassword, storedSalt, storedPassword) {
    const encryptedPassword = crypto.pbkdf2Sync(inputPassword, storedSalt, REPEAT_TIME, PASSWORD_LENGTH, HASH_ALGORITHM)
        .toString('base64')
    return encryptedPassword === storedPassword
}

module.exports = {
    REPEAT_TIME,
    PASSWORD_LENGTH,
    HASH_ALGORITHM,
    encryptAsync,
    isSame
} 