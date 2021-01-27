const express = require("express");
const jobController = require("../controllers/job")

const router = express.Router()


router.route("/api/jobs")
  .post(
    jobController.create,
    )

  


module.exports = router