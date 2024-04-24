const MovieClass = require ("../util/classMovie")
const Movie = require("../models/Movie")


module.exports = {
  getMovies : async (req, res) => {
    const movies = await Movie.find();
    return movies
  } ,

  createMovie: async(title, director, year, duration, genre, rate, poster) => {
    try {
      const newMovie = Movie.create({title, director, year, duration, genre, rate, poster})
      return newMovie
    } catch (error) {
      throw Error("Error en el proceso de crear películas")
    }
  }

}