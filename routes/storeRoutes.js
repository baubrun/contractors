const express = require("express");
const storesController = require("../controllers/stores")

const router = express.Router()


router.route("/api/stores")
  .get(
    storesController.listStores,
    )

  


module.exports = router

