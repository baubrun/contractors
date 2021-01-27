const Rate = require("../models/rate");


const listRates = async (req, res) => {
    try {
      const rates = await Rate.find({})
      return res.status(200).json({
        rates
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message
      });
    }
  };
  


module.exports = {
  listRates,
}