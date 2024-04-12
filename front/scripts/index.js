const mapMovies = require("./functions.js")

$.get("https://students-api.up.railway.app/movies" , (data) => mapMovies(data)).fail(() => alert("Error al obtener las películas"))



