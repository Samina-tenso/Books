const express = require("express")
const booksRouter = express.Router()

const booksController = require("../controller/controller")

booksRouter.get("/", booksController.getAllBooks)

module.exports = booksRouter