const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");
const Posts = require("./posts");

const posts = Posts(sequelize, DataTypes);

const db = {
    posts,
    sequelize,
};

module.exports = db;
