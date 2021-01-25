const Items = require("../models/items");


const read = async (req, res) => {
    const {
        tier,
        assemblySku,
        itemSku
    } = req.body
    try {
        const item = await Items.findOne({
            tier: tier,
            "$or": [{
                    "assemblySku": assemblySku
                },
                {
                    "itemSku": itemSku
                },
            ]
        })

        return res.status(200).json({
            item
        });
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
};

const listItemSku = async (req, res) => {
    try {
      const itemNumbers = await Items.distinct("itemSku")
      const assemblyNumbers = await Items.distinct("assemblySku")
      return res.status(200).json({
        itemNumbers,
        assemblyNumbers
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message
      });
    }
  };


module.exports = {
    listItemSku,
    read,
   
}