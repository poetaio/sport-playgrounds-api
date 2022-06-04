const httpStatusCodes = require('../httpStatusCodes');
const BaseError = require('./BaseError');

class AuthError extends BaseError {
    constructor(description) {
        super('Auth Error', httpStatusCodes.UNAUTHORIZED, description);
    }
}

module.exports = AuthError;
