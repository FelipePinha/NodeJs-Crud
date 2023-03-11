require("dotenv").config();

module.exports = {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    database: "user",
    username: "postgres",
    password: process.env.DB_PASSWORD,
};
