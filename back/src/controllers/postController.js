const postServices = require("../services/postServices")

module.exports = {

    createMovie: async(req, res)=>{
        try {
            const { title, director , year, duration, genre, rate, poster } = req.body ;
            await postServices.createMovie(title, director , year, duration, genre, rate, poster)
            res.status(201).json({ message: "Película creada correctamente"})
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
} ;