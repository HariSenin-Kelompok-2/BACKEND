const { Category, products } = require("../models");

const getCategories = async (req, res) => {
  const categories = await Category.findAll({ include: [products] });
  return res.status(200).json({ code: 200, data: categories });
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findOne({
    where: {
      id
    },
    include: [products]
  })
  return res.status(200).json({ code: 200, data: category });
};

module.exports = { getCategories, getCategoryById };
