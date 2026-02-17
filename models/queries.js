const pool = require("./pool");

// CRUD functionality

async function createGame(item) {
    await pool.query("INSERT INTO games(title, developer_id, category_id) VALUES ($1, $2, $3)", item);
}

async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories");
    return rows;
}

async function getAllDevelopers() {
    const { rows } = await pool.query("SELECT * FROM developers")
    return rows;
}

async function updateGame({id, title, category_id, developer_id}) {
    await pool.query(`
        UPDATE games
        SET category_id = $1,
        developer_id = $2,
        title = $3
        WHERE games.id = $4;
    `, [category_id, developer_id, title, id]);
}
 
async function deleteGame(id) {
    await pool.query("DELETE FROM games WHERE id = $1", [id]);
}

async function getCategoryGames(category_id) {
    const { rows } = await pool.query(`
        SELECT games.id, title, developer_name FROM games 
        JOIN developers 
        ON developers.id = games.developer_id
        WHERE category_id = $1;
    `, [category_id]);
    return rows;
}

async function getCategoryId(category_name) {
   const { rows } = await pool.query(`
        SELECT id FROM categories 
        WHERE category_name = $1;
    `, [category_name]);
   return rows;
}

async function getGameInfo(id, category) {
    const { rows } = await pool.query(`
        SELECT games.id, title, category_name, developer_name FROM games
        JOIN categories 
        ON games.category_id = categories.id
        JOIN developers 
        ON games.developer_id = developers.id
        WHERE games.id = $1
        AND categories.category_name = $2;
    `, [id, category]);
    return rows;
}

module.exports = {
    createGame,
    getAllCategories,
    updateGame,
    deleteGame,
    getCategoryGames,
    getCategoryId,
    getGameInfo,
    getAllDevelopers
};