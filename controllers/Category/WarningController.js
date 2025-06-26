




const WarningController = function(req, res){
    const {id} = req.params;
    if (req.originalUrl.includes("category")){
        res.render("Pages/index", {content : "../Partials/Warning", path : "/category/removec/", redirect : "/category", id });
    }
    else    
        res.render("Pages/index", {content : "../Partials/Warning", path : "/removec/", redirect : "/", id});
}



module.exports = WarningController;