
const db = require("../database")
console.log(db)

//Get all books 
function getAll() {
    console.log("done")
    const sql = "SELECT * FROM books ORDER BY book_ID DESC";
    return new Promise((resolve, reject) => {
        db.query(sql, (error, result) => {
            if (error) {
                console.log({ "error": error.message })
                reject(error)
            } else {
                console.log("hello")
                console.log(result.rows)
                resolve(result.rows)
            }
        })
    })
}

//Get one book
function getOne(id) {
    console.log(id)
    const sql = "SELECT * FROM books WHERE book_ID = ($1);"
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}


// Delete book
function deleteBook(id) {
    const sql = `DELETE FROM Books WHERE book_id = ($1)`;
    console.log(sql)
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (error) => {
            if (error) {
                console.log(error.message)
                reject(error)
            } else {
                const message = "book has been deleted"
                resolve(message)
            }
        })

    })
}

// Post/add book
function addBook(title, author, comments) {
    const sql = `INSERT INTO books (title, author, comments) VALUES ($1, $2, $3);`
    return new Promise((resolve, reject) => {
        db.query(sql, [title, author, comments], (error) => {
            if (!title || !author || !comments) {
                const message = "Book was not added"
                reject(error, message)
            }
            if (error) {
                console.log(error.message)
                reject(error)
            } else {
                const message = "Book has been added"
                resolve(message)

            }
        })
    })
}

//Put book
function putBook(id, title, author, comments) {
    sql = "UPDATE Books SET title = $2, author = $3, comments = $4 WHERE book_ID = ($1);"
    return new Promise((resolve, reject) => {
        db.run(sql, [title, author, comments], (error) => {
            if (!title || !author || !comments) {
                const message = "You are missing input value"
                reject(error, message)
            }
            if (error) {
                console.log(error.message)
                reject(error)
            } else {
                const message = "Book info was updated"
                resolve(message)
            }
        })
    })
}

//Patch book
function patchBook(id, title, author, comments) {
    sql = "UPDATE books SET title = COALESCE ($2, title),author = COALESCE ($3, author),comments = COALESCE ($4, comments) WHERE book_ID = ($1);"
    return new Promise((resolve, reject) => {
        db.run(sql, [id, title, author, comments], (error, result) => {
            if (error) {
                console.log(error.message)
                reject(error)
            } else {
                const message = "new book info"
                resolve(message)
            }
        })
    })
}

module.exports = {
    getAll,
    getOne,
    deleteBook,
    addBook,
    putBook,
    patchBook

}