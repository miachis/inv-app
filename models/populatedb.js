const { Client } = require("pg");

//THIS FILE IS NOT BE RUN JUST ONCE!!! 

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    category_name VARCHAR(255),
    href VARCHAR(45)
);

INSERT INTO categories (category_name, href) 
VALUES 
('Soccer', '/soccer'),
('First Person Shooter', '/fps');

CREATE TABLE IF NOT EXISTS developers (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    developer_name VARCHAR(255)
);

INSERT INTO developers (developer_name) 
VALUES 
('Type A'),
('Type B'),
('Type C');

CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255),
    developer_id INTEGER,
    category_id INTEGER
);
`;

async function populateProd() {
    console.log('seeding');
    const client = new Client({
        connectionString: process.argv[2],
        ssl:{
            rejectUnauthorized: false
        }
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

populateProd();