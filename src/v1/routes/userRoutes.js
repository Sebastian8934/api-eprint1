const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router
    .post('/createWebUser',userController.createWebUser)
    
module.exports = router;