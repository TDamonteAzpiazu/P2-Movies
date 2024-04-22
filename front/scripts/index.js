const mapMovies = require("./functions.js")
const { addMovie , clearForm} = require("./formButtons.js")
const axios = require ("axios")

// $.get("https://students-api.up.railway.app/movies" , (data) => mapMovies(data)).fail(() => alert("Error al obtener las películas"))

// axios.get("https://students-api.up.railway.app/movies") 
//     .then(response => response.data)
//     .then(movies => mapMovies(movies))
//     .catch(error => alert(error.message))


if (window.location.href === "http://127.0.0.1:8080/index.html" || window.location.href === "http://127.0.0.1:8080/") {
    async function getData() {
        try {
            const data = await axios.get("http://localhost:3000/movies");
            mapMovies(data.data) ;
        } catch (error) {
            alert("Error al obtener las películas.")
        }
    }
    getData();
}

const addMovieButton = document.getElementById("addMovieButton") ;
addMovieButton?.addEventListener("click" , addMovie);

const clearFormButton = document.getElementById("clearFormButton") ;
clearFormButton?.addEventListener("click" , clearForm);



