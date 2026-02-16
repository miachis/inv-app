const db = require("../models/queries");

async function categoryControllerGet(req, res) {
    const items = await db.getAllCategories();
    res.render("index.ejs", { list: items });
}

async function categoryControllerIdGet(req, res) {
    const title = req.params.id;
    let param = req.params.id;
    switch (param) {
        case "soccer":
            param = "Soccer"
            break;
        case "fps":
            param = "First Person Shooter"
            break;
        default:
            param = ""
            break;
    }
    
    const category_id = await db.getCategoryId(param); // result is an object
    const category_games = await db.getCategoryGames(category_id[0].id);
    res.render("categories.ejs", {
        category: param,
        list: category_games,
        title: title
    });
}

async function categoryControllerUpdateGet(req, res) {
    let { id, category } = req.params;
    switch (category) {
        case "soccer":
            category = "Soccer"
            break;
        case "fps":
            category = "First Person Shooter"
            break;
        default:
            category = ""
            break;
    }
    const game_info = await db.getGameInfo(id, category)
    const categories = await db.getAllCategories();
    const developers = await db.getAllDevelopers();
    res.render("update.ejs", {
        game: game_info,
        categories: categories,
        developers: developers
     });
}

async function categoryControllerUpdatePost(req, res) {
    // update the entry in the db
    const { id, title, category_id, developer_id } = req.body;
    await db.updateGame({
        id: id,
        title: title,
        category_id: category_id,
        developer_id: developer_id
    });
    res.redirect("/");
}

module.exports = {
    categoryControllerGet,
    categoryControllerIdGet,
    categoryControllerUpdateGet,
    categoryControllerUpdatePost
};