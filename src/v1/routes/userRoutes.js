const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router
    .get('/getAll', userController.getAllUser)
    .get('/:_id', userController.getUser)
    .post('/createWebUser',userController.createWebUser)
    .put('/:_id', userController.putUser)
    .delete('/:_id', userController.deleteUser)
    
module.exports = router;