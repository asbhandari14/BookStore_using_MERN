const Book = require("../models/bookModel");

const createBook = async (req, res) => {
    try {
        // console.log(req.body.title);
        const { title, author, publishYear } = req.body;
        console.log(req.body)
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res
                .status(400)
                .json({
                    mssg: "Send all required fields : title, author, publishYear",
                });
        }


        console.log(title, author, publishYear);
        const book = await Book.create({
            title: title,
            author: author,
            publishYear: publishYear,
        });
        res.status(200).send(book);
    } catch (error) {
        console.log(error);
    }
};


const getAllBooks = async (req, res) => {
    try {

        const AllBooks = await Book.find({});
        if (!AllBooks) {
            return res.status(400).json({ mssg: "Information not found" });
        }
        // console.log(AllBooks);
        res.status(201).send(AllBooks);
    } catch (error) {
        console.log(error);
    }
};


const getBook = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const BookDetail = await Book.findOne({ _id: String(id) });
        if (!BookDetail) {
            return res.status(400).json({ mssg: "Information not found" });
        }
        res.status(201).send(BookDetail);
    } catch (error) {
        console.log(error);
    }
};


const updateBook=async(req, res)=>{
    try {
        const {title, author, publishYear} = req.body;
        const {id} = req.params;
        const updatedData = await Book.findOneAndUpdate({_id : id}, {title, author, publishYear});
        if(!updatedData){
            res.status(201).json({mssg : "Data not present in Database"});
        }
        res.status(200).send(updatedData);
    } catch (error) {
        console.log(error);
    }
}


const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        const DeleteBook = await Book.findOneAndDelete({ _id: String(id) });
        if (!DeleteBook) {
            return res.status(400).json({ mssg: "Information not found" });
        }
        res.status(201).send(DeleteBook);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { createBook, getBook, deleteBook, getAllBooks, updateBook };
