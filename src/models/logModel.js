var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const logSchema = new Schema({
    signStatus: String,
    pdfGenerateStatus: String,
    nameSignerOne: String,
    dniSignerOne: Number,
    pictureSignerOne: String,
    nameSignerTwo: String,
    dniSignerTwo: Number,
    personalDataPolicy: Boolean,   
    code: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Log', logSchema);