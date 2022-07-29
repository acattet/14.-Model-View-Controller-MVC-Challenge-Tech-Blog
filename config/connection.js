const Sequelize = require("sequelize");
//this dude caused me such much trouble for no reason
require("dotenv").config();

let sequelize;

//add jawsdb, dont know why it made me add a credit card, kinda dumb

if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: "localhost",
        dialect: "mysql",
        port: 3306
    });
}

module.exports = sequelize;