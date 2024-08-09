const mongoose = require("mongoose");



const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    author : {
        type : String,
        required : true,
    },
    publishYear : {
        type : Number,
        required : true,
    },
    publishYear : {
        type : Number,
        required : true,
    },
}, {
    timestamps : true,
});

const Book = new mongoose.model("Book", bookSchema);

module.exports = Book;
