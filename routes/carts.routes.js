const router = require("express").Router();
const { CartsControllers } = require("../controllers");

router.get("/carts", CartsControllers.getCarts);
router.post("/carts", CartsControllers.addCart);
router.delete("/carts/:id", CartsControllers.deleteCartbyId);
router.delete("/carts", CartsControllers.deleteAllCarts);

module.exports = router;
