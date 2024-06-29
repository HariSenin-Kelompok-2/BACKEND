const {products, Category, PriceList, Feature, SysReqs, CategorySysReq, Review} = require("../models");

const getProductDetail = async (req, res, next) => {
    const data = await products.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        Category, 
        PriceList, 
        {
          model: Feature, 
          as: "productFeatures"
        }, 
        {
          model: SysReqs,
          include: [
            {
              model: CategorySysReq
            }
          ]
        },
        {
          model: Review
        }
      ]
    });
    return res.status(200).json(data);
  };

  const getAllProduct = async (req, res, next) => {
    const data = await products.findAll({include: [PriceList]});
    return res.status(200).json(data);
  };

  module.exports = {getProductDetail, getAllProduct};
  