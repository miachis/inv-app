const db = require("../models/queries");

async function categoryControllerGet(req, res) {
    const items = await db.getAllCategories();
    res.render("index.ejs", { list: items });
}

async function categoryControllerIdGet(req, res) {
    let param = req.params.id;
    switch (param) {
        case "soccer":
            param = "Soccer"
            break;
        case "fps":
            param = "First Person Shooter"
            break;
        default:
            alert("error");
            break;
    }
    
    const category_id = await db.getCategoryId(param); // result is an object
    const category_games = await db.getCategoryGames(category_id[0].id);
    res.render("categories.ejs", {list: category_games});
}

module.exports = {
    categoryControllerGet,
    categoryControllerIdGet
};