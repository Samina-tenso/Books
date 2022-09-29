const express = require("express")
const booksRouter = express.Router()

const booksController = require("../controller/controller")

booksRouter.get("/books", booksController.getAllBooks)

booksRouter.get("/books/:id", booksController.getOneBook)

booksRouter.delete("/books/:id", booksController.deleteOneBook)

booksRouter.post("/books", booksController.addOneBook)

booksRouter.put("/books/:id", booksController.putOneBook)

booksRouter.patch("/books/:id", booksController.patchOneBook)

module.exports = booksRouter