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
    console.log("Añadir Peliculas funciona")
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