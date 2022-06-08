
const db = require("../database")
console.log(db)

function getAll(callback) {

    const sql = "SELECT * FROM Books"
    return new Promise((resolve, reject) => {



        db.all(sql, [], (error, result) => {
            if (error) {
                res.status(400).json({ "error": error.message })
                reject(error)
            } else {
                resolve(result)
                //books = res.status(200).json({ result })

            }


        })

    })
}















module.exports = {
    getAll
}