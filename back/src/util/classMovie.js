class MovieClass {
    constructor( {title, year, director, duration, genre, rate, poster }) {
        if (!title || !year || !director || !duration || !genre || !rate || !poster) {
            throw new Error("Todos los campos son necesarios")
        }

        this.title = title ;
        this.year = year ;
        this.director = director ;
        this.duration = duration ;
        this.genre = genre ;
        this.rate = rate ;
        this.poster = poster ;
    }
}

module.exports = MovieClass