const { getMovies } = require("../services/moviesService")

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const moviesArray = await getMovies()
            res.status(200).json(moviesArray)
        } catch (error) {
            res.status(500).json({error: "No"})
        }
    }
} ;