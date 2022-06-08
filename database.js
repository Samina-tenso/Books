const sqlite3 = require("sqlite3").verbose()
const md5 = require("md5")



const db = new sqlite3.Database("db.sqlite", (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log("Connected to database")
        db.run(`CREATE TABLE IF NOT EXISTS Books(
        Book_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Title VARCHAR(100) NOT NULL,
        Author VARCHAR(100) NOT NULL,
        Comments TEXT)`,
            (err) => {
                if (err) {
                    console.error(err.message)
                    console.log("Table already exists")
                    return
                }
                else {
                    const insert = "INSERT INTO Books (Title, Author, Comments) VALUES (?, ?, ?)"
                    db.run(insert,
                        ["Leviathan Wakes", "James S.A. Corey", "First in the series"])
                    console.log("worked")
                }
            })

    }
})

module.exports = db
