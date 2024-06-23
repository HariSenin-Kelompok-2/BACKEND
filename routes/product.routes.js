const router = require('express').Router();
const {ProductControllers} = require('../controllers');

router.get('/products', ProductControllers.getAllProduct);
router.get('/products/:id', ProductControllers.getProductDetail);

module.exports = router;