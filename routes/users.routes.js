const { Router } = require("express");
const router = Router();

const { UserControllers } = require("../controllers");

router.get("/users", UserControllers.getUsers);
router.get("/users/:id", UserControllers.getUserDetail);
router.post("/users", UserControllers.addUsers);
router.put("/users/:id", UserControllers.updateUsers);
router.delete("/users/:id", UserControllers.deleteUsers);

module.exports = router;
