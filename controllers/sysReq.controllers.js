const { SysReqs, products, CategorySysReq } = require("../models");

const getSysReq = async (req, res) => {
  const sysReq = await SysReqs.findAll();
  return res.status(200).json({ code: 200, data:sysReq});
};

module.exports = { getSysReq };
