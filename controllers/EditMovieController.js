


const {getMovie, getAllCategories} = require("../database/queries");



const EditMovieController = async function(req, res){
    const {id} = req.params;
    const movie = await getMovie(id);
    const categories = await getAllCategories();
    if (req.originalUrl.includes("movies")){
        res.render("Pages/index", {content : "../Partials/EditMovie", movie, categories, path : "/movies"});
    }
    else if(req.originalUrl.includes("category")){
        res.render("Pages/index", {content : "../Partials/EditMovie", movie, categories, path : "/category/cat"});
    }
    else{
        res.render("Pages/index", {content : "../Partials/EditMovie", movie, categories, path : ""})
    }
    /*res.render("Pages/index", {content : "../Partials/EditMovie", movie : movie, categories});*/
}




module.exports = EditMovieController;

