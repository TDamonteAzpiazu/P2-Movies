const movieTitle = document.getElementById("movieTitle");
const movieYear = document.getElementById("movieYear");
const movieDirector = document.getElementById("movieDirector");
const movieDuration = document.getElementById("movieDuration");
const movieRate = document.getElementById("movieRate");
const moviePoster = document.getElementById("moviePoster");

const genreCheckboxes = document.querySelectorAll(".genre") ;

const addMovie = () => {
    event.preventDefault(); 
    if(movieTitle.value===""||movieDirector.value===""||movieYear.value===""||movieDuration.value===""||movieRate.value===""||moviePoster.value===""){
        alert("Faltan campos por completar");
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

    const newMovie = {
        title : movieTitle.value ,
        year : movieYear.value ,
        director : movieDirector.value ,
        duration : movieDuration.value ,
        genre : selectedGenres ,
        rate : movieRate.value ,
        poster : moviePoster.value
    };
    return newMovie;
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