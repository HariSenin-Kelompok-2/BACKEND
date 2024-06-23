const { ScrollThumbnail, products } = require("../models");

const getScrollThumbnails = async (req, res) => {
  const scrollThumbnails = await ScrollThumbnail.findAll({ include: [products] });
  return res.status(200).json({ code: 200, data: scrollThumbnails });
};

module.exports = { getScrollThumbnails };
