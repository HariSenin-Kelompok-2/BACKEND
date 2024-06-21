const router = require('express').Router();
const { RegionControllers } = require('../controllers');

router.get('/regions', RegionControllers.getRegions);

module.exports = router