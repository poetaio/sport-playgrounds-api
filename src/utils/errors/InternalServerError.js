const httpStatusCodes = require('../httpStatusCodes');
const BaseError = require('./BaseError');


class InternalServerError extends BaseError {
    constructor(description) {
        super('Internal server error', httpStatusCodes.INTERNAL_SERVER, description);
    }
}

module.exports = InternalServerError;
