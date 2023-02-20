const userModel = require('../models/userModel');

const createWebUser = async (user,cedula,nombre,apellido,telefono,passwordHash,claveFirmaDigital,usuarioCertificadoDigital) =>{
    const data = await userModel.create({
        user:user,
        cedula:cedula,
        nombre:nombre,
        apellido:apellido,
        telefono:telefono,
        password:passwordHash,
        claveFirmaDigital:claveFirmaDigital,
        usuarioCertificadoDigital:usuarioCertificadoDigital
    });
    return data;
}

const userExisting = async (user) =>{
    const data = await userModel.findOne({ user })
    return data;
}

module.exports = {
    createWebUser,
    userExisting
}