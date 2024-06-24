const { PriceList } = require("../models");

const getPriceList = async (req, res) => {
  const priceList = await PriceList.findAll();
  return res
    .status(200)
    .json({ code: 200, message: "success", data: priceList });
};

module.exports = { getPriceList };
