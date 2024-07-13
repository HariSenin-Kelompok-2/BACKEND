const { CategoryQuery } = require("../services");

const getCategories = async (req, res) => {
  const categories = await CategoryQuery.getAllCategories();

  return res.status(200).json({ code: 200, data: categories });
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const category = await CategoryQuery.getCategoryDetailWhere({ id });

  return res.status(200).json({ code: 200, category });
};

module.exports = { getCategories, getCategoryById };
