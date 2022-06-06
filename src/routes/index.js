const express = require('express');
const router = express.Router()

const authRouter = require('./authRouter');
const sportPlaygroundRouter = require('./sportPlaygroundRouter');
const {errorHandlingMiddleware} = require("../middleware");

router.use('/auth', authRouter);
router.use('/playground', sportPlaygroundRouter, errorHandlingMiddleware);
router.use(errorHandlingMiddleware);

module.exports = router;
