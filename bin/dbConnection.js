const config = require("../config.json");
const { Sequelize } = require("sequelize");
const database = new Sequelize(config.db);

database
  .authenticate()
  .then(() => {
    console.log("database connect");
  })
  .catch((err) => {
    console.log("Database Erro", err);
  });

module.exports = database;
