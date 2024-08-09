const express = require("express");
const router = express.Router();

const {createBook, getBook, deleteBook, getAllBooks, updateBook} = require("../controllers/booksController")



// Route for Save a new Book
router.route("/books").post(createBook);

// Route for Get All Books from Database
router.route("/books").get(getAllBooks);

// Route for Get One Book from database by id 
router.route("/books/:id").get(getBook)

// Route for Update a Book
router.route("/books/:id").put(updateBook)

// Route for Delete a Book
router.route("/books/:id").delete(deleteBook)

// app.post("/books", async(req, res)=>{
//     try {
//         if(!req.body.title || !req.body.author || !req.body.publishYear){
//             return res.status(400).json({mssg : "Send all required fields : title, author, publishYear"});
//         }
    
//         const {title, author, publishYear} = req.body;
//         console.log(title, author, publishYear);
//         const book = await Book.create({
//             title : title,
//             author : author,
//             publishYear : publishYear
//         });
//         res.status(200).send(book);
//     } catch (error) {
//         console.log(error);
//     }
// })

// // Route for the One Book from database by id 
// app.get("/books/:id", async(req, res)=>{
//     try {
//         const {id} = req.params;
//         console.log(id);

//         const BookDetail = await Book.findOne({_id : String(id)});
//         if(!BookDetail){
//             return res.status(400).json({mssg: "Information not found"});
//         }
//         res.status(201).send(BookDetail);
//     } catch (error) {
//         console.log(error);
//     }
// })

// // Route for Deleting the Specific Book from database by id 
// app.delete("/books/:id", async(req, res)=>{
//     try {
//         const {id} = req.params;

//         const DeleteBook = await Book.findOneAndDelete({_id: String(id)});
//         if(!DeleteBook){
//             return res.status(400).json({mssg : "Information not found"});
//         }
//         res.status(201).send(DeleteBook);
//     } catch (error) {
//         console.log(error);
//     }
// })

module.exports = router