const express = require('express');
const userController = require('../controller/user');
const auth = require('../middleware/user.middleware');

const router = express.Router();

router.post("/register",userController.register)
router.post("/login",userController.login)
router.patch("/password-change",auth,userController.changePassword)

module.exports= router;