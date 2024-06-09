const { Router } = require("express");
const router = Router();

const routes = [require("./users.routes")];
for (const route of routes) {
  router.use("/api", route);
}

module.exports = router;
