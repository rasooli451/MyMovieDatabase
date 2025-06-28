

const express = require("express");
const app = express();
const PORT = 5000;
const path = require("node:path");
const assetSource = path.join(__dirname, "public");
const fileUploader = require("express-fileupload");
const Pool = require("./database/pool");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetSource));
app.use(express.urlencoded({extended : true}));
app.use(fileUploader());

app.use(express.json());

const indexRouter = require("./routes/IndexRouter");
const CategoryRouter = require("./routes/CategoryRouter");
const MovieRouter = require("./routes/MovieRouter");







app.use("/", indexRouter);





app.use("/category", CategoryRouter);

//

app.use("/movies", MovieRouter)


app.get('/ping-db', async (req, res) => {
  try {
    const SQL = `

CREATE TABLE IF NOT EXISTS movies (
   movie_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   Name VARCHAR (200),
   releasedate DATE,
   rating INTEGER,
   category_id INTEGER,
   director_id INTEGER,
   picture BYTEA,
   datatype VARCHAR (64)
);


CREATE TABLE IF NOT EXISTS categories(
    category_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR (40),
    description VARCHAR (3000),
    picture BYTEA,
    datatype VARCHAR (64),
    count INTEGER
);


CREATE TABLE IF NOT EXISTS directors(
    director_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(80)
);

ALTER TABLE movies
ADD FOREIGN KEY(category_id)
REFERENCES categories(category_id) ON DELETE CASCADE;


ALTER TABLE movies
ADD FOREIGN KEY(director_id)
REFERENCES directors(director_id) ON DELETE SET NULL;
`;
    await Pool.query(SQL);
    res.send(`OK — DB connected, time: ${result.rows[0].now}`);
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).send(`DB ERROR: ${err.message}`);
  }
});


app.use((req, res, next)=>{
    res.status(404).render("Pages/index", {content : "../Partials/Errors", errors : [{msg : "Sorry, the page you were looking for cannot be found."}]})
})


app.use((err, req, res, next) =>{
    res.status(500).render("Pages/index", {content : "../Partials/Errors", errors : [{msg : err.message}]})
})











app.listen(PORT, ()=>{
    console.log(`Server Listening on PORT ${PORT}`);
})