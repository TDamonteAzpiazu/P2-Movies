const moviesService = require("../services/moviesService")

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const moviesArray = await moviesService.getMovies()
            res.status(200).json(moviesArray)
        } catch (error) {
            res.status(500).json({error: "No"})
        }
    } ,

    createMovie: async(req, res)=>{
        const {title, year, director, duration, genre, rate, poster} = req.body ;
        moviesService.createMovie()
    }
} ;