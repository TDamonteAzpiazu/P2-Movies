const { Router } = require("express")
const getController = require("../controllers/getController")
const postController = require("../controllers/postController")
const middlewarePost = require("../middleware/middlewarePost")

const moviesRouter = Router()

moviesRouter.get("/" , getController.getAllMovies) ;

moviesRouter.post("/" , middlewarePost , postController.createMovie) ;

module.exports = moviesRouter;