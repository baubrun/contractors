const express = require("express");
const storeController = require("../controllers/store")

const router = express.Router()


router.route("/api/stores")
  .get(
    storeController.listStores,
    )

  


module.exports = router

