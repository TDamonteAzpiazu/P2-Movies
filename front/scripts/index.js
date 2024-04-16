const mapMovies = require("./functions.js")
const axios = require ("axios")

// $.get("https://students-api.up.railway.app/movies" , (data) => mapMovies(data)).fail(() => alert("Error al obtener las películas"))

async function getData() {
    try {
        const data = await axios.get("https://students-api.up.railway.app/movies");
        mapMovies(data.data) ;
    } catch (error) {
        alert("Error al obtener las películas.")
    }
}

getData();

