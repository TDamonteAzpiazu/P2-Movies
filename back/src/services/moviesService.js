const MovieClass = require ("../util/classMovie")
const Movie = require("../models/Movie")


module.exports = {
  getMovies : async (req, res) => {
    const movies = await Movie.find();
    return movies
  } ,

  createMovie: async() => {
    const movie = Movie.create()
  }

}