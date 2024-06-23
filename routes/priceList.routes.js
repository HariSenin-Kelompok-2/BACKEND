const router = require("express").Router();
const { getPriceList } = require("../controllers/priceList.controllers"); // sesuaikan dengan path yang benar

router.get("/priceList", getPriceList);

module.exports = router;
