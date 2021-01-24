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



module.exports = {
    read,
}