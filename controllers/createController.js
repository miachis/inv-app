const db = require("../models/queries");

async function createGameControllerGet(req, res) {
    res.render("create.ejs");
}

function createGameControllerPost(req, res) {
    const { title, developer_id, category_id } = req.body
    const item = [title, developer_id, category_id];
    db.createGame(item);
    res.redirect("/");
}


module.exports = {
    createGameControllerGet,
    createGameControllerPost
};