const express = require("express");
const rateController = require("../controllers/rate")

const router = express.Router()


router.route("/api/rates")
  .get(
    rateController.listRates,
    )

  


module.exports = router