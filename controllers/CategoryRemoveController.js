

const {RemoveCategory} = require("../database/queries");





const CategoryRemoveController = async function(req, res){
    
    
    const {id} = req.params;
    await RemoveCategory(id);
        if (req.originalUrl.includes("category"))
            res.redirect("/category");
        else    
            res.redirect("/");
}



module.exports = CategoryRemoveController;