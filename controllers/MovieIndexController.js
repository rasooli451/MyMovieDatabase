

const {getAllMovies, filterMovies} = require("../database/queries");






const MovieIndexController = async function(req, res) {
    let movies = null;
    let message = "All Movies";
    if (req.query.order){
        if (req.query.order == "highrating"){
            movies = await filterMovies("rating", null, false);
            message = "Results for: Highest Rated";
        }
        else if(req.query.order == "lowrating"){
            movies = await filterMovies("rating", null, true);
            message = "Results for: Lowest Rated";
        }
        else if(req.query.order == "recentrelease"){
            movies = await filterMovies("releasedate", null, false);
            message = "Results for: Newest Releases";
        }
        else if(req.query.order == "oldestrelease"){
            movies = await filterMovies("releasedate", null, true);
            message = "Results for: Oldest Releases";
        }
        else{
            return res.render("Pages/index", {content : "../Partials/Errors", errors : [{msg : `Unknown Query, can't order by ${req.query.order}!` }]})
        }
    }
    else{
        movies = await getAllMovies();
    }
    res.render("Pages/index", {content : "../Partials/MoviesPage", movies, path : "/movies", target : "/movies", order : req.query.order, title : message});
}


module.exports = MovieIndexController;


