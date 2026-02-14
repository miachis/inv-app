const pool = require("./pool");

// CRUD functionality

async function createGame(item) {
    await pool.query("INSERT INTO games(title, developer_id, category_id) VALUES ($1, $2, $3)", item);
}

async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories");
    return rows;
}

async function updateGame() {
    // await pool.query()
}
 
async function deleteGame() {
    // await pool.query()
}

async function getCategoryGames(category_id) {
    const { rows } = await pool.query(`
        SELECT * FROM games 
        WHERE category_id = '${category_id}';
        `);
    return rows;
}

async function getCategoryId(category_name) {
   const { rows } = await pool.query(`
    SELECT id FROM categories 
    WHERE category_name = '${category_name}';
    `);
   return rows;
}

module.exports = {
    createGame,
    getAllCategories,
    updateGame,
    deleteGame,
    getCategoryGames,
    getCategoryId
};