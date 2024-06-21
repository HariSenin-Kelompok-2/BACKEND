const router = require('express').Router();
const {FeatureControllers} = require('../controllers');

router.get('/feature', FeatureControllers.getFeature);

module.exports = router;