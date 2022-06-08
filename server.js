const express = require("express")
const app = express()
const booksRouter = require("./Routes/routes")




/* app.get("/", (req, res, next) => {
    res.json({ "message": "ok" })

})*/
app.use(express.json())
app.use("/books", booksRouter)

app.use(function (req, res) {
    res.status(404)
})

const port = 4000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

