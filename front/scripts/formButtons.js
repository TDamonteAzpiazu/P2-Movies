const movieTitle = document.getElementById("movieTitle");
const movieYear = document.getElementById("movieYear");
const movieDirector = document.getElementById("movieDirector");
const movieDuration = document.getElementById("movieDuration");
const movieRate = document.getElementById("movieRate");
const moviePoster = document.getElementById("moviePoster");

const genreAction = document.getElementById("genreAction");
const genreAnimated = document.getElementById("genreAnimated");
const genreAdventure = document.getElementById("genreAdventure");
const genreWar = document.getElementById("genreWar");
const genreBiopic = document.getElementById("genreBiopic");
const genreSciFi = document.getElementById("genreSciFi");
const genreComedy = document.getElementById("genreComedy");
const genreDocumentary = document.getElementById("genreDocumentary");
const genreDrama = document.getElementById("genreDrama");
const genreFantasy = document.getElementById("genreFantasy");
const genreHistorical = document.getElementById("genreHistorical");
const genreMusical = document.getElementById("genreMusical");
const genrePolicial = document.getElementById("genrePolicial");
const genreRomantic = document.getElementById("genreRomantic");
const genreSuspense = document.getElementById("genreSuspense");
const genreTerror = document.getElementById("genreTerror");

const addMovie = () => {
    event.preventDefault(); 
    if(movieTitle.value===""||movieDirector.value===""||movieYear.value===""||movieDuration.value===""||movieRate.value===""||moviePoster.value===""){
        alert("Faltan campos por completar");
        return
    }

    if(!genreAction.checked && !genreAnimated.checked && !genreAdventure.checked && !genreWar.checked &&!genreBiopic.checked && !genreSciFi.checked && !genreComedy.checked && !genreDocumentary.checked && !genreDrama.checked && !genreFantasy.checked && !genreHistorical.checked && !genreMusical.checked && !genrePolicial.checked && !genreRomantic.checked && !genreSuspense.checked && !genreTerror.checked) {
        alert("Debes seleccionar al menos un género");
        return
    }

    const selectedGenres = [];

    if (genreAction.checked) selectedGenres.push("Acción");
    if (genreAnimated.checked) selectedGenres.push("Animada");
    if (genreAdventure.checked) selectedGenres.push("Aventura");
    if (genreWar.checked) selectedGenres.push("Bélica");
    if (genreBiopic.checked) selectedGenres.push("Biopic");
    if (genreSciFi.checked) selectedGenres.push("Ciencia Ficción");
    if (genreComedy.checked) selectedGenres.push("Comedia");
    if (genreDocumentary.checked) selectedGenres.push("Documental");
    if (genreDrama.checked) selectedGenres.push("Drama");
    if (genreFantasy.checked) selectedGenres.push("Fantasía");
    if (genreHistorical.checked) selectedGenres.push("Histórica");
    if (genreMusical.checked) selectedGenres.push("Musical");
    if (genrePolicial.checked) selectedGenres.push("Policial");
    if (genreRomantic.checked) selectedGenres.push("Romántica");
    if (genreSuspense.checked) selectedGenres.push("Suspenso");
    if (genreTerror.checked) selectedGenres.push("Terror");    

    const newMovie = {};
    newMovie.title = movieTitle.value
    newMovie.year = movieYear.value
    newMovie.director = movieDirector.value
    newMovie.duration = movieDuration.value
    newMovie.genre = selectedGenres
    newMovie.rate = movieRate.value
    newMovie.poster = moviePoster.value
    return newMovie;
}

addMovieButton.addEventListener("click" , addMovie);

const clearForm = () => {
    event.preventDefault();
    movieTitle.value = "";    
    movieDirector.value = "";    
    movieYear.value = "";    
    movieDuration.value = ""; 

    genreAction.checked = false;    
    genreAnimated.checked = false;    
    genreAdventure.checked = false;    
    genreWar.checked = false;     
    genreBiopic.checked = false;    
    genreSciFi.checked = false; 
    genreComedy.checked = false; 
    genreDocumentary.checked = false; 
    genreDrama.checked = false;   
    genreFantasy.checked = false; 
    genreHistorical.checked = false; 
    genreMusical.checked = false;  
    genrePolicial.checked = false; 
    genreRomantic.checked = false; 
    genreSuspense.checked = false;  
    genreTerror.checked = false;    
    
    movieRate.value = "";    
    moviePoster.value = "";    
}

clearFormButton.addEventListener("click" , clearForm);