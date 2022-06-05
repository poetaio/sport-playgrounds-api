const { BaseError } = require('../utils/errors');
const { httpStatusCodes } = require('../utils');

/**
 * Error handling middleware.
 * Parses error and sends errors list
 */
module.exports = async (err, req, res) => {
    if (err instanceof BaseError)
        return res.status(err.statusCode).json({ errors: [err] });

    return res.status(httpStatusCodes.INTERNAL_SERVER).json({ errors: [err] });
};
