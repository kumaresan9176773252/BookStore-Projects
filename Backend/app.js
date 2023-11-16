const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose.connect("mongodb+srv://admin:JcJ2LxSQ48vyO7dr@cluster0.gbz1jey.mongodb.net/BooksStore?retryWrites=true&w=majority"
).then(() => console.log("Connected To Database"))
    .then(() => {
        app.listen(5000);
    }).catch(() => console.log(err));


//JcJ2LxSQ48vyO7dr