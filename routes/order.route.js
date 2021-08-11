module.exports = app => {
    

    var router = require("express").Router();

    router.get('/', order.getAllOrders);



    app.use('/api/order', router);
}