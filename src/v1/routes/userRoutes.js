const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const logController = require('../../controllers/logController');
const { validatorCreateWebData } = require("../../middleware/validators/data");
const checkAuth = require("../../middleware/session/auth");

router
    .post('/createWebUser',userController.createWebUser)
    .post('/login',userController.login) 
    .get('/validateToken', checkAuth , userController.validateToken)
    .post('/log/',logController.createLog)
    .get('/log/',logController.getLog)
    
module.exports = router;