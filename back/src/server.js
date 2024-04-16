const express = require ("express")  ;
const app = express() ;
const router = require("./routes/indexRoute")

app.use(router)

module.exports = app ;