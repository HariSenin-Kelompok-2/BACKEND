const {products, Category, PriceList, Feature, SysReqs, CategorySysReq, Review} = require("../models");

const getProductDetail = async (req, res, next) => {
  try{
    const productData = req.params.id;
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
        },
        {
          model: ScrollThumbnail
        },
    ]
  });
  if(productData){
  return res.status(200).json({ 
                                code: 200, 
                                message: "success", 
                                data: products })};
  }
    catch (error){
  return res.status(404).json({
                                code:404,
                                message: "Page Not Found",
                                data:products
  })
}}

    

  const getAllProduct = async (req, res, next) => {
    const data = await products.findAll({include: [PriceList]});
    return res.status(200).json({ 
                                  code: 200, 
                                  message: "success", 
                                  data: products });
  };

  module.exports = {getProductDetail, getAllProduct};
  