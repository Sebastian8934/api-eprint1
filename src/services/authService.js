const userModel = require('../models/userModel');

const userExisting = async (user) =>{
    const dataUser = await userModel.findOne({ user })
    const data = await userModel.findOne({ role:dataUser.role }).populate("role");
    return data;
}

module.exports = { userExisting }