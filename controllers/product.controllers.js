const {
  products,
  Category,
  PriceList,
  Feature,
  SysReqs,
  CategorySysReq,
  Review,
  ScrollThumbnail,
  descImg,
} = require("../models");

const getProductDetail = async (req, res, next) => {
  try {
    const productData = req.params.id;
    const data = await products.findOne({
      attributes: [
        "id",
        "name",
        "short_description",
        "release_date",
        "developer",
        "publisher",
        "product_thumbnail",
        "video",
        "description",
        "jumbotron_image"
      ],
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Category,
          attributes: ["id", "name"],
          through: {
            attributes: [],
          },
        },
        {
          model: PriceList,
          attributes: ["id", "price", "discount", "offerName"],
        },
        {
          model: Feature,
          as: "productFeatures",
          attributes: ["id", "name", "icon"],
        },
        {
          model: SysReqs,
          attributes: [
            "id",
            "productId",
            "recommended",
            "osId",
            "processor",
            "memory",
            "graphics",
            "directX",
            "storage",
          ],
          include: [
            {
              model: CategorySysReq,
            },
          ],
        },
        {
          model: Review,
        },
        {
          model: ScrollThumbnail,
          attributes: ["id", "productId", "img", "type"],
        },
        {
          model: descImg,
        },
      ],
    });
    if (!data) {
      throw new Error("Data tidak ditemukan");
    }
    if (productData) {
      return res.status(200).json({
        code: 200,
        message: "success",
        data: data,
      });
    }
  } catch (error) {
    return res.status(404).json({
      code: 404,
      message: "Page Not Found",
      error,
    });
  }
};

const getAllProduct = async (req, res, next) => {
  const data = await products.findAll({
    include: [
      {
        model: Category,
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
      {
        model: PriceList,
        attributes: ["id", "price", "discount"],
      },
      {
        model: Feature,
        as: "productFeatures",
        attributes: ["id", "name", "icon"],
        through: {
          attributes: [],
        },
      },
      {
        model: SysReqs,
        attributes: [
          "id",
          "productId",
          "recommended",
          "osId",
          "processor",
          "memory",
          "graphics",
          "directX",
          "storage",
        ],
        include: [
          {
            model: CategorySysReq,
          },
        ],
      },
      {
        model: Review,
      },
      {
        model: ScrollThumbnail,
        attributes: ["id", "productId", "img", "type"],
      },
      {
        model: descImg,
      },
    ],
  });
  return res.status(200).json({
    code: 200,
    message: "success",
    data: data,
  });
};

module.exports = { getProductDetail, getAllProduct };
