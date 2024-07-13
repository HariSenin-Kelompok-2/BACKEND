const { Category, products, PriceList, Feature } = require("../models");

const getCategoryDetailWhere = async (columnObject) => {
  const category = await Category.findOne({
    attributes: ["id", "name"],
    where: {
      ...columnObject,
    },
    include: [
      {
        model: products,
        through: {
          attributes: [],
        },
        attributes: ["id", "name", "short_description", "product_thumbnail"],
        include: [
          {
            model: PriceList,
            attributes: ["price", "discount"],
          },
          {
            model: Feature,
            through: {
              attributes: [],
            },
            as: "productFeatures",
            attributes: ["name", "icon"],
          },
        ],
      },
    ],
  });
  return category;
};

const getAllCategories = async () => {
  return await Category.findAll({
    attributes: ["id", "name"],
  });
};

module.exports = { getCategoryDetailWhere, getAllCategories };
