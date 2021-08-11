const { Schema } = require("mongoose");

const mongoose = require(mongoose);
mongoose.Promise = global.Promise;

var userSchema = mongoose.Schema(

    {
        username: String,
        password: String
    },

    { timestamps: true }
);

var userModel = mongoose.model('User', userSchema);
module.exports = userModel;