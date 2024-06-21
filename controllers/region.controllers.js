const { Region } = require("../models");

const getRegions = async (req, res) => {
  const regions = await Region.findAll();
  return res.status(200).json({ code: 200, data: regions });
};

module.exports = { getRegions };
