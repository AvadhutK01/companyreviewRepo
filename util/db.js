const Sequelize = require('sequelize');

const sequelize = new Sequelize('companyreviewdb', 'root', 'root123', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;