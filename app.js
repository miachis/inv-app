require('dotenv').config();
const express = require("express");
const app = express();
const indexRouter = require('./routes/indexRouter');
const createRouter = require("./routes/createRouter");
const categoryRouter = require("./routes/categoryRouter");

app.use(express.urlencoded({extended: true}));
app.set("view-engine", "ejs");

app.use("/", indexRouter);
app.use("/categories", categoryRouter);
app.use("/create", createRouter);

app.listen(process.env.PORT, () => {
    console.log('server started');
});