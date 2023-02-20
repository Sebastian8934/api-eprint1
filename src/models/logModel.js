var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const logSchema = new Schema({
    nameSignerOne: String,
    dniSignerOne: Number,
    nameSignerTwo: String,
    dniSignerTwo: Number,
    code: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Log', logSchema);