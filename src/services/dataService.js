/*DATABASE IMPORT SCHEMA*/
const Data = require('../models/dataModel');


const createWebData = async (newWebData) =>{
    /**INSERT TO DATABASE WEB DATA*/
    const { code, nameSignerOne, dniSignerOne } = newWebData;    
    const newData = new Data({ code, nameSignerOne, dniSignerOne });
    const dataSaved = await newData.save();
    return dataSaved;
};

const createMobileData = async (id, newMobileData) =>{
    /**INSERT TO DATABASE MOBILE DATA*/    

    const updateData = await Data.findByIdAndUpdate(id, newMobileData,{
        new:true
    })
    
    return updateData;
};

const getWebData = async (code) =>{
    const id = await Data.findOne({code: code});
    return id;
}

module.exports = {
    createMobileData,
    createWebData,
    getWebData
}