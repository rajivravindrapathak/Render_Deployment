const express = require('express')

const app = express()

const PORT = process.env.PORT || 2001

require("dotenv").config()

app.get("/", (req, res) => {
    res.send("hello deploy")
})

app.listen(PORT, () => {
    console.log(`listnng on port ${PORT}`)
})