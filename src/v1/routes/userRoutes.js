const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const checkAuth = require("../../middleware/session/auth");

router
    .post('/createWebUser',userController.createWebUser)
    .post('/login',userController.login) 
    .get('/validateToken', checkAuth , userController.validateToken)
    
module.exports = router;