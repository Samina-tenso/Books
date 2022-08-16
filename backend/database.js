const sqlite3 = require("sqlite3").verbose()
const md5 = require("md5")


const db = new sqlite3.Database("db.sqlite", (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log("Connected to database")

    }
})

const bookTable = `CREATE TABLE IF NOT EXISTS Books(
        Book_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Title VARCHAR(100) NOT NULL,
        Author VARCHAR(100) NOT NULL,
        Comments TEXT);` ;


db.run(bookTable, err => {

    if (err) {
        console.error(err.message)
        console.log("Table already exists")
        return
    }
    else {
        console.log("Created Books table")
        const insert = "INSERT INTO Books ( Book_ID, Title, Author, Comments) VALUES (1, 'Leviathan Wakes', 'James S.A.Corey', 'First in the series') "
        db.run(insert, err => {
            if (err) {
                return console.error(err.message)
            }
            console.log("Created a book")
        })

    }
})
















module.exports = db
