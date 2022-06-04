const AuthError = require('./AuthError');
const BaseError = require('./BaseError');
const NotFoundError = require('./NotFoundError');
const NotImplementedError = require('./NotImplementedError');
const ValidationError = require('./ValidationError');
const InternalServerError = require('./InternalServerError');

module.exports = {
    AuthError,
    BaseError,
    NotFoundError,
    NotImplementedError,
    ValidationError,
    InternalServerError
};
