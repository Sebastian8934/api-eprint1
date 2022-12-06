const logService = require("../services/logServices");

const createLog = async (req, res) => {
    const { body } = req;
    console.log(body);
  
    if (
      !body.code ||
      !body.signStatus ||
      !body.pdfGenerateStatus ||
      !body.nameSignerOne ||
      !body.dniSignerOne ||
      !body.pictureSignerOne ||
      !body.nameSignerTwo ||
      !body.dniSignerTwo ||
      !body.personalDataPolicy
    ) {
      return;
    }
  
    const createLog = await dataService.createLog(body);
    res.send({ status: "OK", data: createLog });
  };

const getLog = async ( ) => {
    const logId = req.params.log;

    const data = await logService.getWebData(logId);
    res.send({ status: "OK", data: data });   
}

module.exports = {
    createLog,
    getLog
  };
  