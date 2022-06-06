module.exports = (sequelize, DataTypes) => sequelize.define('sport_playground', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    lat: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    lng: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});
