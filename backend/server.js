const express = require("express")
const booksRouter = require("./routes/routes")
const cors = require("cors")
const app = express()
app.use(cors())
app.use((req, res, next) => {
    express.json()(req, res, err => {
        if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
            console.error(err)
            const message = "invalid input"
            return res.status(400).send(message)
        }
        next()
    })
})

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(booksRouter)
app.use(function (req, res) {
    res.status(404).send()
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
