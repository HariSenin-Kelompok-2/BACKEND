const router = require("express").Router();
const { SysReqsControllers } = require("../controllers");

router.get('/sysreq', SysReqsControllers.getSysReq);

module.exports = router