const { httpError } = require('../helpers/handleError');
const { encrypt, compare, cryptrP} = require('../helpers/handleBcrypt');
const { tokenSign } = require('../helpers/generateToken');
const  userService  = require("../services/userService");

//TODO: Login!
const login = async (req, res) => {
    try {
        const { user, password } = req.body

        const dataUser = await userService.userExisting(user);

        if (!dataUser) {
            res.status(404)
            res.send({ error: 'User not found' })
            return ;
        }

        const checkPassword = await compare(password, dataUser.password) //TODO: Contraseña!

        //TODO JWT 👉
        const tokenSession = await tokenSign(dataUser) //TODO: 2d2d2d2d2d2d2
        
        if (checkPassword) { //TODO Contraseña es correcta!
            res.send({ status: "OK" , data: dataUser, tokenSession })
            return ;
        }

        if (!checkPassword) {
            res.status(409)
            res.send({
                error: 'Invalid password'
            })
            return ;
        }
    } catch (e) {
        httpError(res, e)
    }
}

const createWebUser = async (req, res) => {
    try {
        const { user,cedula,nombre,apellido,telefono,password,claveFirmaDigital,usuarioCertificadoDigital } = req.body;
        const users = await userService.userExisting(user);

        if(users){
            console.log("usuario ya creado");
            res.send({ status: "FAILED" , data:"usuario ya creado" })
            return;
        }

        const cryptrPs = await cryptrP(claveFirmaDigital);
        const passwordHash = await encrypt(password)
        const registerUser = await userService.createWebUser(user,cedula,nombre,apellido,telefono,passwordHash,cryptrPs,usuarioCertificadoDigital);
        res.send({ status: "OK", data: registerUser });

    } catch (e) {
        httpError(res, e)
    }
}

const validateToken = async (req,res) =>{
    try {   
        res.send({ status: "OK", data:"true"  });
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { createWebUser , login , validateToken }