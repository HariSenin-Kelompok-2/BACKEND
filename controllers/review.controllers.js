const { Review } = require("../models");

const getReview = async (req, res) => {
  try {
    const reviews = await Review.findAll();

    if (reviews.length === 0) {
      return res.status(200).json({
        code: 200,
        message: "No reviews found",
      });
    }

    return res.status(200).json({
      code: 200,
      message: "Reviews retrieved successfully",
      data: reviews,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const addReview = async (req, res) => {
  try {
    const { content, isRecommend, productId } = req.body;
    const userId = req.currentUser.id;

    const existingReview = await Review.findOne({
      where: {
        userId,
        productId,
      },
    });

    if (existingReview) {
      return res.status(400).json({
        code: 400,
        message: "You have already reviewed this product",
      });
    }

    const newReview = await Review.create({
      id: crypto.randomUUID(),
      content,
      isRecommend,
      userId,
      productId,
    });

    return res.status(201).json({
      code: 201,
      message: "Review created successfully",
      data: newReview,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const editReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, isRecommend, productId } = req.body;
    const userId = req.currentUser.id;

    const review = await Review.findOne({ where: { id, userId } });
    if (!review) {
      return res.status(404).json({
        code: 404,
        message: "Review not found",
      });
    }

    review.content = content;
    review.isRecommend = isRecommend;
    review.productId = productId;

    await review.save();

    return res.status(200).json({
      code: 200,
      message: "Review updated successfully",
      data: review,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.currentUser.id;

    const review = await Review.findOne({ where: { id, userId } });

    if (review.length === 0) {
      return res.status(200).json({
        code: 200,
        message: "Reviews are empty",
      });
    }

    await review.destroy();

    return res.status(200).json({
      code: 200,
      message: "Review deleted successfully",
      data: review,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { getReview, addReview, editReview, deleteReview };
