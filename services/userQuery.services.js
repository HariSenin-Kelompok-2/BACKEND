const { Users, Region, products, Carts, PriceList, Review } = require("../models");

const getUserWhere = async (columnObject) => {
  return await Users.findOne({
    where: {
      ...columnObject,
    },
    attributes: ["username", "email"],
    include: [
      {
        model: Region,
        attributes: ["name"],
      },
      {
        model: products,
        as: "productOwned",
        attributes: ["name"],
      },
      {
        model: Carts,
        attributes: ["id"],
        include: [
          {
            model: PriceList,
            attributes: ["price", "discount"],
            include: [
              {
                model: products,
                attributes: ["name"],
              },
            ],
          },
        ],
      },
      {
        model: Review,
        attributes: ["id", "content", "isRecommend"],
        include: {
          model: products,
          attributes: ["name"],
        },
      },
    ],
  });
};

module.exports = { getUserWhere };
