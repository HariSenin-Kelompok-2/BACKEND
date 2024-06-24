const router = require("express").Router();
const { PriceListControllers } = require("../controllers");

router.get("/pricelist", PriceListControllers.getPriceList);

module.exports = router;
