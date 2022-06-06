const { check, param, query} = require("express-validator");
const {UUID_REGEX} = require("./regex");

const bodyStringNotNullOrEmpty = (field) =>
    check(field)
        .exists()
        .withMessage(`${field} must be provided`)
        .trim()
        .notEmpty()
        .withMessage(`${field} must not be empty`);

const bodyUUID = (field) =>
    check(field)
        .notEmpty()
        .withMessage(`${field} must be provided provided`)
        .matches(UUID_REGEX)
        .withMessage(`${field} format is invalid`)

const pathUUID = (field) =>
    param(field)
        .notEmpty()
        .withMessage(`${field} must be provided`)
        .matches(UUID_REGEX)
        .withMessage(`${field} format is invalid`)

const bodyFloat = (field) =>
    check(field)
        .exists()
        .withMessage(`${field} must be provided`)
        .isFloat()
        .withMessage(`${field} must be float`);

const queryFloat = (field) =>
    query(field)
        .exists()
        .withMessage(`${field} must be provided`)
        .isFloat()
        .withMessage(`${field} must be float`);

const queryFloatNotRequired = (field) =>
    query(field)
        .isFloat()
        .withMessage(`${field} must be float`);

module.exports = {
    bodyStringNotNullOrEmpty,
    bodyUUID,
    pathUUID,
    bodyFloat,
    queryFloat,
    queryFloatNotRequired,
};
