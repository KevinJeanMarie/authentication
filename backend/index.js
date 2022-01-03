const express = require("express")
const app = express()
const port = 5000
const session = require("express-session")
const passport = require("./config/passport")

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})