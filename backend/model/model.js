
const db = require("../database")
console.log(db)

//Get all books 
function getAll() {
    const sql = "SELECT * FROM Books"
    return new Promise((resolve, reject) => {
        db.all(sql, (error, result) => {
            if (error) {
                res.status(500).json({ "error": error.message })
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

//Get one book
function getOne(id) {
    const sql = `SELECT * FROM Books WHERE Book_ID = ${id}`;
    return new Promise((resolve, reject) => {
        db.get(sql, (error, result) => {
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
    const sql = `DELETE FROM Books WHERE Book_ID = ${id}`;
    console.log(sql)
    return new Promise((resolve, reject) => {
        db.exec(sql, (error) => {
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
    const sql = `INSERT INTO Books (Title, Author, Comments) VALUES (?,?,?)`;
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
                const message = "Book has been added"
                resolve(message)

            }
        })
    })
}

//Put book
function putBook(id, title, author, comments) {
    sql = `UPDATE Books SET Title = ?, Author = ?, Comments = ? WHERE BOOK_ID = ${id}`
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
    sql = `UPDATE Books SET
    Title = COALESCE (?, title),
        Author = COALESCE (?, author),
            Comments = COALESCE (?, comments)
            WHERE Book_ID = ${id}`;
    return new Promise((resolve, reject) => {
        db.run(sql, [title, author, comments], (error, result) => {
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