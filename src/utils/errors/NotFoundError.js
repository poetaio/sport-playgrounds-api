const httpStatusCodes = require('../httpStatusCodes');
const BaseError = require('./BaseError');


class NotFoundError extends BaseError {
    constructor(description) {
        super('Not Found Error', httpStatusCodes.NOT_FOUND, description);
    }
}

module.exports = NotFoundError;
