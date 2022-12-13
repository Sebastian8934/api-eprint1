const userModel = require('../models/userModel');

const createWebUser = async (user,passwordHash) =>{
    const data = await userModel.create({user:user,password:passwordHash});
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