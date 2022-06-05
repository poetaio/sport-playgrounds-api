const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const User = require('./User.model')(sequelize, DataTypes);
const SportPlayground = require('./SportPlayground.model')(sequelize, DataTypes);

module.exports = {
    User,
    SportPlayground,
};
