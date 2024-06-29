const { Category, products, PriceList, Feature } = require("../models");

const getCategories = async (req, res) => {
  const categories = await Category.findAll({
    attributes: ["id", "name"],
  });
  return res.status(200).json({ code: 200, data: categories });
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findOne({
    attributes: ["id", "name"],
    where: {
      id,
    },
    include: [
      {
        model: products,
        attributes: ["id", "name", "short_description", "product_thumbnail"],
        include: [
          {
            model: PriceList,
            attributes: ["price", "discount"]
          },
          {
            model: Feature,
            as: "productFeatures",
            attributes: ["name", "icon"]
          }
        ]
      },
    ],
  });
  return res.status(200).json({ code: 200, data: category });
};

module.exports = { getCategories, getCategoryById };
