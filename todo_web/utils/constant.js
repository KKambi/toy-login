const INDEX_PATH = "/"
const MIN_30_TO_MS = 1800000
const SESSION_ID_VARIABLE_NAME = "sessionId"
const COOKIE_OPTIONS = {
    maxAge: MIN_30_TO_MS,
    // httpOnly: true
}

module.exports = {
    INDEX_PATH,
    MIN_30_TO_MS,
    SESSION_ID_VARIABLE_NAME,
    COOKIE_OPTIONS
}