const { RegionQuery } = require("../services");

const getRegions = async (req, res) => {
  const regions = await RegionQuery.getAllRegions();

  return res.status(200).json({ code: 200, data: regions });
};

module.exports = { getRegions };
