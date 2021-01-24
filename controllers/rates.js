const Rates = require("../models/rates");


const listRates = async (req, res) => {
    try {
      const rates = await Rates.find({})
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