const rolesModel = require('../models/rolesModel');

const getRoles = async (_id) =>{
    const data = await rolesModel.find({_id})
    return data;
}

const getAllRoles = async () =>{
    const data = await rolesModel.find()
    return data;
}

const createRoles = async (name) =>{
    const data = await rolesModel.create({name:name});
    return data;
}

const putRoles = async (_id,body) =>{
    const data = await rolesModel.findByIdAndUpdate(_id,body);
    return data;
}

const deleteRoles = async (_id) =>{
    const data = await rolesModel.findByIdAndDelete(_id);
    return data;
}

module.exports = { getRoles, getAllRoles ,createRoles ,putRoles ,deleteRoles }