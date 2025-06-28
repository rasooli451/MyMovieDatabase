
const {Client} = require("pg");
require("dotenv").config();


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






async function Main(){
    const client = new Client({
        connectionString : `postgresql://${process.env.USER}:${process.env.PASSWORD}@localhost:5432/${process.env.DATABASE}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}




Main();