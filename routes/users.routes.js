const { Router } = require("express");
const router = Router();

const { UserControllers } = require("../controllers");
const { AuthMiddlewares } = require("../middlewares");

router.get("/user", AuthMiddlewares.checkToken, UserControllers.getUserDetail);
router.post("/user/register", UserControllers.registerUser);
router.post("/user/login", UserControllers.loginUser);
router.put("/user", AuthMiddlewares.checkToken, UserControllers.updateUsers);
router.delete("/user", AuthMiddlewares.checkToken, UserControllers.deleteUsers);

module.exports = router;
