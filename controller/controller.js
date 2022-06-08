const model = require("../model/model")

getAllBooks = (req, res, next) => {
    model.getAll().then(books => {


        res.json({
            "message": "success",
            "data": books
        })
    }).catch(next)
}
module.exports = {
    getAllBooks
}