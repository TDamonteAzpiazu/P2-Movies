require("dotenv").config() ;
const mongoose = require("mongoose") ;

const URI = `${process.env.DB_HOST}+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.rom0cf2.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`

const dbCon = async () => {
    //conectar con la base de datos
    await mongoose.connect(URI)
};

module.exports = dbCon ;