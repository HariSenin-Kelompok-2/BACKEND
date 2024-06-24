const { Carts, Users, PriceList } = require("../models");

const getCarts = async (req, res) => {
  const carts = await Carts.findAll({ include: [Users, PriceList] });
  return res.status(200).json({ code: 200, message: "success", data: carts });
};

module.exports = { getCarts };
