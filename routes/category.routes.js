const router = require('express').Router();
const {CategoryControllers} = require('../controllers');

router.get('/categories', CategoryControllers.getCategories);
router.get('/category/:id', CategoryControllers.getCategoryById);

module.exports = router;