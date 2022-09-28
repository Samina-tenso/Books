
const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()
const md5 = require("md5")
const db = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT

});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected")
});

const bookTable = `CREATE TABLE IF NOT EXISTS books(
        book_ID SERIAL PRIMARY KEY,
        title VARCHAR NOT NULL,
        author VARCHAR NOT NULL,
        comments VARCHAR
        );`


db.query(bookTable, err => {

    if (err) {
        console.error(err.message)
        console.log("Table already exists")
        return
    }
    else {
        console.log("Created Books table")
        const sql = "INSERT INTO books ( book_ID, title, author, comments) VALUES (1, 'Leviathan Wakes', 'James S.A.Corey', 'First in the series')"
        db.query(sql, err => {
            if (err) {
                return console.error(err.message)
            }
            console.log("Created a book")
        })

    }
})

module.exports = db
