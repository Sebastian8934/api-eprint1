const { check, validationResult } = require("express-validator");

const validatorCreateWebData = [
    check("code")
    .exists()
    .notEmpty()
    /* .isMongoId() */,
    check("nameSignerOne")
    .exists()
    .notEmpty(),
    check("dniSignerOne")
    .exists()
    .notEmpty(),
    check("signStatusSingnerOne")
    .exists()
    .notEmpty(),
    (req , res , next ) => {
        try {
            validationResult(req).throw()
            return next()
        } catch (err) {
            res.status(403);
            res.send({errors : err.array() })
        }
    }
]

module.exports = { validatorCreateWebData };