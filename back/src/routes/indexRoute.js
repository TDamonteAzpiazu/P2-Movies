const { Router } = require("express") ;
const moviesController = require("../controllers/moviesController") ;

const indexRouter = Router() ;

indexRouter.get("/movies" , moviesController.getAllMovies) ;

indexRouter.post("/movies" , moviesController.createMovie) ;

module.exports = indexRouter ; 