const { Pool } = require("pg"); //Pool is a class that comes with pg for establishing a longer connection compared to a Client (another class)


module.exports = new Pool({
    host: "localhost",
    user: "solomon",
    database: "inventory_test",
    password: "uKupjTj",
    port: 5432
});
// module.exports = new Pool({
//     connectionString: process.env.DATABASE
// });