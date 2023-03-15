//const { Schema, model } = require('mongoose');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    user: String,
    usuarioCertificadoDigital:String,
    cedula:Number,
    nombre:String,
    apellido:String,
    telefono:Number,
    password: String,
    claveFirmaDigital:String,
    role:[{
        ref:"role",
        type:Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('user', userSchema);