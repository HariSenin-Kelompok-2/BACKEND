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
        attributes: ["id", "name", "short_description", "product_thumbnail"],
        include: [
          {
            model: PriceList,
            attributes: ["price", "discount"],
          },
          {
            model: Feature,
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
