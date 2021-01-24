const express = require("express");
const ratesController = require("../controllers/rates")

const router = express.Router()


router.route("/api/rates")
  .get(
    ratesController.listRates,
    )

  


module.exports = router