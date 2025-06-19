


const {getMovie, getAllCategories} = require("../database/queries");



const EditMovieController = async function(req, res){
    const {id} = req.params;
    const movie = await getMovie(id);
    const categories = await getAllCategories();

    res.render("Pages/index", {content : "../Partials/EditMovie", movie : movie, categories});
}




module.exports = EditMovieController;

