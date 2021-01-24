const express = require("express");
const itemsController = require("../controllers/items")

const router = express.Router()


router.route("/api/items")
  .post(
    itemsController.read,
    )

  


module.exports = router