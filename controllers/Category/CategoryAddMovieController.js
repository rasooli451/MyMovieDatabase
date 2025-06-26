
const {getAllCategories} = require("../../database/queries");


const CategoryAddMovieController = async function(req, res){
    const categories = await getAllCategories();
    const {id} = req.params;
    res.render("Pages/index", {content : "../Partials/AddMovie", fromCategory : true, categories, id})
}



module.exports = CategoryAddMovieController;