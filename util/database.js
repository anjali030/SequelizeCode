const Sequelize = require("sequelize");

const sequelize = new Sequelize("sequelizeDB", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
