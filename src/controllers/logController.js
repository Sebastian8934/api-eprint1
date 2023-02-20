const logService = require("../services/logServices");

const createLog = async (req, res) => {
    const { body } = req;
    const createLog = await logService.createLog(body);
    res.send({ status: "OK", data: createLog });
};

const updateLog = async (req, res) => {
  const { params,body } = req;
  const updateLog = await logService.updateLog(params.dniSignerOne,body);
  res.send({ status: "OK", data: updateLog });
};

const getLog = async (req,res) => {
    const dniSignerOne = req.params.dniSignerOne;
    const data = await logService.getWebData(dniSignerOne);
    res.send({ status: "OK", data: data });   
}

module.exports = {
    getLog,
    createLog,
    updateLog
};
  