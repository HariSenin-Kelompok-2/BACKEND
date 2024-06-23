const { Price } = require("../models");

const getPrice = async (req, res) => {
  const price = await Price.findAll();
  return res.status(200).json({ code: 200, message: "success", data: price });
};

module.exports = { getPrice };
