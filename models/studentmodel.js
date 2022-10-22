const { DataTypes } = require("sequelize");
const sequelize = require("../database/studentsdb");

const studentsModel = sequelize.define(
  "student",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    First_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Last_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    G_Phone_Number: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    Admission_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Student_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Preferred_learning_Method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Students',
  }
);

module.exports = studentsModel;
