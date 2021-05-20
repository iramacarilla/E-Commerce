const router = require("express").Router();

const orderModel = require("../models/order/orderModel");
//const auth = require("../authentication/auth");
const guard = require("../utils/guard");

router.post("/", guard, orderModel.addOrder);
router.get("/", guard, orderModel.getOrders);

module.exports = router;
