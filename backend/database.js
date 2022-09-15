const { Client } = require("pg")
const md5 = require("md5")


const db = new Client({
    ssl: {
        rejectUnauthorized: false
    },
    connectionString: ""
});

db.connect();

const bookTable = `CREATE TABLE IF NOT EXISTS books(
        book_ID SERIAL PRIMARY KRY,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        aomments TEXT);` ;


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
