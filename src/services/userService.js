const userModel = require('../models/userModel');

const createWebUser = async (user,cedula,nombre,apellido,telefono,passwordHash,claveFirmaDigital,usuarioCertificadoDigital,role) =>{
    const data = await userModel.create({
        user:user,
        cedula:cedula,
        nombre:nombre,
        apellido:apellido,
        telefono:telefono,
        password:passwordHash,
        claveFirmaDigital:claveFirmaDigital,
        usuarioCertificadoDigital:usuarioCertificadoDigital,
        role:role
    });
    return data;
}

const userExisting = async (user,cedula) =>{
    const userData = await userModel.findOne({user:user});
    const cedulaData = await userModel.findOne({cedula:cedula});
    if( userData !== null || cedulaData !== null ){
        return true;
    } else {
       return false;
    }
}

module.exports = { createWebUser, userExisting }