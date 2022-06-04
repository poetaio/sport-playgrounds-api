const { BaseError } = require('../utils/errors');
const { httpStatusCodes } = require('../utils');


module.exports = async (err, req, res) => {
    if (err instanceof BaseError)
        return res.status(err.statusCode).json({ errors: [err] });

    return res.status(httpStatusCodes.INTERNAL_SERVER).json({ errors: [err] });
};
