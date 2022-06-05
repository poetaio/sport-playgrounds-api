const jwt = require('jsonwebtoken');
const { httpStatusCodes } = require("../utils");
const {AuthError} = require("../utils/errors");
const { validationResult } = require('express-validator');

/**
 * Auth middleware, checks signature and retrieves info from token
 */
module.exports = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(httpStatusCodes.UNAUTHORIZED).json(errors);

    try {
        const token = req.header('Authorization').split(' ')[1];

        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch(e) {
        next([new AuthError(e.message)]);
    }
};
