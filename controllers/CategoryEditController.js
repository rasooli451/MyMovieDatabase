



const {getCategory} = require("../database/queries");





const CategoryEditController = async function(req, res){
    const {id} = req.params;
    const category = await getCategory(id);

    res.render("Pages/index", {content : "../Partials/EditCategory", category});
}



module.exports = CategoryEditController;