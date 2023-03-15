var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const roleSchema = new Schema({
    name: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('role', roleSchema);