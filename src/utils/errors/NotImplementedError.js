const httpStatusCodes = require('../httpStatusCodes');
const BaseError = require('./BaseError');


class NotImplementedError extends BaseError {
    constructor(description) {
        super('Not Implemented Error', httpStatusCodes.INTERNAL_SERVER, description);
    }
}

module.exports = NotImplementedError;
