//const { Schema, model } = require('mongoose');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const dataSchema = new Schema({
    code: String,
    nameSignerOne: String,
    dniSignerOne: Number,
    pictureSignerOne: String,
    emailSignerOne: String,
    phoneSignerOne:String,
    mobileData:{
        signTwo: String,
        nameSignerTwo: String,
        dniSignerTwo: Number,
        pictureSignerTwo: String,
        emailSignerTwo: String,
        phoneSignerTwo:String
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Data', dataSchema);