const database = require("../../bin/dbConnection");
const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class USERS extends Model {}

USERS.init(
  {
    userId: {
      primaryKey: true,
      type: DataTypes.STRING(90),
    },
    firstName: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING(34),
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "USERS",
  }
);

module.exports = USERS;
