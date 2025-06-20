

const {getAllMovies} = require("../database/queries");






const MovieIndexController = async function(req, res) {
    const movies = await getAllMovies();
    res.render("Pages/index", {content : "../Partials/MoviesPage", movies, path : "/movies"});
}


module.exports = MovieIndexController;


