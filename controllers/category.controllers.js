const { Category } = require("../models");

const getCategories = async (req, res) => {
  const categories = await Category.findAll();
  return res.status(200).json({ code: 200, data: categories });
};

module.exports = { getCategories };
