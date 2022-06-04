const httpStatusCodes = require('./httpStatusCodes');
const regex = require('./regex');

module.exports = {
    httpStatusCodes,
    ...regex,
};