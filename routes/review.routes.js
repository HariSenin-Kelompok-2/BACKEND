const router = require("express").Router();
const { ReviewControllers } = require("../controllers");
const { AuthMiddlewares } = require("../middlewares");

router.get("/review", ReviewControllers.getReview);
router.post("/review", AuthMiddlewares.checkToken, ReviewControllers.addReview);
router.put(
  "/review/:id",
  AuthMiddlewares.checkToken,
  ReviewControllers.editReview
);
router.delete(
  "/review/:id",
  AuthMiddlewares.checkToken,
  ReviewControllers.deleteReview
);

module.exports = router;
