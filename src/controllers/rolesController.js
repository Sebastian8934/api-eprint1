const { httpError } = require('../helpers/handleError');
const  roleService  = require("../services/roleService");

const getRole = async (req, res) => {
    try {
        const { _id } = req.params;
        const getRoles = await roleService.getRoles(_id);
        res.send({ status: "OK", data: getRoles });
    } catch (e) {
        httpError(res, e)
    }
}

const getAllRole = async (req, res) => {
    try {
        const getAllRoles = await roleService.getAllRoles();
        res.send({ status: "OK", data: getAllRoles });
    } catch (e) {
        httpError(res, e)
    }
}

const createRole = async (req, res) => {
    try {
        const { name } = req.body;
        const createRoles = await roleService.createRoles( name );
        res.send({ status: "OK", data: createRoles });
    } catch (e) {
        httpError(res, e)
    }
}

const putRole = async (req, res) => {
    try {
        const { _id } = req.params;
        const putRoles = await roleService.putRoles(_id,req.body);
        res.send({ status: "OK", data: putRoles });
    } catch (e) {
        httpError(res, e)
    }
}

const deleteRole = async (req, res) => {
    try {
        const { _id } = req.params;
        const deleteRoles = await roleService.deleteRoles(_id);
        res.send({ status: "OK", data: deleteRoles });
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { getRole, getAllRole, createRole, putRole, deleteRole }