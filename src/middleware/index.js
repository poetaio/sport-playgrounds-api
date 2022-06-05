const errorHandlingMiddleware = require('./errorHandlingMiddleware');
const authMiddleware = require('./authMiddleware');
const validationMiddleware = require('./validationMiddleware');

module.exports = {
    errorHandlingMiddleware,
    authMiddleware,
    validationMiddleware,
};
