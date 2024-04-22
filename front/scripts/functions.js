const container = document.getElementById("movieContainer");

function mapMovies(data) {

    const movies = getMovies(data);
    movies.map(movie => createMovieCard(movie))
    .forEach(card => container.appendChild(card));

}

function getMovies(data) {
    return data ;
}

function createMovieCard(data) {
    const {title, year, director, duration, genre, rate, poster} = data ;

    const movieCard = document.createElement("div");
    const moviePoster = document.createElement("img");
    const movieInfo = document.createElement("div");
    const movieTitle = document.createElement("a");
    const movieYear = document.createElement("p");
    const movieDirector = document.createElement("p");
    const movieDuration = document.createElement("p");
    const movieGenre = document.createElement("p");
    const movieRate = document.createElement("p");

    console.log(genre)

    moviePoster.src = poster ; 
    movieTitle.innerHTML = title ; 
    movieYear.innerHTML = `Año: ${year}`; 
    movieDirector.innerHTML = `Director: ${director}`; 
    movieDuration.innerHTML = `Duración: ${duration}`; 
    movieGenre.innerHTML = `Género: ${genre.join(", ")}`; 
    movieRate.innerHTML = `Puntaje: ${rate}`; 

    movieCard.classList.add("cards"); 
    moviePoster.classList.add("poster"); 
    movieInfo.classList.add("info")
    movieTitle.classList.add("tituloPelicula")
    movieTitle.classList.add("etiqA")

    movieInfo.appendChild(movieTitle) ; 
    movieInfo.appendChild(movieYear) ; 
    movieInfo.appendChild(movieDirector) ; 
    movieInfo.appendChild(movieDuration) ; 
    movieInfo.appendChild(movieGenre) ; 
    movieInfo.appendChild(movieRate) ; 
    
    movieCard.appendChild(moviePoster) ;
    movieCard.appendChild(movieInfo) ;

    return movieCard;
}

module.exports = mapMovies;