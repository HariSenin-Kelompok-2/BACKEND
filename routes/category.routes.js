const router = require('express').Router();
const {CategoryControllers} = require('../controllers');

router.get('/categories', CategoryControllers.getCategories);

module.exports = router;