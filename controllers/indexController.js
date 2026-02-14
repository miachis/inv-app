const db = require("../models/queries");

async function getCategories(req, res) {
    res.redirect('categories');
}

module.exports = {
    getCategories
};