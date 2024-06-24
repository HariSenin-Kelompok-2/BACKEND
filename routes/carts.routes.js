const router = require("express").Router();
const { CartsControllers } = require("../controllers");

router.get("/carts", CartsControllers.getCarts);

module.exports = router;
