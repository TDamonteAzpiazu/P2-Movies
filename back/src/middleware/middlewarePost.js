const middlewarePost = (req, res, next) => {
    const { title, director, year, duration, genre, rate, poster } = req.body;

    if (
        typeof title !== 'string' ||
        typeof director !== 'string' ||
        typeof year !== 'number' ||
        typeof duration !== 'string' ||
        !Array.isArray(genre) ||
        typeof rate !== 'number' ||
        typeof poster !== 'string'
    ) {
        return res.status(400).json({ error: 'Uno de los datos otorgados es inválido.' });
    }

    const currentYear = new Date().getFullYear();
    if (year < 1000 || year > currentYear) {
        return res.status(400).json({ error: 'El año todavía no sucedió o es previo al cine.' });
    }

    if (genre.length === 0) {
        return res.status(400).json({ error: 'La película debe pertenecer a al menos un género.' });
    }

    if (rate < 0.1 || rate > 10) {
        return res.status(400).json({ error: 'El campo "rate" debe ser un número entre 0.1 y 10.' });
    }

    next();
};

module.exports = middlewarePost;