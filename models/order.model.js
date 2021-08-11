const { Schema } = require("mongoose");

const mongoose = require(mongoose);
mongoose.Promise = global.Promise;

var orderSchema = mongoose.Schema(

    {
        order_status: {
            type: Number,
            default: 1
        },

        order_id: {
            type: String,
        },
        
        book_id: {
            type: Schema.Types.ObjectId, ref: 'Book', required: true
        },

        user_id: {
            type: Schema.Types.ObjectId, ref: 'User', required: true
        },

        active: {
            type: Boolean,
            default: true
        },

        order_date: {
            type: Date,
            default: Date.now()
        }

    },

    { timestamps: true }
);

var orderModel = mongoose.model('Order', orderSchema);
module.exports = orderModel;