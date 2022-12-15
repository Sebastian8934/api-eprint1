const { httpError } = require('../helpers/handleError');
const { encrypt, compare } = require('../helpers/handleBcrypt');
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
        const { user, password } = req.body;
        const users = await userService.userExisting(user);

        if(users){
            console.log("usuario ya creado");
            res.send({ error: 'usuario ya creado' })
            return;
        }

        const passwordHash = await encrypt(password)
        const registerUser = await userService.createWebUser(user, passwordHash);
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