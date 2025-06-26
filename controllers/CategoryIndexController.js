


const {getAllCategories} = require("../database/queries");





const CategoryIndexController = async function(req, res){
    const categories = await getAllCategories();

    res.render("Pages/index", {content : "../Partials/CategoriesPage", categories, path : "category", title : "All Categories"});
}


module.exports = CategoryIndexController;