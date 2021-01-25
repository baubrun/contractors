const express = require("express");
const itemsController = require("../controllers/items")

const router = express.Router()


router.route("/api/items")
  .post(
    itemsController.read,
    )


router.route("/api/items/sku/list")
  .get(
    itemsController.listItemSku,
    )

  


module.exports = router