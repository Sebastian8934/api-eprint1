//const { Schema, model } = require('mongoose');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    user: String,
    password: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('user', userSchema);