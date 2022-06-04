const jwt = require('jsonwebtoken');
const { httpStatusCodes } = require("../utils");
const {UnauthorizedError} = require("../utils/errors");
const { validationResult } = require('express-validator');

// authentication middleware
module.exports = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
        return res.status(httpStatusCodes.UNAUTHORIZED).json(errors);

    try {
        const token = req.header('Authorization').split(' ')[1];

        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch(e) {
        return res.status(httpStatusCodes.UNAUTHORIZED).json({ errors: [new UnauthorizedError(e.message)] });
    }
};
