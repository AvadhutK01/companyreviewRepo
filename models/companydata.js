const { Sequelize } = require("sequelize");
const sequelize = require("../util/db");
const Data = sequelize.define('reviews', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    companyname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pros: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cons: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    overallrating: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})
module.exports = Data;