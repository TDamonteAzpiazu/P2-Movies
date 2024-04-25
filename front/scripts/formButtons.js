const axios = require("axios")

const movieTitle = document.getElementById("movieTitle");
const movieYear = document.getElementById("movieYear");
const movieDirector = document.getElementById("movieDirector");
const movieDuration = document.getElementById("movieDuration");
const movieRate = document.getElementById("movieRate");
const moviePoster = document.getElementById("moviePoster");

const genreCheckboxes = document.querySelectorAll(".genre") ;

const currentDate = new Date().getFullYear()

const addMovie = () => {
    event.preventDefault(); 

    if(!movieTitle.value||!movieDirector.value||!movieYear.value||!movieDuration.value||!movieRate.value||!moviePoster.value){
        alert("Faltan campos por completar");
        return
    } else if (movieYear.value > currentDate){
        alert("Coloca una fecha válida")
        return
    } else if (isNaN(movieRate.value) || movieRate.value < 0.1 || movieRate.value > 10) {
        alert("Coloca un puntaje válido")
        return
    }

    const selectedGenres = [];

    genreCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedGenres.push(checkbox.dataset.genre)
        }
    })

    if (selectedGenres.length === 0) {
        alert("Debes seleccionar al menos un género")
        return
    }

    const tiempoOriginal = movieDuration.value;
    const [horas, minutos] = tiempoOriginal.split(":").map(Number);
    const durationString = `${horas}h ${minutos}min`;

    const yearNumber = parseInt(movieYear.value)
    const rateNumber = parseFloat(movieRate.value)

    const newMovie = {
        title : movieTitle.value ,
        year : yearNumber ,
        director : movieDirector.value ,
        duration : durationString ,
        genre : selectedGenres ,
        rate : rateNumber ,
        poster : moviePoster.value
    };
    
    axios.post("http://localhost:3000/movies" , newMovie)
    .then(() => {
        alert("Pelicula enviada.");
    })
    .catch(error =>
    console.error("Error al crear película" , error))
}

const clearForm = () => {
    event.preventDefault();

    [movieTitle, movieDirector, movieYear, movieDuration, movieRate, moviePoster].forEach(element => {
        element.value = "";
    })

    genreCheckboxes.forEach(checkbox => {
        checkbox.checked = false ;
    })   
}

module.exports = { addMovie , clearForm }