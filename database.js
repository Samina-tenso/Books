const sqlite3 = require("sqlite3").verbose()
const md5 = require("md5")



const db = new sqlite3.Database("./db.sqlite", (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log("Connected to database")
        db.run(`CREAT TABLE IF NOT EXISTS Books(
        Book_ID INTEGER PRIMARY KEY,
        Title VARCHAR(100) NOT NULL,
        Author VARCHAR(100) NOT NULL,
        Comments TEXT)`,
            (err) => {
                if (err) {
                    console.err(err.message)
                    return
                }
                else {
                    const insert = "INSERT INTO Books (Book_ID, Title, Author, Comments) VALUES (?, ?, ?, ?)"
                    db.run(insert,
                        ["1", "Leviathan Wakes", "James S.A. Corey", "First in the series"])
                }
            })

    }
})

module.exports = db