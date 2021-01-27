const Item = require("../models/item");


const read = async (req, res) => {
    const {
        tier,
        assemblySku,
        itemSku
    } = req.body
    try {
        const item = await Item.findOne({
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
      const itemNumbers = await Item.distinct("itemSku")
      const assemblyNumbers = await Item.distinct("assemblySku")
            
      return res.status(200).json({
        itemNumbers,
        assemblyNumbers,
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