const { Router } = require("express")
const getController = require("../controllers/getController")
const postController = require("../controllers/postController")

const moviesRouter = Router()

moviesRouter.get("/" , getController.getAllMovies) ;

moviesRouter.post("/" , postController.createMovie) ;

module.exports = moviesRouter;