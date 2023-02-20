const LogModel = require('../models/logModel');

const createLog = async ( newLog ) => {    
    const newLogData = new LogModel( newLog );    
    const logSaved = await newLogData.save();
    return logSaved;
}

const updateLog = async ( dniSignerOne,body ) => {   
     
    const data = await LogModel.find({dniSignerOne:dniSignerOne}).sort({$natural:-1}).limit(1);   
    const logSaved = await LogModel.findOneAndUpdate(data[0]._id,body);
    return logSaved;
}

const getWebData = async ( dniSignerOne ) => {    
    const data = await LogModel.find({dniSignerOne:dniSignerOne}).sort({$natural:-1}).limit(1);   
    return data; 
}

module.exports = {
    createLog,
    updateLog, 
    getWebData
}