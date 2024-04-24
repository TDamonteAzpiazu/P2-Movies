const getServices = require("../services/getServices")

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const moviesArray = await getServices.getMovies()
            res.status(200).json(moviesArray)
        } catch (error) {
            res.status(500).json({error: "No"})
        }
    } 

} ;