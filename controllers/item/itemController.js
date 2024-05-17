const Chance = require('chance');
const chance = new Chance();
const formatCurrency = require('../../helper/currencyFormater');
// Generate initial mock data
let items = Array.from({ length: 10 }, () => ({
    itemId: chance.integer({ min: 1000, max: 9999 }),
    name: chance.name({ nationality: "en" }),
    price: chance.dollar({ min: 10, max: 50000 })
}));
exports.createItem = async (req, res, next) => {
    try {
        const { name, price } = req.body;
        if (!name || !price) {
            return res.status(400).json({
                errorMsg: "All fields is required"
            });
        }
        const newItem = {
            itemId: chance.integer({ min: 1000, max: 9999 }),
            name: name,
            price: await formatCurrency(price)
        };
        items.push(newItem);
        return res.status(201).json({
            success: true, 
            data: newItem,
            msg: "New item created successfully",
          }); 
    } catch (error) {
            return res.status(400).send({
                 errorMsg: error.message
            })
    }
}
exports.fetchAllItems = async (req, res)  => {
    try {
        let results = items;
        return res.status(201).json({
            success: true, 
            data: results,
            msg: "Items retrieved successfully.",
        });
    } catch (error) {
            return res.status(400).send({ 
                errorMsg: error.message 
            })
    }
}