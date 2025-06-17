

const {getAllCategories} = require("../database/queries");



const MovieFormController = async function(req, res){
    const categories = await getAllCategories();
    res.render("Pages/index", {content : "../Partials/AddMovie", fromCategory : false, categories})
}



module.exports = MovieFormController;

