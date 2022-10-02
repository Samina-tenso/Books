const model = require("../model/model")

getAllBooks = (req, res) => {
    model.getAll().then(books => {
        res.status(200).send(books)
    }).catch((err) => {
        console.log(err)
        res.status(404).json({ message: "Books were not found" })
    })
}

getOneBook = (req, res) => {
    const id = req.params.id
    model.getOne(id).then(book => {
        if (book) {
            res.status(200).send(book)
        } else {
            res.status(404).send(`Book with id ${id}  was not found`)
        }
    })
}


deleteOneBook = (req, res) => {
    const id = req.params.id
    console.log(id)
    model.deleteBook(id).then((book) => {
        console.log(book)
        res.status(204).json({ message: "Book was deleted" })
    }).catch((err) => {
        console.log(err)
        res.status(400).json({ message: "Book was not deleted" })
    })
}

addOneBook = (req, res) => {
    model.addBook(req.body.title, req.body.author, req.body.comments).then((book) => {
        console.log("book")
        res.status(201).json({ message: "Book was added", book })
    }).catch((err) => {
        console.log(err)
        res.status(400).json({ message: "Book was not added" })
    })
}

putOneBook = (req, res) => {
    const id = req.params.id;
    model.putBook(id, req.body.title, req.body.author, req.body.Comments).then((book) => {
        console.log(book)
        res.status(200).json({ message: "Updated book info" })
    }).catch((err) => {
        console.log(err)
        res.status(400).json({ message: "Book info was not updated" })
    })
}

patchOneBook = (req, res) => {
    const id = req.params.id;
    model.patchBook(id, req.body.Title, req.body.Author, req.body.Comments).then((book) => {
        console.log(book)
        res.status(200).json({ message: "Updated Book info" })
    }).catch((err) => {
        console.log(err)
        res.status(400).json({ message: "Book info was not updated" })
    })
}

module.exports = {
    getAllBooks,
    getOneBook,
    deleteOneBook,
    addOneBook,
    putOneBook,
    patchOneBook
}