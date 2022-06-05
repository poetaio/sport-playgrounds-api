const { body } = require("express-validator");
const { UUID_REGEX } = require("../../utils");


// checks whether user id provided and matches UUID format
const userId = [
    body('id')
        .notEmpty()
        .withMessage('No id provided')
        .matches(UUID_REGEX)
        .withMessage('User id format is invalid')
];

module.exports = {
    userId
};
