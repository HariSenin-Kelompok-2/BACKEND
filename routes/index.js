const { Router } = require("express");
const router = Router();

const routes = [
  require("./users.routes"),
  require("./category.routes"),
  require("./region.routes"),
  require("./categorySysReq.routes"),
  require("./feature.routes"),
  require("./review.routes"),
  require("./product.routes"),
  require("./scrollThumbnail.routes"),
  require("./pricelist.routes"),
];

for (const route of routes) {
  router.use("/api", route);
}

module.exports = router;
