const router = require("express").Router();
const { ScrollThumbnailControllers } = require("../controllers");

router.get('/scrollthumbnails', ScrollThumbnailControllers.getScrollThumbnails);

module.exports = router
