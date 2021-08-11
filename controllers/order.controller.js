require('../config/db.config');

const orderModel = require('../models/order.model');


//get all orders
exports.getAllOrders = async (req, res) => {

    await orderModel.find().then((result) => {
        res.satus(200).json(result);
    }).catch ((err) => {
        res.satus(404).json('Orders Not found');
    });
};