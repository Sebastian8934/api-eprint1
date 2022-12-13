const dataService = require("../services/dataService");

const createWebData = async (req, res) => {
  const { body } = req;

  try {
    if (!body.code || !body.nameSignerOne || !body.dniSignerOne) {
        res.status(400).send({
            status: "FAILED",
            data: {
              error:
                "One of the keys is missing or is empty in request",
            },
          });
    }

    const newWebData = {
      code: body.code,
      nameSignerOne: body.nameSignerOne,
      dniSignerOne: body.dniSignerOne,
    };

    const webData = await dataService.createWebData(newWebData);
    res.send({ status: "OK", data: webData });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createMobileData = async (req, res) => {
  const { body } = req;
  const id = req.params.code;

  if (
    !body.mobileData.signTwo ||
    !body.mobileData.personalDataPolicy ||
    !body.mobileData.nameSignerTwo ||
    !body.mobileData.dniSignerTwo ||
    !body.mobileData.pictureSignerTwo
  ) {
    return;
  }

  const mobileData = await dataService.createMobileData(id, body);
  res.send({ status: "OK", data: mobileData });
};

const getWebData = async (req, res) => {
  const {
    body,
    params: { code },
  } = req;

  if (!code) {
    return;
  }

  const data = await dataService.getWebData(code);
  res.send({ status: "OK", data: data });
};

module.exports = {
  createMobileData,
  createWebData,
  getWebData
};
