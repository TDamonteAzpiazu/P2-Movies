const mapMovies = require("./functions.js")
const axios = require ("axios")

// $.get("https://students-api.up.railway.app/movies" , (data) => mapMovies(data)).fail(() => alert("Error al obtener las películas"))

// axios.get("https://students-api.up.railway.app/movies") 
//     .then(response => response.data)
//     .then(movies => mapMovies(movies))
//     .catch(error => alert(error.message))


async function getData() {
    try {
        const data = await axios.get("http://localhost:3000/movies");
        mapMovies(data.data) ;
    } catch (error) {
        alert("Error al obtener las películas.")
    }
}

getData();

