const posts = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Posts;
};

module.exports = posts;
