
const {RemoveMovie} = require("../../database/queries");






const RemoveMovieController = async function(req, res){
    const {id} = req.params;
    const movieId = id.split(",")[0];
    const categoryId = id.split(",")[1];
    await RemoveMovie(movieId, categoryId);
    if (req.url.includes("movies"))
        res.redirect("/movies");
    else
        res.redirect("/");
}



module.exports = RemoveMovieController;