const { Pool } = require("pg"); //Pool is a class that comes with pg for establishing a longer connection compared to a Client (another class)

module.exports = new Pool({
    connectionString: process.env.DATABASE,
    ssl: {
        rejectUnauthorize: false
    }
});