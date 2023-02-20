const express = require('express');
const router = express.Router();
const logController = require('../../controllers/logController');

router
    .get('/get/:dniSignerOne', logController.getLog)
    .post('/post/' ,logController.createLog) 
    .put('/put/:dniSignerOne', logController.updateLog)   
    
module.exports = router;