const { header} = require("express-validator");
const { AUTHORIZATION_BEARER_REGEX } = require("../../utils");


const authHeader = [
    header('Authorization')
        .notEmpty()
        .withMessage('No authorization header provided')
        .matches(AUTHORIZATION_BEARER_REGEX)
        .withMessage('Authorization header format is invalid')
];

module.exports = {
    authHeader
};
