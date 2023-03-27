
const userModel = require('../models/userModel');


const getUsers = async (_id) =>{
    const data = await userModel.find({_id})
    return data;
}

const getAllUsers = async () =>{
    const data = await userModel.find()
    return data;
}

const createWebUser = async (user,cedula,nombre,apellido,telefono,passwordHash,claveFirmaDigital,usuarioCertificadoDigital,role,imgFirma) =>{
    const data = await userModel.create({
        user:user,
        cedula:cedula,
        nombre:nombre,
        apellido:apellido,
        telefono:telefono,
        password:passwordHash,
        claveFirmaDigital:claveFirmaDigital,
        usuarioCertificadoDigital:usuarioCertificadoDigital,
        role:role,
        imgFirma:imgFirma
    });
    return data;
}

const putUsers = async (_id,body) =>{
    const data = await userModel.findByIdAndUpdate(_id,body);
    return data;
}

const deleteUsers = async (_id) =>{
    const data = await userModel.findByIdAndDelete(_id);
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

module.exports = { getAllUsers, getUsers, createWebUser, putUsers, deleteUsers, userExisting  }