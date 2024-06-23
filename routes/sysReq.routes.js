const router = require("express").Router();
const { SysReqs } = require("../controllers");

router.get('/sysreq', SysReqs.getSysReq);

module.exports = router