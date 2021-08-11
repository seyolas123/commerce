module.exports = app => {
    
    const order = require('../controllers/order.controller');

    var router = require("express").Router();

    router.get('/', order.getAllOrders);



    app.use('/api/order', router);
}
