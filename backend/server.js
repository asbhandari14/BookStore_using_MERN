require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const Book = require("./models/bookModel");
const router = require("./routes/booksRoute");
const cors = require("cors");

// Middleware for parsing the request body
app.use(express.json());

// Middleware for handline CORS policy
app.use(cors({
    origin: 'http://localhost:5173',
    methods : "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials : true,
  }));
// app.use(cors({
//     origin : "http:localhost:3000",
//     methods : ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders : ['Content-Type']
// }));

// Middleware for the routes 
app.use("/api", router);

const PORT = process.env.PORT;





mongoose.connect(process.env.URI)
.then(()=>{
    app.listen(PORT, "127.0.0.1", ()=>{
        console.log(`Database is connected at the port : ${PORT} `)
    })
})
.catch((err)=>{
    console.log(err);
})

