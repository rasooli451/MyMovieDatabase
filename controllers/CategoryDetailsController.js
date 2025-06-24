

const {getMoviesByCategory,getCategory, filterMovies} = require("../database/queries");




const CategoryDetailsController = async function(req, res){
    const {id} = req.params;
    const category = await getCategory(id);
    let movies = null;
    if (req.query.order){
        if (req.query.order == "highrating"){
            movies = await filterMovies("rating", id, false);
        }
        else if(req.query.order == "lowrating"){
            movies = await filterMovies("rating", id, true);
        }
        else if(req.query.order == "recentrelease"){
            movies = await filterMovies("releasedate", id, false);
        }
        else if(req.query.order == "oldestrelease"){
            movies = await filterMovies("releasedate", id, true);
        }
        else{
            return res.render("Pages/index", {content : "../Partials/Errors", errors : [{msg : `Unknown Query, can't order by ${req.query.order}!` }]})
        }
    }
    else{
        movies = await getMoviesByCategory(id);
    }
    res.render("Pages/index", {content : "../Partials/Category", movies, category, path : `/category/cat`, target : `/category/${id}`, order : req.query.order});
}



module.exports = CategoryDetailsController;

