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
        try {
            const { title, director , year, duration, genre, rate, poster } = req.body ;
            await moviesService.createMovie(title, director , year, duration, genre, rate, poster)
            res.status(201).json({ message: "Película creada correctamente"})
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
} ;