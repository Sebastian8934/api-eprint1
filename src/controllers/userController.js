const { httpError } = require('../helpers/handleError');
const { encrypt, cryptrP} = require('../helpers/handleBcrypt');
const  userService  = require("../services/userService");


const getUser = async (req, res) => {
    try {
        const { _id } = req.params;
        const getUsers = await userService.getUsers(_id);
        res.send({ status: "OK", data: getUsers });
    } catch (e) {
        httpError(res, e)
    }
}

const getAllUser = async (req, res) => {
    try {
        const getAllUsers = await userService.getAllUsers();
        res.send({ status: "OK", data: getAllUsers });
    } catch (e) {
        httpError(res, e)
    }
}

const createWebUser = async (req, res) => {
    try {
        const { user,cedula,nombre,apellido,telefono,password,claveFirmaDigital,usuarioCertificadoDigital,role,imgFirma } = req.body;
        const users = await userService.userExisting(user,cedula);

       if(users){
            console.log("usuario o cedula ya registradas");
            res.send({ status:"FAILED" , message:"usuario o cedula ya registrados" });
            return ;
        }

        const cryptrPs = await cryptrP(claveFirmaDigital);
        const passwordHash = await encrypt(password)
        const registerUser = await userService.createWebUser(user,cedula,nombre,apellido,telefono,passwordHash,cryptrPs,usuarioCertificadoDigital,role,imgFirma);
        res.send({ status: "OK", data: registerUser });

    } catch (e) {
        httpError(res, e)
    }
}

const putUser = async (req, res) => {
    try {
        const { _id } = req.params;
        const putUsers = await userService.putUsers(_id,req.body);
        res.send({ status: "OK", data: putUsers });
    } catch (e) {
        httpError(res, e)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { _id } = req.params;
        const deleteUsers = await userService.deleteUsers(_id);
        res.send({ status: "OK", data: deleteUsers });
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = {  getUser , getAllUser , createWebUser , putUser, deleteUser }