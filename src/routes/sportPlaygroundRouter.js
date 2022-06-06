const express = require('express');
const router = express.Router();

const {sportPlaygroundController} = require('../controllers');
const {sportPlaygroundValidation} = require("../middleware/validationMiddleware");
const {errorHandlingMiddleware} = require("../middleware");

router.post('/', ...sportPlaygroundValidation.create, sportPlaygroundController.create, errorHandlingMiddleware);
router.get('/', ...sportPlaygroundValidation.getAll, sportPlaygroundController.getAll);
router.get('/:splId', ...sportPlaygroundValidation.getOne, sportPlaygroundController.getOne);
router.put('/:splId', ...sportPlaygroundValidation.update, sportPlaygroundController.update);
router.delete('/:splId', ...sportPlaygroundValidation.deleteOne, sportPlaygroundController.deleteOne);


module.exports = router;
