const { Carts, Users, PriceList, products } = require("../models");

const getCarts = async (req, res) => {
  try {
    const userId = req.currentUser.id;
    const carts = await Carts.findAll({
      where: { userId },
      include: [
        { model: Users },
        {
          model: PriceList,
          include: [
            {
              model: products,
              attributes: ["id", "name"],
            },
          ],
        },
      ],
    });

    const cartCount = await Carts.count({ where: { userId } });

    if (carts.length === 0) {
      return res.status(200).json({
        code: 200,
        message: "Your carts are empty",
        cartCount: cartCount,
      });
    }

    return res.status(200).json({
      code: 200,
      message: "Get all your carts are success",
      data: carts,
      cartCount: cartCount,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const addCart = async (req, res) => {
  try {
    const { priceListId } = req.body;
    const userId = req.currentUser.id;

    const existingCart = await Carts.findOne({
      where: { priceListId, userId },
    });

    if (existingCart) {
      return res.status(400).json({
        code: 400,
        message: "You already have this item in your cart",
      });
    }

    const cart = await Carts.create({
      id: crypto.randomUUID(),
      priceListId,
      userId,
    });

    const newCart = await Carts.findOne({
      where: { id: cart.id },
      include: [
        {
          model: Users,
          attributes: ["id", "username", "email"],
        },
        {
          model: PriceList,
          attributes: ["id", "price", "discount", "productId"],
          include: [
            {
              model: products,
              attributes: ["id", "name"],
            },
          ],
        },
      ],
    });

    return res
      .status(201)
      .json({ code: 201, message: "Cart created successfully", data: newCart });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const deleteCartbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.currentUser.id;
    const cart = await Carts.findOne({ where: { id, userId } });

    if (!cart) {
      return res.status(404).json({
        code: 404,
        message: "Cart not found",
      });
    }

    await cart.destroy();
    return res.status(200).json({
      code: 200,
      message: "Cart deleted successfully",
      data: cart,
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const deleteAllCarts = async (req, res) => {
  try {
    const userId = req.currentUser.id;

    const cartCount = await Carts.count({ where: { userId } });
    if (cartCount === 0) {
      return res.status(400).json({
        code: 400,
        message: "No carts found for deletion",
      });
    }

    await Carts.destroy({ where: { userId } });

    return res.status(200).json({
      code: 200,
      message: "All carts data deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { getCarts, addCart, deleteCartbyId, deleteAllCarts };
