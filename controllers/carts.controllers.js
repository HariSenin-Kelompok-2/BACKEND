const { Carts, Users } = require("../models");

const getCarts = async (req, res) => {
  const carts = await Carts.findAll();
  return res.status(200).json({ code: 200, message: "success", data: carts });
};

module.exports = { getCarts };
