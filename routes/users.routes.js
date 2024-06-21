const { Router } = require("express");
const router = Router();

const { UserControllers } = require("../controllers");

router.get("/users", UserControllers.getUsers);
router.get("/user/:id", UserControllers.getUserDetail);
router.post("/user", UserControllers.addUsers);
router.put("/user/:id", UserControllers.updateUsers);
router.delete("/user/:id", UserControllers.deleteUsers);

module.exports = router;
