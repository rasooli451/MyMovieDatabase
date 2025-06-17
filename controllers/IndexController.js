
const {getAllCategories, getAllMovies} = require("../database/queries");
const asyncHandler = require("express-async-handler");

const IndexController = asyncHandler(async function(req, res){
    const categories = await getAllCategories();
    const movies = await getAllMovies();
    res.render("Pages/index", {content : "../Partials/homePage", categories, movies});
})



module.exports = IndexController;






















