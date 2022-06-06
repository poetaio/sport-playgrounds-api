const {validationResult} = require("express-validator");
const {sportPlaygroundService} = require("../services");
const {httpStatusCodes} = require("../utils");

class SportPlaygroundController {
    /**
     * Create playground
     */
    async create(req, res, next) {
        // check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(errors.array());
        }

        try {
            const playground = req.body;
            const id = await sportPlaygroundService.create(playground);
            return res.status(httpStatusCodes.OK).json({id});
        } catch (e) {
            next(e);
        }
    }

    /**
     * Get all playgrounds by location
     */
    async getAll(req, res, next) {
        // check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(errors.array());
        }

        try {
            const {tlLat, tlLng, brLat, brLng} = req.query;

            const playgroundList = await sportPlaygroundService.getAll(tlLat, tlLng, brLat, brLng);
            return res.status(httpStatusCodes.OK).json(playgroundList);
        } catch (e) {
            next(e);
        }
    }

    /**
     * Get one playground by id
     */
    async getOne(req, res, next) {
        // check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(errors.array());
        }

        try {
            const {splId} = req.params;
            const playground = await sportPlaygroundService.getOne(splId);
            return res.status(httpStatusCodes.OK).json(playground);
        } catch (e) {
            next(e);
        }
    }

    /**
     * Update one playground by id
     */
    async update(req, res, next) {
        // check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(errors.array());
        }

        try {
            const {splId} = req.params;
            const playground = req.body;
            await sportPlaygroundService.update(splId, playground);
            return res.status(httpStatusCodes.OK).end();
        } catch (e) {
            next(e);
        }
    }

    /**
     * Delete one playground by id
     */
    async deleteOne(req, res, next) {
        // check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(errors.array());
        }

        try {
            // todo: check if no users on playground,
            // or delete "cascade" (but for redis)
            const {splId} = req.params;
            await sportPlaygroundService.deleteOne(splId);
            return res.status(httpStatusCodes.OK).end();
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new SportPlaygroundController();
