



const {getCategory} = require("../database/queries");





const CategoryEditController = async function(req, res){
    const {id} = req.params;
    const category = await getCategory(id);
    if (req.originalUrl.includes("category/editc")){
        res.render("Pages/index", {content : "../Partials/EditCategory", category, path : "/category/editc/"});
    }
    else if(req.originalUrl.includes("editCat"))
        res.render("Pages/index", {content : "../Partials/EditCategory", category, path : "/category/editCat/"});
    else    
        res.render("Pages/index", {content : "../Partials/EditCategory", category, path : "/editc/"});
}



module.exports = CategoryEditController;