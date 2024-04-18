const express = require ("express")  ;
const indexRouter = require("./routes/indexRoute")

const app = express() ;

const morgan = require("morgan")
const cors = require("cors")
app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())

app.use(indexRouter)

module.exports = app ;