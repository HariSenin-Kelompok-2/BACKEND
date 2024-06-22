const router = require("express").Router();
const { PriceControllers } = require("../controllers");

router.get("/price", PriceControllers.getPrice);

module.exports = router;
