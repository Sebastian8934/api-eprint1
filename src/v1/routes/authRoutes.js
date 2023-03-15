const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');
const checkAuth = require("../../middleware/session/auth");

router
    .post('/login',authController.login) 
    .get('/validateToken', checkAuth , authController.validateToken)
    
module.exports = router;