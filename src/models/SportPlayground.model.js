module.exports = (sequelize, DataTypes) => sequelize.define('sport_playground', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    location: {
        type: 'Point',
        allowNull: false,
    },
});
