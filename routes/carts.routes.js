const router = require("express").Router();
const { CartsControllers } = require("../controllers");
const { AuthMiddlewares } = require("../middlewares");

router.get("/carts", AuthMiddlewares.checkToken, CartsControllers.getCarts);
router.post("/carts", AuthMiddlewares.checkToken, CartsControllers.addCart);
router.delete(
  "/carts/:id",
  AuthMiddlewares.checkToken,
  CartsControllers.deleteCartbyId
);
router.delete(
  "/carts",
  AuthMiddlewares.checkToken,
  CartsControllers.deleteAllCarts
);
router.post("/carts/payment", AuthMiddlewares.checkToken, CartsControllers.cartsPayment);

module.exports = router;
