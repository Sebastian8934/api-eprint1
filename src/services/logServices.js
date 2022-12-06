const Log = require('../models/logModel');

const createLog = async ( newLog ) => {    
    const newLogData = new Log( newLog );    
    const logSaved = await newLogData.save();
    return logSaved;
}

const getLog = async ( log ) => {    
    const logData = await Log.findOne(log);    
    return logData; 
}

module.exports = {
    createLog, 
    getLog
}