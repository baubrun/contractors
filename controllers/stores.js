const Stores = require("../models/stores");


const listStores = async (req, res) => {
    try {
      const stores = await Stores.find({})
      return res.status(200).json({
        stores
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message
      });
    }
  };
  


module.exports = {
    listStores,
}