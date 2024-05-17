const express = require("express");
const router = express.Router();
// Item controller section
const itemController = require("../../controllers/item/itemController");

// public routes
router.get('',   itemController.fetchAllItems);
router.post('',  itemController.createItem);


module.exports = router;