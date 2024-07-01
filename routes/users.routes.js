const { Router } = require("express");
const router = Router();

const { UserControllers } = require("../controllers");
const { AuthMiddlewares } = require("../middlewares");

router.post("/user/register", UserControllers.registerUser);
router.post("/user/login", UserControllers.loginUser);
router.get("/user", AuthMiddlewares.checkToken, UserControllers.getUserDetail);
router.patch("/user", AuthMiddlewares.checkToken, UserControllers.updateUsers);
router.delete("/user", AuthMiddlewares.checkToken, UserControllers.deleteUser);

module.exports = router;
