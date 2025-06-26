

const {getMoviesByCategory,getCategory, filterMovies} = require("../../database/queries");




const CategoryDetailsController = async function(req, res){
    const {id} = req.params;
    const category = await getCategory(id);
    let movies = null;
    let message = "All Movies in this Category"
    if (req.query.order){
        if (req.query.order == "highrating"){
            movies = await filterMovies("rating", id, false);
            message = "Results for: Highest Rated"
        }
        else if(req.query.order == "lowrating"){
            movies = await filterMovies("rating", id, true);
            message = "Results for: Lowest Rated";
        }
        else if(req.query.order == "recentrelease"){
            movies = await filterMovies("releasedate", id, false);
             message = "Results for: Newest Releases"
        }
        else if(req.query.order == "oldestrelease"){
            movies = await filterMovies("releasedate", id, true);
            message = "Results for: Oldest Releases";
        }
        else{
            return res.render("Pages/index", {content : "../Partials/Errors", errors : [{msg : `Unknown Query, can't order by ${req.query.order}!` }]})
        }
    }
    else{
        movies = await getMoviesByCategory(id);
    }
    res.render("Pages/index", {content : "../Partials/Category", movies, category, path : `/category/cat`, target : `/category/${id}`, order : req.query.order, title : message});
}



module.exports = CategoryDetailsController;

