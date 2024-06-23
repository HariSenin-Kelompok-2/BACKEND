const router = require("express").Router();
const { CategorySysReqControllers } = require("../controllers");

router.get("/categorysysreqs", CategorySysReqControllers.getCategorySysReqs);

module.exports = router;
