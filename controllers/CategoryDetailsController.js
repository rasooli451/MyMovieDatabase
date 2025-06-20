

const {getMoviesByCategory,getCategory} = require("../database/queries");




const CategoryDetailsController = async function(req, res){
    const {id} = req.params;
    const category = await getCategory(id);
    const movies = await getMoviesByCategory(id);
    res.render("Pages/index", {content : "../Partials/Category", movies, category, path : `/category/cat`});
}



module.exports = CategoryDetailsController;

