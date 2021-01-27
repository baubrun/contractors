const Store = require("../models/store");


const listStores = async (req, res) => {
    try {
      const stores = await Store.find({})
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