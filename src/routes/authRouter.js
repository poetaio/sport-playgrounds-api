const express = require('express');
const router = express.Router();

const {authController} = require('../controllers');
const {authMiddleware} = require("../middleware");
const {userValidation, commonValidation} = require("../middleware/validationMiddleware");

// register user & return token
router.post('/register', authController.register);
// login user & return token
router.post('/login', ...userValidation.userId, authController.login);
// update valid token
router.post('/', ...commonValidation.authHeader, authMiddleware, authController.updateToken);

module.exports = router;
