const userModel = require('../models/userModel');
// const rolModel = require('../models/rolesModel');

const userExisting = async (user) =>{
    const users = await userModel.findOne({user:user}).populate('role');
    return users ;
}

module.exports = { userExisting }