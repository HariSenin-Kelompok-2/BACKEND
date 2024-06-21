const router = require('express').Router();
const {ReviewControllers} = require('../controllers');

router.get('/review', ReviewControllers.getReview);

module.exports = router;