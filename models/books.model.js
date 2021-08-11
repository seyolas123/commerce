const { Schema } = require("mongoose");

const mongoose = require(mongoose);
mongoose.Promise = global.Promise;

var bookSchema = mongoose.Schema(

    {
       book_name: String
    },

    { timestamps: true }
);

var bookModel = mongoose.model('Book', bookSchema);
module.exports = bookModel;