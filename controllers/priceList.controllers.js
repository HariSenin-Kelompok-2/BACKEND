const { PriceList, Carts, products, Users } = require("../models");

const getPriceList = async (req, res) => {
  const priceList = await PriceList.findAll({
    attributes: ["price", "discount"],
    include: [
      {
        model: Carts,
        attributes: ["id"],
        include: [
          { 
            model: Users, 
            attributes: ["username", "email"] 
          },
        ],
      },
      {
        model: products,
        attributes: ["name"]
      },
    ],
  });
  return res.status(200).json({ code: 200, message: "success", data: priceList });
};

module.exports = { getPriceList };
