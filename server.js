const express = require("express")
const app = express()

const port = 4000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.get("/", (req, res, next) => {
    res.json({ "message": "ok" })
})

app.use(function (req, res) {
    res.status(404)
})