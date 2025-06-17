
const {Client} = require("pg");
require("dotenv").config();


const SQL = `
INSERT INTO Movies (Name,releaseDate,rating,category_id,director_id) VALUES('The Dark Knight', '2008-07-18',90,NULL,NULL);

INSERT INTO categories (name, description) VALUES('Action', 'The Action genre is known for its fast-paced sequences, physical stunts, chases, fights, explosions, and intense conflict. It often focuses on heroes overcoming obstacles through strength, skill, or bravery, and emphasizes excitement, danger, and high stakes. Common themes include justice, revenge, and survival, with narratives that keep audiences on the edge of their seats.');

INSERT INTO directors (name) VALUES('Christopher Nolan');

UPDATE Movies SET director_id=1 WHERE Movie_id=1;
UPDATE Movies SET category_id=1 WHERE Movie_id=1;
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