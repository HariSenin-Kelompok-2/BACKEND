const { Feature } = require("../models");

const getFeature = async (req, res) => {
  const feature = await Feature.findAll();
  return res.status(200).json({ code: 200, data: feature });
};

module.exports = { getFeature };