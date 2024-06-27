const { Router } = require("express");
const router = Router();

const { UserControllers } = require("../controllers");

router.get("/users", UserControllers.getUsers);
router.get("/user/:id", UserControllers.getUserDetail);
router.post("/user/register", UserControllers.registerUser);
router.post("/user/login", UserControllers.loginUser);
router.put("/user/:id", UserControllers.updateUsers);
router.delete("/user/:id", UserControllers.deleteUsers);

module.exports = router;
