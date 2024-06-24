const {products, Category, PriceList} = require("../models");

const getProductDetail = async (req, res, next) => {
    const data = await products.findOne({
      where: {
        id: req.params.id,
      },
      include: [Category, PriceList]
    });
    return res.status(200).json(data);
  };

  const getAllProduct = async (req, res, next) => {
    const data = await products.findAll({include: [PriceList]});
    return res.status(200).json(data);
  };

  module.exports = {getProductDetail, getAllProduct};
  