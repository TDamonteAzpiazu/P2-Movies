console.log(tempData);

function mapMovies() {
    const container = document.getElementById("movieContainer");

    const movies = getMovies();
    movies.map(movie => createMovieCard(movie))
    .forEach(card => container.appendChild(card));
}

function getMovies() {
    return tempData
}

function createMovieCard(tempData) {
    const {title, year, director, duration, genre, rate, poster} = tempData ;

    const movieCard = document.createElement("div");
    const movieTitle = document.createElement("a");
    const movieYear = document.createElement("p");
    const movieDirector = document.createElement("p");
    const movieDuration = document.createElement("p");
    const movieGenre = document.createElement("p");
    const movieRate = document.createElement("p");
    const moviePoster = document.createElement("img");

    movieTitle.innerHTML = title ; 
    movieYear.innerHTML = `Año: ${year}`; 
    movieDirector.innerHTML = `Director: ${director}`; 
    movieDuration.innerHTML = `Duración: ${duration}`; 
    movieGenre.innerHTML = `Género: ${genre}`; 
    movieRate.innerHTML = `Puntaje: ${rate}`; 
    moviePoster.src = poster ; 

    movieCard.classList.add("cards"); 
    moviePoster.classList.add("poster"); 
    movieTitle.classList.add("tituloPelicula")
    movieTitle.classList.add("etiqA")

    movieCard.appendChild(movieTitle) ; 
    movieCard.appendChild(moviePoster) ; 
    movieCard.appendChild(movieYear) ; 
    movieCard.appendChild(movieDirector) ; 
    movieCard.appendChild(movieDuration) ; 
    movieCard.appendChild(movieGenre) ; 
    movieCard.appendChild(movieRate) ; 

    return movieCard
}

mapMovies() ;
