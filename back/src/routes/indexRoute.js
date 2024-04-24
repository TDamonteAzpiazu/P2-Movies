const { Router } = require("express") ;
const moviesRouter = require("./moviesRoute")
// const moviesController = require("../controllers/moviesController") ;

const indexRouter = Router() ;

indexRouter.use("/movies" , moviesRouter)

module.exports = indexRouter ; 