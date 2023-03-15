const { httpError } = require('../helpers/handleError');
const { encrypt, cryptrP} = require('../helpers/handleBcrypt');
const  userService  = require("../services/userService");

const createWebUser = async (req, res) => {
    try {
        const {user,cedula,nombre,apellido,telefono,password,claveFirmaDigital,usuarioCertificadoDigital,role} = req.body;
        const users = await userService.userExisting(user,cedula);

       if(users){
            console.log("usuario o cedula ya registradas");
            res.send({ status:"FAILED" , message:"usuario o cedula ya registrados" });
            return ;
        }

        const cryptrPs = await cryptrP(claveFirmaDigital);
        const passwordHash = await encrypt(password)
        const registerUser = await userService.createWebUser(user,cedula,nombre,apellido,telefono,passwordHash,cryptrPs,usuarioCertificadoDigital,role);
        res.send({ status: "OK", data: registerUser });

    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { createWebUser }