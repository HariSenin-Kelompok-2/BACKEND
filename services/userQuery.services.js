const { Users, Region, products, Carts, PriceList, Review } = require("../models");

const getUserDetailWhere = async (columnObject) => {
  return await Users.findOne({
    where: {
      ...columnObject,
    },
    attributes: ["username", "email", "bio"],
    include: [
      {
        model: Region,
        attributes: ["name", "icon"],
      },
      {
        model: products,
        through: {
          attributes: []
        },
        as: "productOwned",
        attributes: ["name", "product_thumbnail"],
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

const getUserWhere = async (columnObject) => {
  return await Users.findOne({
    where: {
      ...columnObject
    }
  })
}

module.exports = { getUserWhere, getUserDetailWhere };
