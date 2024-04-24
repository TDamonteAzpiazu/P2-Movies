const Movie = require("../db/models/Movie")


module.exports = {
  getMovies : async (req, res) => {
    const movies = await Movie.find();
    return movies
  } ,

}
