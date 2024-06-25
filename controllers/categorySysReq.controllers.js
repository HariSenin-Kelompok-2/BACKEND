const { CategorySysReq, SysReqs } = require("../models");

const getCategorySysReqs = async (req, res) => {
  const categorySysReq = await CategorySysReq.findAll({ include: [SysReqs] });
  return res.status(200).json({ message: "success", data: categorySysReq });
};

module.exports = { getCategorySysReqs };
