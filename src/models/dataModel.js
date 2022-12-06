//const { Schema, model } = require('mongoose');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const dataSchema = new Schema({
    code: String,
    nameSignerOne: String,
    dniSignerOne: Number,
    signStatusSingnerOne: Boolean,
    //pictureSignerOne: String,
    //pdfGenerateStatus: Boolean,    
    mobileData:{
        signTwo: String,
        nameSignerTwo: String,
        dniSignerTwo: Number,
        pictureSignerTwo: String,
        personalDataPolicy: Boolean
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Data', dataSchema);