const { Review } = require("../models");

const getReview = async (req, res) => {
  const review = await Review.findAll();
  return res.status(200).json({ code: 200, data: review });
};

module.exports = { getReview };