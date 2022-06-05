const {authService, userService} = require("../services");
const {httpStatusCodes} = require("../utils");
const {validationResult} = require("express-validator");
const {ValidationError} = require("../utils/errors");

class AuthController {
    /**
     * Registers user (create id & return token)
     */
    async register(req, res, next) {
        try {
            const userId = await userService.create();
            const token = await authService.createToken(userId);

            return res.status(httpStatusCodes.OK).json({token});
        } catch (e) {
            next(e);
        }
    }

    /**
     * Logins user by id
     */
    async login(req, res, next) {
        // check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(errors.array());
        }

        try {
            const {id} = req.body;

            if (!await userService.existsById(id)) {
                return next(new ValidationError(`User with id ${id} does not exist`));
            }

            const token = await authService.createToken(id);
            return res.status(httpStatusCodes.OK).json({token});
        } catch (e) {
            next(e);
        }
    }

    /**
     * Updates valid token
     */
    async updateToken(req, res, next) {
        try {
            const { id } = req.user;
            const token = await authService.createToken(id);

            return res.status(httpStatusCodes.OK).json({token});
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new AuthController();
