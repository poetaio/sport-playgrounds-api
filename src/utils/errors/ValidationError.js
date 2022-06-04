const httpStatusCodes = require('../httpStatusCodes');
const BaseError = require('./BaseError');


class ValidationError extends BaseError {
    constructor(description) {
        super('Validation Error', httpStatusCodes.BAD_REQUEST, description);
    }
}

module.exports = ValidationError;
